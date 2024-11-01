# Generated by Django 5.1 on 2024-10-19 15:32

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage1', '0002_patients_adl_patients_behavioralproblems_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patients',
            name='id',
        ),
        migrations.AddField(
            model_name='patients',
            name='Name',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='patients',
            name='PID',
            field=models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False),
        ),
    ]
