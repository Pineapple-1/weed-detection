import torch
from PIL import Image
import io
import base64



def get_yolov5():
    # local best.pt
    model = torch.hub.load('./yolov5', 'custom', path='./model/best.pt', source='local')  # local repo
    model.conf = 0.4
    return model

def get_image_from_bytes(binary_image, max_size=1024):
    input_image = Image.open(io.BytesIO(binary_image)).convert("RGB")
    return input_image
