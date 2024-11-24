from django.db import models
from django.contrib.auth.models import User


class Patients(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
    ]
    id = models.AutoField(primary_key=True,editable=False)
    # PID = models.CharField(max_length=10, unique=True, editable=False,default="P_00000")
    Name = models.CharField(max_length=50,default="")
    Age = models.IntegerField(blank=False)
    Gender = models.CharField(max_length=1, choices=GENDER_CHOICES, blank=False,default='M')
    user_id = models.CharField(max_length=255,blank=False,default="Null")
    user_name = models.CharField(max_length=255,blank=False,default="Null")
    Predection = models.CharField(max_length=255,default="None")

    @property
    def PID(self):
        return f"P_{self.id:05d}"
    
    def __str__(self):
        return f"{self.PID} {self.Name}"
    
