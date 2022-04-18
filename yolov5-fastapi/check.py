from segmentation import get_yolov5, get_image_from_bytes
from PIL import Image
import io
import os
import random

IMAGEDIR = "fastapi-images/"

model = get_yolov5()
results = model('./image1.jpg')
results.render()  # updates results.imgs with boxes and labels
for img in results.imgs:
    bytes_io = io.BytesIO()
    img_base64 = Image.fromarray(img)
    img_base64.save(bytes_io, format="jpeg")


mylist = ["apple", "banana", "cherry"]

rand = random.choice(mylist)
img_base64.save(IMAGEDIR+rand+'.jpeg')
files = os.listdir(IMAGEDIR)
path = f"{IMAGEDIR}{rand+'.jpeg'}"

print(path)
