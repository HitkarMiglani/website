from django.db import models

class Patients(models.Model):
    # GENDER_CHOICES = [
    #     ('M', 'Male'),
    #     ('F', 'Female'),
    # ]
    id = models.AutoField(primary_key=True,editable=False)
    Name = models.CharField(max_length=50,blank=False)
    Age = models.IntegerField(blank=False)
    Gender = models.CharField(max_length=1, blank=False,default='M')
    user_id = models.CharField(max_length=255,blank=False)
    user_name = models.CharField(max_length=255,blank=False,default="admin")
    Predection = models.CharField(max_length=255,null=True,default="None")

    @property
    def PID(self):
        return f"P_{self.id:05d}"
    
    def __str__(self):
        return f"{self.PID} {self.Name}"
    
