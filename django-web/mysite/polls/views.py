from django.shortcuts import get_object_or_404, render
from django.http import Http404
from django.http import HttpResponse

from .models import Question

# Create your views here.
def index(request):
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {
        # this assign the variable "latest_question_list" to be used inside html template
        "latest_question_list": latest_question_list,
    }
    # render() is a shortcut to load template -> fill context -> return HttpResponse
    return render(request, "polls/index.html", context)

def detail(request, question_id):
    # get_object_or_404() is a shortcut that get entry, raise 404 if DoesNotExist
    question = get_object_or_404(Question, pk=question_id)
    context = {
        "question" : question,
    }
    return render(request, "polls/detail.html", context)

def results(request, question_id):
    response = "You're looking at the results of question %s."
    return HttpResponse(response % question_id)

def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)