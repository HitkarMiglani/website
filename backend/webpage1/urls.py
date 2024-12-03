from django.urls import path
from .views import *
from django.urls import path

urlpatterns = [
    path('upload', upload_and_predict, name='upload_and_predict'),
    path('patients',patients,name="patienst"),
    path('add_patient',add_patient,name="add_patient"),
    path('text_class',text_class,name="text_class"),
    path('patient_data',patient_data,name="patient_data"),
]



