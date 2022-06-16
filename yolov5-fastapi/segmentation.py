import torch
from PIL import Image
import io
import base64



def get_yolov5(confidence = 0.5):
    # local best.pt
    model = torch.hub.load('./yolov5', 'custom', path='./model/best.pt', source='local')  # local repo
    model.conf = confidence
    return model

def get_pest_yolov5(confidence = 0.4):
    # local best.pt
    model = torch.hub.load('./yolov5', 'custom', path='./model/pest.pt', source='local')  # local repo
    model.conf = confidence
    return model

def get_image_from_bytes(binary_image, max_size=1024):
    input_image = Image.open(io.BytesIO(binary_image)).convert("RGB")
    return input_image


def get_image_from_bytes_array(binary_image_array, max_size=1024):
    img_arr = []
    for img in binary_image_array:
        input_image = Image.open(io.BytesIO(img)).convert("RGB")
        img_arr.append(input_image)
    return img_arr
