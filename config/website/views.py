from django.conf import settings
from django.contrib import messages
from django.core.mail import send_mail
from django.core.validators import validate_email
from django.core.exceptions import ValidationError
from django.http import JsonResponse
from django.shortcuts import render, redirect
from .models import ContactMessage


def flavours(request):
    return render(request, 'website/flavours.html')


def home(request):
    if request.method == "POST":
        is_ajax = request.headers.get("X-Requested-With") == "XMLHttpRequest"

        # Honeypot: real visitors never see or fill this field, bots often do
        if request.POST.get("website"):
            if is_ajax:
                return JsonResponse({"ok": True})
            return redirect("/")

        name = request.POST.get("name", "").strip()
        email = request.POST.get("email", "").strip()
        phone = request.POST.get("phone", "").strip()
        message = request.POST.get("message", "").strip()

        errors = []
        if len(name.split()) < 2:
            errors.append("Please enter your full name (first and last).")
        try:
            validate_email(email)
        except ValidationError:
            errors.append("Please enter a valid email address.")
        if not phone:
            errors.append("Please enter a phone number.")
        if not message:
            errors.append("Please enter a message.")
        if len(name) > 100 or len(email) > 254 or len(phone) > 30 or len(message) > 2000:
            errors.append("One of the fields is too long.")

        if errors:
            if is_ajax:
                return JsonResponse({"ok": False, "errors": errors}, status=400)
            for e in errors:
                messages.error(request, e)
            return redirect("/")

        enquiry = ContactMessage.objects.create(
            name=name,
            email=email,
            phone=phone,
            message=message,
        )

        send_mail(
            subject=f"New enquiry from {enquiry.name}",
            message=(
                f"Name: {enquiry.name}\n"
                f"Email: {enquiry.email}\n"
                f"Phone: {enquiry.phone}\n\n"
                f"Message:\n{enquiry.message}"
            ),
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.NOTIFY_EMAIL],
            fail_silently=True,
        )

        if is_ajax:
            return JsonResponse({"ok": True})

        messages.success(request, "Thank you! We'll be in touch soon.")
        return redirect("/")

    return render(request, "website/index.html")
