from rest_framework import serializers, viewsets
from .models import CognitiveExercise, UserExerciseProgress

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
