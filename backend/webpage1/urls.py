from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *
from django.urls import path

urlpatterns = [
    path('upload', upload_and_predict, name='upload_and_predict'),
    path('patients',patients,name="patienst"),

]



