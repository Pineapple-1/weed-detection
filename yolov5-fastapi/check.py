from segmentation import get_yolov5, get_image_from_bytes, get_pest_yolov5
from PIL import Image
import os
import torch
import json

IMAGEDIR = "C:/Users/abdul/Desktop/batch_test"
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
list = results.pandas().xyxy.to_json(orient="records")

for x in list:
    RESULTSARR.append(x.to_json(orient="records"))


#res = json.loads(RESULTSARR)

print(list)