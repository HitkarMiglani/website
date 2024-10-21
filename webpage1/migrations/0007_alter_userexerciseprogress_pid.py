# Generated by Django 5.1 on 2024-10-21 14:17

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage1', '0006_userexerciseprogress_pid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userexerciseprogress',
            name='PID',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='webpage1.patients'),
        ),
    ]
