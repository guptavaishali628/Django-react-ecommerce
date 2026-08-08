from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# Create your views here.

def home(request):
    data = {
    'message': 'Welcome to the E-commerce Store!' # Example data to pass to the template
    }
    return JsonResponse(data)
