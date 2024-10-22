from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
import os
os.environ['TF_ENABLE_ONEDNN_OPTS'] = '0'
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
from rest_framework import status
from django.shortcuts import get_object_or_404
from .models import CognitiveExercise, UserExerciseProgress
import numpy as np
import tensorflow as tf
import cv2 as cv
from django.views.decorators.http import require_POST
from .models import CognitiveExercise
from keras.models import model_from_json # type: ignore


IMAGE_SIZE = [176,208]

def return_user(request):
    if request.method == "POST":
        print(request.user.username)
        return JsonResponse({'user': request.user.username})
    else:
        # print(request.user.usrname)
        return JsonResponse({'user':'Hitkar'})

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

# Cognitive Exercises ViewSet
# Cognitive Exercises View
@csrf_exempt
def cognitive_exercise_list(request):
    """ List all cognitive exercises """
    exercises = (list(CognitiveExercise.objects.values('name','description','type','difficulty')))
    # print(exercises)# Directly get values as dicts
    return JsonResponse({'exercises' : exercises},safe=False)  # Return the list of dicts

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def cognitive_exercise_retrieve(request, pk=1):
    """ Retrieve a specific cognitive exercise by its ID """
    exercise = get_object_or_404(CognitiveExercise, pk=pk)
    exercise_data = {
        'id': exercise.id,
        'name': exercise.name,
        'description': exercise.description,
        # Add other fields if necessary
    }
    return Response(exercise_data)

# User Progress View
@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def user_exercise_progress_list(request):
    """ List all progress for the authenticated user """
    user = request.user
    progress = UserExerciseProgress.objects.filter(user=user).values()  # Directly get progress data as dicts

    if request.method == 'GET':
        return Response(list(progress))

    if request.method == 'POST':
        data = request.data.copy()
        data['user'] = user.id
        # Assuming all fields are provided in request data
        new_progress = UserExerciseProgress.objects.create(**data)
        new_progress_data = {
            'id': new_progress.id,
            'user': new_progress.user.id,
            'exercise': new_progress.exercise.id,
            'progress': new_progress.progress,
            # Add other fields if necessary
        }
        return Response(new_progress_data, status=status.HTTP_201_CREATED)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def user_exercise_progress_retrieve(request, pk):
    """ Retrieve progress for a specific exercise """
    user = request.user
    progress = get_object_or_404(UserExerciseProgress, user=user, exercise_id=pk)
    progress_data = {
        'id': progress.id,
        'user': progress.user.id,
        'exercise': progress.exercise.id,
        'progress': progress.progress,
        # Add other fields if necessary
    }
    return Response(progress_data)

@require_POST
@csrf_exempt
def add_exercise(request):
    """ Add a new cognitive exercise """
    if request.method != 'POST':
        return JsonResponse({'error': 'Invalid request method'}, status=405)
    
    data = request.POST
    name = data.get('name')
    description = data.get('description')
    difficulty = data.get('difficulty')
    exercise_type = data.get('type')

    if not all([name, description, exercise_type, difficulty]):
        return JsonResponse({'error': 'All fields are required'}, status=400)
    if CognitiveExercise.objects.filter(name=name).exists():
        return JsonResponse({'error': 'Exercise with this name already exists'}, status=400)
    
    try:
        exercise = CognitiveExercise(
            name=name,
            description=description,
            type=exercise_type,
            difficulty=difficulty
        )
        exercise.save()
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=500)

    exercise_data = {
        'id': exercise.id,
        'name': exercise.name,
        'description': exercise.description,
        'type': exercise.type,
        'difficulty': exercise.difficulty,
    }

    return JsonResponse(exercise_data, status=201)