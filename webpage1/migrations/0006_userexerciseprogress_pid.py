# Generated by Django 5.1 on 2024-10-21 14:16

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage1', '0005_cognitiveexercise_userexerciseprogress'),
    ]

    operations = [
        migrations.AddField(
            model_name='userexerciseprogress',
            name='PID',
            field=models.ForeignKey(default='', on_delete=django.db.models.deletion.CASCADE, to='webpage1.patients'),
        ),
    ]
