from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    mongodb_url: str = "mongodb://127.0.0.1:27017"
    mongodb_db: str = "rr_international"
    jwt_secret: str = "change-this-secret"
    jwt_expire_minutes: int = 480
    admin_email: str = "rrinternational0092@gmail.com"
    admin_password: str = "Admin@12345"

    # Owner notification email / SMTP settings.
    owner_email: str = ""
    smtp_host: str = ""
    smtp_port: int = 587
    smtp_user: str = ""
    smtp_password: str = ""
    smtp_from: str = ""
    smtp_use_tls: bool = True
    smtp_use_ssl: bool = False
    smtp_timeout_seconds: int = 15

    # Comma-separated browser origins. 5174 is included because Vite may
    # automatically move from 5173 when that port is already occupied.
    cors_origins: str = "http://localhost:5173,http://127.0.0.1:5173,http://localhost:5174,http://127.0.0.1:5174"

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")

    @property
    def allowed_origins(self) -> list[str]:
        return [origin.strip() for origin in self.cors_origins.split(",") if origin.strip()]


settings = Settings()
