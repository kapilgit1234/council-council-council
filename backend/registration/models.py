from django.db import models

class Registration(models.Model):
    full_name = models.CharField(max_length=200)
    roll_number = models.CharField(max_length=100)
    ldap_id = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15, blank=True, null=True)
    department_year = models.CharField(max_length=50, blank=True, null=True)
    programme = models.CharField(max_length=50, blank=True, null=True)
    interests = models.TextField(blank=True, null=True)
    participation_type = models.CharField(max_length=50, blank=True, null=True)
    any_question = models.TextField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.full_name} ({self.roll_number})"
