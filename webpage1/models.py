from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import pre_save
from django.dispatch import receiver


class Patients(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]

    YES_NO_CHOICES = [
        (0, 'No'),
        (1, 'Yes'),
    ]
    
    id = models.AutoField(primary_key=True,unique=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Age = models.IntegerField(blank=False)
    PID = models.CharField(max_length=10, unique=True, editable=False)
    Name = models.CharField(max_length=50,default="")
    Gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=False,default='M')
    Smoking = models.IntegerField(choices=YES_NO_CHOICES,default=0)
    Hypertension = models.IntegerField(choices=YES_NO_CHOICES,default=0)
    CholestrolTotal = models.FloatField(blank=False, null=False,default=0)
    CholestrolHDL = models.FloatField(blank=False, null=False,default=0)
    MSME = models.FloatField(blank=False, null=False,default=0)
    FunctionalAssessment = models.FloatField(blank=False, null=False,default=0)
    MemoryComplaints = models.IntegerField(choices=YES_NO_CHOICES,default=0)
    BehavioralProblems = models.IntegerField(choices=YES_NO_CHOICES, blank=False,default=0)
    ADL = models.FloatField(blank=False, null=False,default=0.00)
    Disorientation = models.IntegerField(choices=YES_NO_CHOICES,default=0)
    PersonalityChanges = models.IntegerField(choices=YES_NO_CHOICES,default=0)
    Predection = models.CharField(max_length=255,default="None")

    
    def save(self, *args, **kwargs):
        """
        Overrides the save method to automatically generate a PID if it does not exist.
        
        The PID is generated in the format "P_XXXXX" where XXXXX is the zero-padded ID incremented by 1.
        
        Args:
            *args: Variable length argument list.
            **kwargs: Arbitrary keyword arguments.
        """
        if not self.PID:
            self.PID = f"P_{(self.id):05d}"
        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.PID} {self.Name}"
    
@receiver(pre_save, sender=Patients)
def set_patient_pid(sender, instance, **kwargs):
    if not instance.PID:
        last_patient = Patients.objects.all().order_by('id').last()
        if last_patient:
            instance.id = last_patient.id + 1
        else:
            instance.id = 1
        instance.PID = f"P_{instance.id:05d}"

class CognitiveExercise(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255, unique=True, blank=False)
    description = models.TextField()
    difficulty = models.CharField(max_length=50) 
    type = models.CharField(max_length=100)  
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return self.name

class UserExerciseProgress(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    PID = models.ForeignKey(Patients, on_delete=models.CASCADE)
    exercise = models.ForeignKey(CognitiveExercise, on_delete=models.CASCADE)
    score = models.IntegerField()
    date_completed = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.exercise.name} - {self.score}"
