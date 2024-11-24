from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from .views import index

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('webpage1.urls')),
    path('',index, name='index')
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
