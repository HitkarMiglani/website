from django.contrib import admin
from .models import Patients , UserExerciseProgress, CognitiveExercise

admin.site.register(Patients)
admin.site.register(UserExerciseProgress)
admin.site.register(CognitiveExercise)

# Register your models here.
