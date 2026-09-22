# import json
# import urllib.error
# import urllib.request

# from ..config import settings


# def _resend_configured() -> bool:
#     return bool(
#         getattr(settings, "resend_api_key", "")
#         and settings.owner_email
#     )


# def _send(subject: str, body: str) -> None:
#     if not _resend_configured():
#         raise RuntimeError(
#             "Owner email notifications are not configured. "
#             "Set RESEND_API_KEY and OWNER_EMAIL."
#         )

#     payload = {
#         "from": "RR International <onboarding@resend.dev>",
#         "to": [settings.owner_email],
#         "subject": subject,
#         "text": body,
#     }

#     request = urllib.request.Request(
#         "https://api.resend.com/emails",
#         data=json.dumps(payload).encode("utf-8"),
#         headers={
#             "Authorization": f"Bearer {settings.resend_api_key}",
#             "Content-Type": "application/json",
#         },
#         method="POST",
#     )

#     try:
#         with urllib.request.urlopen(
#             request,
#             timeout=15,
#         ) as response:
#             response_body = response.read().decode("utf-8")

#             if response.status < 200 or response.status >= 300:
#                 raise RuntimeError(
#                     f"Resend API returned HTTP {response.status}: "
#                     f"{response_body}"
#                 )

#             print(f"Resend email sent successfully: {response_body}")

#     except urllib.error.HTTPError as exc:
#         error_body = exc.read().decode("utf-8", errors="replace")
#         print(f"RESEND ERROR {exc.code}: {error_body}")

#         raise RuntimeError(
#             f"Resend API returned HTTP {exc.code}: {error_body}"
#         ) from exc

#     except urllib.error.URLError as exc:
#         print(f"RESEND CONNECTION ERROR: {exc.reason}")

#         raise RuntimeError(
#             f"Could not connect to Resend: {exc.reason}"
#         ) from exc


# def send_enquiry_notification(
#     *,
#     name: str,
#     email: str,
#     phone: str,
#     subject: str,
#     message_text: str,
#     created_at: str,
# ) -> None:
#     body = f"""RR International Website - New Enquiry

# Customer name: {name}
# Customer email: {email}
# Customer phone: {phone}
# Subject: {subject}
# Submission date/time (UTC): {created_at}

# Full enquiry/message:
# {message_text}
# """

#     _send(
#         "New Enquiry Received - RR International",
#         body,
#     )


# def send_quote_notification(data: dict) -> None:
#     body = f"""RR International Website - New Quote Request

# Quote ID: {data.get("quote_id", "")}
# Submission date/time (UTC): {data.get("created_at", "")}
# Status: {data.get("status", "")}

# Customer information
# --------------------
# Name: {data.get("customer_name", "")}
# Email: {data.get("email", "")}
# Phone: {data.get("phone", "")}

# Shipment information
# --------------------
# Shipment type: {data.get("shipment_type", "")}
# Origin: {data.get("origin_city", "")}, {data.get("origin_country", "")}
# Destination: {data.get("destination_city", "")}, {data.get("destination_country", "")}
# Preferred service: {data.get("preferred_service", "")}
# Package description: {data.get("description", "")}
# Weight (kg): {data.get("weight_kg", "")}
# Dimensions (cm): {data.get("length_cm", "")} x {data.get("width_cm", "")} x {data.get("height_cm", "")}
# Number of packages: {data.get("package_count", "")}
# Pickup address: {data.get("pickup_address", "")}
# Delivery address: {data.get("delivery_address", "")}
# Additional requirements/message: {data.get("notes", "") or "—"}
# """

#     _send(
#         "New Quote Request Received - RR International",
#         body,
#     )


import json
import urllib.error
import urllib.request

from ..config import settings


BREVO_API_URL = "https://api.brevo.com/v3/smtp/email"


def _brevo_configured() -> bool:
    return bool(
        settings.brevo_api_key
        and settings.owner_email
    )


def _send(
    subject: str,
    body: str,
    reply_to: str | None = None,
) -> None:
    if not _brevo_configured():
        raise RuntimeError(
            "Brevo email notifications are not configured. "
            "Set BREVO_API_KEY and OWNER_EMAIL."
        )

    payload = {
        "sender": {
            "name": "RR International",
            "email": settings.owner_email,
        },
        "to": [
            {
                "email": settings.owner_email,
                "name": "RR International",
            }
        ],
        "subject": subject,
        "textContent": body,
    }

    if reply_to:
        payload["replyTo"] = {
            "email": reply_to,
        }

    request = urllib.request.Request(
        BREVO_API_URL,
        data=json.dumps(payload).encode("utf-8"),
        headers={
            "accept": "application/json",
            "api-key": settings.brevo_api_key,
            "content-type": "application/json",
        },
        method="POST",
    )

    try:
        with urllib.request.urlopen(
            request,
            timeout=15,
        ) as response:

            response_body = response.read().decode(
                "utf-8",
                errors="replace",
            )

            if response.status < 200 or response.status >= 300:
                raise RuntimeError(
                    f"Brevo API returned HTTP "
                    f"{response.status}: {response_body}"
                )

            print(
                f"Brevo email sent successfully: "
                f"{response_body}"
            )

    except urllib.error.HTTPError as exc:
        error_body = exc.read().decode(
            "utf-8",
            errors="replace",
        )

        print(
            f"BREVO ERROR {exc.code}: "
            f"{error_body}"
        )

        raise RuntimeError(
            f"Brevo API returned HTTP "
            f"{exc.code}: {error_body}"
        ) from exc

    except urllib.error.URLError as exc:
        print(
            f"BREVO CONNECTION ERROR: "
            f"{exc.reason}"
        )

        raise RuntimeError(
            f"Could not connect to Brevo: "
            f"{exc.reason}"
        ) from exc


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

    _send(
        subject="New Enquiry Received - RR International",
        body=body,
        reply_to=email,
    )


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

    _send(
        subject="New Quote Request Received - RR International",
        body=body,
        reply_to=data.get("email"),
    )