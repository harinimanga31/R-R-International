import smtplib
from email.message import EmailMessage

from ..config import settings


def _smtp_configured() -> bool:
    return all(
        [
            settings.owner_email,
            settings.smtp_host,
            settings.smtp_user,
            settings.smtp_password,
        ]
    )


def _send(subject: str, body: str) -> None:
    if not _smtp_configured():
        raise RuntimeError(
            "Owner email notifications are not configured. "
            "Set OWNER_EMAIL, SMTP_HOST, SMTP_USER and SMTP_PASSWORD in backend/.env."
        )

    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = settings.smtp_from or settings.smtp_user
    message["To"] = settings.owner_email
    message.set_content(body)

    if settings.smtp_use_ssl:
        with smtplib.SMTP_SSL(
            settings.smtp_host,
            settings.smtp_port,
            timeout=settings.smtp_timeout_seconds,
        ) as server:
            server.login(settings.smtp_user, settings.smtp_password)
            server.send_message(message)
        return

    with smtplib.SMTP(
        settings.smtp_host,
        settings.smtp_port,
        timeout=settings.smtp_timeout_seconds,
    ) as server:
        server.ehlo()
        if settings.smtp_use_tls:
            server.starttls()
            server.ehlo()
        server.login(settings.smtp_user, settings.smtp_password)
        server.send_message(message)


def send_enquiry_notification(
    *,
    name: str,
    email: str,
    phone: str,
    subject: str,
    message_text: str,
    created_at: str,
) -> None:
    body = f"""RR International Website - New Enquiry

Customer name: {name}
Customer email: {email}
Customer phone: {phone}
Subject: {subject}
Submission date/time (UTC): {created_at}

Full enquiry/message:
{message_text}
"""
    _send("New Enquiry Received - RR International", body)


def send_quote_notification(data: dict) -> None:
    body = f"""RR International Website - New Quote Request

Quote ID: {data.get("quote_id", "")}
Submission date/time (UTC): {data.get("created_at", "")}
Status: {data.get("status", "")}

Customer information
--------------------
Name: {data.get("customer_name", "")}
Email: {data.get("email", "")}
Phone: {data.get("phone", "")}

Shipment information
--------------------
Shipment type: {data.get("shipment_type", "")}
Origin: {data.get("origin_city", "")}, {data.get("origin_country", "")}
Destination: {data.get("destination_city", "")}, {data.get("destination_country", "")}
Preferred service: {data.get("preferred_service", "")}
Package description: {data.get("description", "")}
Weight (kg): {data.get("weight_kg", "")}
Dimensions (cm): {data.get("length_cm", "")} x {data.get("width_cm", "")} x {data.get("height_cm", "")}
Number of packages: {data.get("package_count", "")}
Pickup address: {data.get("pickup_address", "")}
Delivery address: {data.get("delivery_address", "")}
Additional requirements/message: {data.get("notes", "") or "—"}
"""
    _send("New Quote Request Received - RR International", body)
