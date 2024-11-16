from . import views
from django.urls import path,include 

urlpatterns = [
    path('', include("allauth.urls")),
    path('', views.logi, name="Logi"),
    path('login',views.logi,name = "login"),
    path('logout',views.logou,name="logout"),
    path('signup',views.signup,name = "Signup"),
    path('accounts/profiles',views.redir , name = "redir")
]
