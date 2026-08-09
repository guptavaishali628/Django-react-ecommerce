from django.contrib import admin
from matplotlib import category
from .models import Category, Product, UserProfile, Order, OrderItem

# Register your models here.(after creating models we need to register them in admin.py file to make them visible in the admin panel)
admin.site.register(Category)
admin.site.register(Product)
admin.site.register(UserProfile)
admin.site.register(Order)
admin.site.register(OrderItem)
