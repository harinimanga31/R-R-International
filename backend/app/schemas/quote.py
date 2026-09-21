import re

from pydantic import BaseModel, EmailStr, Field, field_validator


_PHONE_RE = re.compile(r"^[0-9+()\-.\s]{7,20}$")


class QuoteCreate(BaseModel):
    shipment_type: str = Field(min_length=2, max_length=40)
    origin_country: str = Field(min_length=2, max_length=80)
    origin_city: str = Field(min_length=2, max_length=80)
    destination_country: str = Field(min_length=2, max_length=80)
    destination_city: str = Field(min_length=2, max_length=80)
    weight_kg: float = Field(gt=0, le=100000)
    package_count: int = Field(gt=0, le=10000)
    length_cm: float | None = Field(default=None, ge=0, le=100000)
    width_cm: float | None = Field(default=None, ge=0, le=100000)
    height_cm: float | None = Field(default=None, ge=0, le=100000)
    customer_name: str = Field(min_length=2, max_length=120)
    phone: str = Field(min_length=7, max_length=20)
    email: EmailStr
    pickup_address: str = Field(min_length=5, max_length=500)
    delivery_address: str = Field(min_length=5, max_length=500)
    description: str = Field(min_length=2, max_length=1000)
    preferred_service: str = Field(min_length=2, max_length=100)
    notes: str | None = Field(default=None, max_length=5000)

    @field_validator(
        "shipment_type",
        "origin_country",
        "origin_city",
        "destination_country",
        "destination_city",
        "customer_name",
        "pickup_address",
        "delivery_address",
        "description",
        "preferred_service",
    )
    @classmethod
    def strip_required_text(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("This field is required.")
        return value

    @field_validator("notes")
    @classmethod
    def strip_notes(cls, value: str | None) -> str | None:
        if value is None:
            return None
        value = value.strip()
        return value or None

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        value = value.strip()
        if not _PHONE_RE.fullmatch(value):
            raise ValueError("Please enter a valid phone number.")
        return value


class QuoteUpdate(BaseModel):
    status: str = Field(min_length=2, max_length=40)
    quoted_amount: float | None = Field(default=None, ge=0)
    currency: str | None = Field(default=None, max_length=10)
    notes: str | None = Field(default=None, max_length=5000)
