import re

from pydantic import BaseModel, EmailStr, Field, field_validator


_PHONE_RE = re.compile(r"^[0-9+()\-.\s]{7,20}$")


class ContactCreate(BaseModel):
    name: str = Field(min_length=2, max_length=120)
    email: EmailStr
    phone: str = Field(min_length=7, max_length=20)
    subject: str = Field(min_length=3, max_length=150)
    message: str = Field(min_length=10, max_length=5000)

    @field_validator("name", "subject", "message")
    @classmethod
    def strip_text(cls, value: str) -> str:
        value = value.strip()
        if not value:
            raise ValueError("This field is required.")
        return value

    @field_validator("phone")
    @classmethod
    def validate_phone(cls, value: str) -> str:
        value = value.strip()
        if not _PHONE_RE.fullmatch(value):
            raise ValueError("Please enter a valid phone number.")
        return value
