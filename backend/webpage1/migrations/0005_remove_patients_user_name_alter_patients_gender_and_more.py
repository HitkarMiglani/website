# Generated by Django 5.1 on 2024-12-01 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webpage1', '0004_remove_patients_pid_alter_patients_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patients',
            name='user_name',
        ),
        migrations.AlterField(
            model_name='patients',
            name='Gender',
            field=models.CharField(default='M', max_length=1),
        ),
        migrations.AlterField(
            model_name='patients',
            name='Name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='patients',
            name='Predection',
            field=models.CharField(default='None', max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='patients',
            name='user_id',
            field=models.CharField(max_length=255),
        ),
    ]
