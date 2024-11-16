from rest_framework import serializers, viewsets
from .models import CognitiveExercise, UserExerciseProgress,Patients;

class PatientsSerializer(serializers.ModelSerializer):
    class Mets:
        model = Patients
        fields = ['PID', 'Name', 'Age', 'Gender', 'Diagnosis']

class PatientsViewSet(viewsets.ModelViewSet):
    queryset = Patients.objects.all()
    serializer_class = PatientsSerializer

class CognitiveExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = CognitiveExercise
        fields = ['id', 'name', 'description', 'difficulty', 'type']

class CognitiveExerciseViewSet(viewsets.ModelViewSet):
    queryset = CognitiveExercise.objects.all()
    serializer_class = CognitiveExerciseSerializer

class UserExerciseProgressSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserExerciseProgress
        fields = ['user', 'exercise', 'score', 'date_completed']

class UserExerciseProgressViewSet(viewsets.ModelViewSet):
    queryset = UserExerciseProgress.objects.all()
    serializer_class = UserExerciseProgressSerializer
