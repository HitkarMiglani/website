# Generated by Django 5.1 on 2024-10-23 14:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage1', '0010_alter_patients_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='patients',
            name='Predection',
            field=models.CharField(default='None', max_length=255),
        ),
    ]
