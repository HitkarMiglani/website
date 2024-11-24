from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
from .models import Patients
import numpy as np
import tensorflow as tf
import cv2 as cv
from django.views.decorators.http import require_POST
from keras.models import model_from_json # type: ignore


IMAGE_SIZE = [176,208]

def load_image(fname):
    
    print(fname)
    img = cv.imread(fname)
    img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
    
    shape = (1,IMAGE_SIZE[0], IMAGE_SIZE[1],3)
    
    img = img.reshape(shape)
    
    return img
class AIModel:
    def __init__(self):
        # json_file = open("/kaggle/working/model_json.json", "r")
        # model_json = json_file.read()
        # json_file.close()
        # self.model = model_from_json(model_json)
        # self.model.load_weights("/kaggle/working/model_json.keras")
        self.model = ""
    
    def predict(self, image_array):

        st = f"./media/{image_array}"
        print(st)
        
        img = load_image(st)
        
        prediction = self.model.predict(img)
        prediction = np.squeeze(prediction)
        prediction = np.argmax(prediction)
        # print("img :: ", img)
        return prediction

@csrf_exempt
def upload_and_predict(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        
        model = AIModel()
        # image save to django data base 
        file_name = default_storage.save(uploaded_file.name, ContentFile(uploaded_file.read()))
        uploaded_file_url = default_storage.url(file_name)
        
        prediction = model.predict(uploaded_file)
        
        result = {'prediction': prediction,'file':uploaded_file_url}
        
        return JsonResponse(result)
    return JsonResponse({'error': 'Invalid request'}, status=400)

# # Cognitive Exercises ViewSet
# # Cognitive Exercises View

# @csrf_exempt
# def patients(request):
#     """ List all cognitive exercises """
#     if request.method == "POST":
#         data = request.POST
#         user = data.get('user')
#         name = data.get('name')
#         age = data.get('age')
#         gender = data.get('gender')
#         smoking = data.get('smoking')
#         hypertension = data.get('hypertension')
#         cholestrol_total = data.get('cholestrol_total')
#         cholestrol_hdl = data.get('cholestrol_hdl')
#         msme = data.get('msme')
#         functional_assessment = data.get('functional_assessment')
#         memory_complaints = data.get('memory_complaints')
#         behavioral_problems = data.get('behavioral_problems')
#         adl = data.get('adl')
#         disorientation = data.get('disorientation')
#         personality_changes = data.get('personality_changes')
#         prediction = data.get('prediction')

#         if not all([user, name, age, gender, smoking, hypertension, cholestrol_total, cholestrol_hdl, msme, functional_assessment, memory_complaints, behavioral_problems, adl, disorientation, personality_changes, prediction]):
#             return JsonResponse({'error': 'All fields are required'}, status=400)
#         if CognitiveExercise.objects.filter(Name=name).exists():
#             return JsonResponse({'error': 'Exercise with this name already exists'}, status=400)
        
#         try:
#             exercise = CognitiveExercise(
#                 user=user,
#                 Name=name,
#                 Age=age,
#                 Gender=gender,
#                 Smoking=smoking,
#                 Hypertension=hypertension,
#                 CholestrolTotal=cholestrol_total,
#                 CholestrolHDL=cholestrol_hdl,
#                 MSME=msme,
#                 FunctionalAssessment=functional_assessment,
#                 MemoryComplaints=memory_complaints,
#                 BehavioralProblems=behavioral_problems,
#                 ADL=adl,
#                 Disorientation=disorientation,
#                 PersonalityChanges=personality_changes,
#                 Predection=prediction
#             )
#             exercise.save()
#         except Exception as e:
#             return JsonResponse({'error': str(e)}, status=500)

#         Patients_data = (list(Patients.objects.values().all()))
#         return JsonResponse({'patients' : Patients_data}, safe=False)
    
#     patients = (list(Patients.objects.values().all()))
#     # print(exercises)# Directly get values as dicts
#     return JsonResponse({'patients' : patients},safe=False)

def patients(request):
    patients = Patients.objects.all()
    return JsonResponse({'patients' : list(patients.values())},safe=False)