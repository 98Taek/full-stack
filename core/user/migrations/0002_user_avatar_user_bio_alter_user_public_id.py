# Generated by Django 4.2.5 on 2023-09-11 06:41

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('core_user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='avatar',
            field=models.ImageField(null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='user',
            name='bio',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='public_id',
            field=models.UUIDField(db_index=True, default=uuid.UUID('0d8c84e6-e3eb-4eb1-ae6a-1b28168a4487'), editable=False, unique=True),
        ),
    ]
