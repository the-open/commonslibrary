from django.conf import settings
from django.db import models

from ckeditor.fields import RichTextField
from colorfield.fields import ColorField


class Organisation(models.Model):
    title = models.CharField(max_length=256, unique=True)
    colour = ColorField(default='#50E3C2')
    url = models.URLField(blank=True)
    telephone = models.CharField(max_length=16, blank=True)
    address = RichTextField(blank=True)
    description = RichTextField(blank=True)
    logo = models.ImageField(blank=True)
    email = models.EmailField(blank=True)
    created_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='organisations_created'
    )
    updated_by = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='organisations_updated'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('-created_at',)

    def __str__(self):
        return self.title
