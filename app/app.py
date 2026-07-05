from PIL import Image
from surya.inference import SuryaInferenceManager
from surya.recognition import RecognitionPredictor
from surya.layout import LayoutPredictor
from surya.detection import DetectionPredictor

# #To keep alive llama cpp (Doesnt work)
# import os
# import sys

# os.environ["SURYA_INFERENCE_KEEP_ALIVE"] = "1"

manager = SuryaInferenceManager()


#Image Path for the future images
IMAGE_PATH="resources/NC00.png"

#Function to just extract texts
def simpleRecognition():
    recognition_predictor = RecognitionPredictor(manager)
    predictions = recognition_predictor([Image.open(IMAGE_PATH)])
    return predictions

#Fucntion to extract texts WRT the layouts
def layoutPredcitions():
    #setup
    recognition_predictor = RecognitionPredictor(manager)
    layout = LayoutPredictor(manager)

    image_to_parse = Image.open(IMAGE_PATH)
    #Push it into a single element list so that it can be iteratable which is needed for the layoutPredictor
    img_list = [image_to_parse]
    
    #broken function?
    predictions = recognition_predictor(img_list, layout(img_list))
    return predictions

#Function to extract text-line data
def textLineData():
    det_predictor = DetectionPredictor()
    predictions = det_predictor([Image.open(IMAGE_PATH)])
    return predictions

#Function to extract layout and reading order
def layoutReadingOrder():
    layout_predictor = LayoutPredictor(manager)
    layout_predictions = layout_predictor([Image.open(IMAGE_PATH)])
    return layout_predictions


#For OCR class manipulation
# OCRData = simpleRecognition()[0].blocks

# ElementNum = 0

# for part in OCRData:
#     ElementNum += 1
#     if part.skipped == False:
#         print(f"Element: {ElementNum}\nContent:{part.html}\n")


print(layoutPredcitions())