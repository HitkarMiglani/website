from datetime import datetime
import json
import pandas as pd
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
from .models import Patients
import numpy as np
import cv2 as cv
import joblib,xgboost # type: ignore
from keras.models import load_model # type: ignore 

file_path = r'.\staticfiles\patients_data.json'

IMAGE_SIZE = [176,208]

class AIModel:
    def __init__(self):
        self.model = load_model('mri_modelll.h5')
    
    @staticmethod
    def load_image(fname):
        print(fname)
        img = cv.imread(fname)
        img = cv.cvtColor(img, cv.COLOR_BGR2RGB)
        
        shape = (1,IMAGE_SIZE[0], IMAGE_SIZE[1],3)
        
        img = img.reshape(shape)
        
        return img

    def predict(self, image_array,PID):
        st = f"./media/{PID}_{image_array}"
        print(st)
        
        img = self.load_image(st)
        
        prediction = self.model.predict(img)
        prediction = np.argmax(np.squeeze(prediction))
        return ['NonDemented', 'VeryMild', 'Mild', 'Moderate'][prediction]

class TextModel:
    def __init__(self):
        with open('model.joblib.dat', 'rb') as file:
            self.model = joblib.load(file)
        

    def predict(self, data:pd.DataFrame):
        pred = self.model.predict(data)
        pred = np.argmax(pred)
        if not pred: return "You Have A Chance Of Getting Alzheimer's Disease"
        else: return "You Don't Have A Chance Of Getting Alzheimer's Disease" 

@csrf_exempt
def upload_and_predict(request):
    if request.method == 'POST' and request.FILES.get('file'):
        uploaded_file = request.FILES['file']
        PID = request.POST.get('PID')
        
        model = AIModel()
        # image save to django data base 
        if not default_storage.exists(f'{PID}_{uploaded_file.name}'):
            file_name = default_storage.save(f'{PID}_{uploaded_file.name}', ContentFile(uploaded_file.read()))
        else: file_name = f'{PID}_{uploaded_file.name}'
        
        uploaded_file_url = default_storage.url(file_name)
        prediction = model.predict(uploaded_file,PID)
        
        result = {'prediction': prediction,'file':uploaded_file_url}
        
        return JsonResponse(result)
    return JsonResponse({'error': 'Invalid request'}, status=400)

@csrf_exempt
def patients(request):
    if request.method == 'POST':
        data = request.POST
        user_id = data.get('user_id')
        patiens = Patients.objects.filter(user_id=user_id)
        return JsonResponse(list(patiens.values()),safe=False)
    return JsonResponse({'error': 'Invalid request'}, status=400)



@csrf_exempt
def add_patient(request):
    if request.method == 'POST':
        data = request.POST
        user_id = data.get('user_id')
        name = data.get('name')
        age = data.get('age')
        gender = data.get('gender')
        
        print(name,age,gender,user_id)

        if not all([user_id, name, age,gender]):
            return JsonResponse({'error': 'All fields are required'}, status=400)

        try:
            patient = Patients(user_id=user_id,Name=name, Age=age,Gender=gender)
            patient.save()
            
            return JsonResponse({'message': 'Patient added successfully'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)

    
@csrf_exempt
def patient_data(request):
    if request.method == 'POST':
        data = request.POST
        PID = data.get('PID')
        smoaking = data.get('smoaking')
        
        if not smoaking:
            with open(file_path, 'r') as json_file:
                return JsonResponse(json.load(json_file).get(PID), status=200, safe=False)
        
        
        hypertension = data.get('hypertension')
        cholestrol_total = data.get('cholestrol_total')
        cholestrol_hdl = data.get('cholestrol_hdl')
        msme = data.get('msme')
        functional_assessment = data.get('functional_assessment')
        memory_complaint = data.get('memory_complaint')
        behaviour_complaint = data.get('behaviour_complaint')
        adl = data.get('adl')
        disorientation = data.get('disorientation')
        persnality_change = data.get('persnality_change')
  
        try:

            model = TextModel()
            result = model.predict(pd.DataFrame(data))
        
            data_dict = {
                'smoaking': smoaking,
                'hypertension': hypertension,
                'cholestrol_total': cholestrol_total,
                'cholestrol_hdl': cholestrol_hdl,
                'msme': msme,
                'functional_assessment': functional_assessment,
                'memory_complaint': memory_complaint,
                'behaviour_complaint': behaviour_complaint,
                'adl': adl,
                'disorientation': disorientation,
                'persnality_change': persnality_change,
                'date': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
                'predection': result,
            }
            
            with open(file_path, 'r+') as json_file:
                json_file_data = json.load(json_file)
                json_file_data[PID].append(data_dict)
                json_file.seek(0)
                json.dump(json_file_data, json_file,indent=4) 
            
            return JsonResponse({'message': 'Patient data saved successfully','Predection':result}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Invalid request'}, status=400)


@csrf_exempt
def text_class(request):
    if request.method == 'POST':
        data = request.POST
        model = TextModel()
        
        df = pd.DataFrame(data, columns=['PID','FunctionalAssessment', 'ADL', 'MMSE', 'CholesterolTotal', 'CholesterolHDL', 'BMI', 'DietQuality', 'MemoryComplaints', 'BehavioralProblems', 'CholesterolTriglycerides', 'AlcoholConsumption', 'SleepQuality','PhysicalActivity','CholesterolLDL'],index=[0])
        df.drop('PID',axis=1,inplace=True)
        df['Age'] = 20
        
        lis = ['BMI','AlcoholConsumption','PhysicalActivity','DietQuality','SleepQuality','CholesterolTriglycerides','CholesterolLDL','FunctionalAssessment','ADL','MMSE','CholesterolTotal','CholesterolHDL','Age']
        
        from sklearn.preprocessing import MinMaxScaler
        scaler=MinMaxScaler()
        
        df[lis]=scaler.fit_transform(df[lis])
        df['MemoryComplaints'] = df['MemoryComplaints'].astype('Int32')
        df['BehavioralProblems'] = df['BehavioralProblems'].astype('Int32')
        
        cols = ['FunctionalAssessment', 'ADL', 'MMSE', 'MemoryComplaints', 'BehavioralProblems', 'CholesterolHDL', 'BMI', 'CholesterolTotal', 'DietQuality', 'CholesterolTriglycerides', 'AlcoholConsumption', 'SleepQuality', 'PhysicalActivity', 'CholesterolLDL', 'Age']
        
        result = str(model.predict(df[cols]))
        return JsonResponse({'data': result}, status=200)
    return JsonResponse({'error': 'Invalid request'}, status=400)