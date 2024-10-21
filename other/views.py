import json
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.template import loader
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from datetime import datetime
from django.contrib.auth.hashers import make_password


def logou(request):
    logout(request)
    return redirect("http://127.0.0.1:8000/login")

def logi(request):
    if request.method == "POST":
        name = request.POST['name']
        password = (request.POST['password'])
        global user
        user = authenticate(request, username=name , password=password)
        print(request)
        try:
            if user is not None:
                login(request,user)  
                redir(request)
            else :
                context = {'error':'Username or Password is incorrect'}
                template = loader.get_template('login.html')
                return HttpResponse(template.render(context,request))
            
        except Exception as e :
            print("Error in Login")
            print(e)
    return render(request,'login.html')
    

def signup(request):    
    if request.method == "POST":
        name = request.POST["name"]
        password = request.POST["password"]
        email = request.POST["email"]

        print(name)

        if User.objects.filter(username = name).first():
            error = "User Already exists...Login"
            return render(request,"login.html",{'error':error})
        try :
            password = make_password(password)

            print(password,name)

            myuser = User.objects.create(username = name,email=email,password=password)
            myuser.date_joined  = datetime.today()
            myuser.save()
            print("New User Created Successfully..\nRedirecting to Login page ")
            return render(request,"login.html",context={"error":"Registration Successful"})

        except:
            return render(request,'sinup.html',context={"error":"Error in SignUp!"})

    return render(request,'signup.html')


def redir(request):
    data = {'user':user}
    with open('data.json', 'w') as outfile:
        print("Writing to file")
        json.dump(data, outfile)
                
    return redirect("http://localhost:3000/")