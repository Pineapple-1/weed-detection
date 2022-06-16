from segmentation import get_yolov5, get_image_from_bytes, get_pest_yolov5
from PIL import Image
import os
import torch
import json

IMAGEDIR = "C:/Users/hamza/Desktop/test"
RESULTSARR=[]
#results = model('./image1.jpg')
#results.render()  # updates results.imgs with boxes and labels
model = get_yolov5()
# Model
imgs =[]
# Images
dir = 'https://ultralytics.com/images/'
#imgs = [IMAGEDIR + f for f in IMAGEDIR]  # batch of images
for filename in os.listdir(IMAGEDIR):
    f = os.path.join(IMAGEDIR, filename)
    # checking if it is a file
    if os.path.isfile(f):
        im=Image.open(f)
        imgs.append(f)
print(imgs)
# Inference
results = model(imgs)
hello = results.pandas().xyxy

list = results.pandas().xyxy[0].to_json(orient="records")
list1 = results.pandas().xyxy[1].to_json(orient="records")



res = json.load(list+list1)
print(res)

