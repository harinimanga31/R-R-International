# RR International — Courier & Cargo Website

Full-stack website for **RR International**, an international courier and air cargo business based in Chilkanagar, Uppal, Hyderabad.

## Business information
- Contact: M. Ramesh
- Phone: +91 73961 94602
- Email: rrinternational0092@gmail.com
- Office: Chilkanagar, Uppal, Hyderabad – 500039, Telangana, India
- Business hours: 9:00 AM – 6:00 PM
- Business since: 2008

## Frontend
React + TypeScript + Vite + Tailwind CSS.

```powershell
cd frontend
npm install
npm run dev
```

Open `http://localhost:5173/`.

## Backend
FastAPI + MongoDB.

Recommended Windows setup:

```powershell
cd backend
py -3.12 -m venv .venv
.\.venv\Scripts\python.exe -m pip install --upgrade pip
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
.\.venv\Scripts\python.exe -m uvicorn app.main:app --reload
```

API docs: `http://127.0.0.1:8000/docs`

## Important local services
MongoDB must be running at the URL in `backend/.env` (default: `mongodb://127.0.0.1:27017`).

The frontend uses `frontend/.env`:

`VITE_API_URL=http://127.0.0.1:8000/api`

## Updated UI/UX
- Compact RR monogram logo with the full **RR INTERNATIONAL** name visible.
- Blue-to-yellow brand gradients with red RR identity accents.
- About-style admin dashboard with business story, metrics, contact information and quick actions.
- Provided logistics image used on the International Shipping page and Admin Dashboard.
- International Shipping page redesigned with the logistics image and service highlights.
- Services include International Courier, Air Cargo, Door-to-Door, Business Shipping, Parcel Shipping and Customs Clearance.
- Quote form calculates L × B × H volume, volumetric weight and estimated chargeable weight.
- Quote submission posts to `/api/quotes` and displays the returned Quote ID.
- Tracking connects to `/api/tracking/{awb}`. Demo AWB: `RR26HYD000123`.
- Admin dashboard requires the stored admin JWT token and redirects to login when unauthenticated.

## Quote calculation
The UI estimates volumetric weight using:

`(Length × Width × Height × Package Count) ÷ 5000`

Estimated chargeable weight is the greater of actual weight and estimated volumetric weight. Final pricing and chargeable weight must be confirmed by RR International according to the shipment and carrier rules.

## Development credentials
The backend `.env` contains development defaults. Change `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and MongoDB settings before production deployment.


## Added customer enquiry, quote notifications and carrier tracking

The existing FastAPI backend now stores Contact-page submissions in the `enquiries` collection and quote requests in the `quotes` collection. Both flows send owner notifications from the backend over SMTP. Configure the SMTP variables in `backend/.env` using `backend/.env.example` as a template.

The Tracking page keeps the existing RR International AWB tracking flow and also provides official DHL and FedEx tracking links that open in a new tab.

### Run locally

Backend (from `backend`):
```powershell
.\.venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload
```

Frontend (from `frontend`):
```powershell
npm run dev
```

If Vite reports that port 5173 is already in use, it may use 5174; the backend CORS configuration already allows both ports.

### Email

For Gmail SMTP, use an App Password rather than a normal account password when the account has 2-Step Verification enabled. Never put SMTP credentials in frontend files.
