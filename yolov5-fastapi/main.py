from fastapi import FastAPI, File
from fastapi.param_functions import Path
from segmentation import get_yolov5, get_image_from_bytes, get_pest_yolov5
from starlette.responses import Response
import io
from PIL import Image
import json
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
import os
from fastapi.responses import FileResponse
import random


model = get_yolov5()
pest_model = get_pest_yolov5()
IMAGEDIR = "fastapi-images/"
mylist = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','p','q','r']

app = FastAPI(
    title="Object Detection Api",
    description="""Obtain object value out of image
                    and return image and json result""",
    version="0.0.1",
)

origins = [
    "http://localhost",
    "http://localhost:8000",
    "http://localhost:3000",
    "*"
    ]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount('/static', StaticFiles(directory='static'), name='static')


@app.get('/notify/v1/health')
def get_health():
    """
    Usage on K8S
    readinessProbe:
        httpGet:
            path: /notify/v1/health
            port: 80
    livenessProbe:
        httpGet:
            path: /notify/v1/health
            port: 80
    :return:
        dict(msg='OK')
    """
    return dict(msg='OK')


@app.post("/object-to-json")
async def detect_weed_return_json_result(file: bytes = File(...)):
    input_image = get_image_from_bytes(file)
    results = model(input_image)
    detect_res = results.pandas().xyxy[0].to_json(orient="records")
    detect_res = json.loads(detect_res)
    return {"result": detect_res}


@app.post("/object-to-img")
async def detect_return_base64_img(file:bytes = File(...) ):
    input_image = get_image_from_bytes(file)
    results = model(input_image)
    results.render()  # updates results.imgs with boxes and labels
    for img in results.imgs:
        bytes_io = io.BytesIO()
        img_base64 = Image.fromarray(img)
        img_base64.save(bytes_io, format="jpeg")
        rand = random.choice(mylist)
        
    img_base64.save(IMAGEDIR+rand+'.jpeg')
    path = f"{IMAGEDIR}{rand}"
    return dict(path=rand)
    
@app.post("/object-to-img-pest")
async def detect_return_base64_img(file:bytes = File(...) ):
    input_image = get_image_from_bytes(file)
    results = pest_model(input_image)
    results.render()  # updates results.imgs with boxes and labels
    for img in results.imgs:
        bytes_io = io.BytesIO()
        img_base64 = Image.fromarray(img)
        img_base64.save(bytes_io, format="jpeg")

    rand = random.choice(mylist)
    img_base64.save(IMAGEDIR+rand+'.jpeg')
    path = f"{IMAGEDIR}{rand}"
    return dict(path=rand)

@app.post("/object-to-json-pest")
async def detect_pest_return_json_result(file: bytes = File(...)):
    input_image = get_image_from_bytes(file)
    results = pest_model(input_image)
    detect_res = results.pandas().xyxy[0].to_json(orient="records")
    detect_res = json.loads(detect_res)
    return {"result": detect_res}


@app.get("/img/{image_filename}")
def img(image_filename:str):
    return FileResponse("fastapi-images/"+image_filename+".jpeg")

@app.get("/products/insectisides")
def product_list():
    file = open('data.json')
    json_data = json.load(file)
    file.close()
    return json_data

@app.get("/products/herbisides")
def product_list():
    file = open('herbiside.json')
    json_data = json.load(file)
    file.close()
    return json_data

