from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path, include

urlpatterns = [
    path('upload/', upload_and_predict, name='upload_and_predict'),
    path('user/',return_user,name='return_user'),
    path('exercises/', cognitive_exercise_list ,name="exercises"),
    path('exercises/d',cognitive_exercise_retrieve, name="lsit"),
    path('progress/', user_exercise_progress_list,name='progress'),
    path('progress/d', user_exercise_progress_retrieve, name='progress_list'),
    path('addExercise/',add_exercise,name='add_exercise'),
    path('patients',patients,name="patienst"),

]



