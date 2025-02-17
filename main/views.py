from django.shortcuts import render, redirect
from .forms import ClientForm  

def index(request):
    if request.method == 'POST':
        form = ClientForm(request.POST)
        if form.is_valid():
            form.save()
            
            return redirect('index') 
    else:
        form = ClientForm()

    return render(request, 'main/index.html', {'form': form})
