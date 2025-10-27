from django.contrib import admin
from .models import Registration

@admin.register(Registration)
class RegistrationAdmin(admin.ModelAdmin):
    list_display = ('full_name', 'roll_number', 'ldap_id', 'programme', 'department_year', 'phone_number','created_at','any_question','interests')
    search_fields = ('full_name', 'roll_number', 'ldap_id', 'programme', 'department_year', 'phone_number','created_at','any_question','interests')
    list_filter = ( 'programme', 'department_year','interests')
