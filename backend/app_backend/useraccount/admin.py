from django.contrib import admin
from django.contrib.auth import get_user_model
from django.contrib.auth.admin import UserAdmin

# Get the custom user model defined in your settings
User = get_user_model()

@admin.register(User)
class CustomUserAdmin(UserAdmin):
    # Customizing the admin interface for the user model
    list_display = ('id', 'email', 'name', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active')
    search_fields = ('email', 'name')
    ordering = ('id',)
    filter_horizontal = ()
    fieldsets = (
        (None, {
            'fields': ('email', 'password', 'name', 'is_active', 'is_staff', 'is_superuser', 'avatar'),
        }),
    )
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('email', 'password1', 'password2', 'name', 'is_active', 'is_staff', 'is_superuser', 'avatar')}
        ),
    )