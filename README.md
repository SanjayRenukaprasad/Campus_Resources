# Campus Resources Web App

This is a modern responsive web application for exploring categorized campus resources. It features a clean, interactive UI inspired by professional product sites like Intuit, with category cards, filters, and individual resource views.

---

## Tech Stack

- **Frontend Framework:** React (Vite)
- **Styling:** Tailwind CSS + Material UI (MUI)
- **Routing:** React Router DOM
- **Backend (optional):** Django (for resource API)
- **Deployment:** Vercel / Netlify (easy hosting)

---

## Features

- View resources by category
- Filter categories with a dropdown
- Beautiful category cards with hover effects
- External resource links with "Visit" buttons
- Back navigation with optional back arrow
- Responsive design with utility-first classes

---

## How to Run the Project

1.Clone the Repository
```bash
git clone https://github.com/SanjayRenukaprasad/Campus_Resources.git
cd your-repo-name(frontend and backend folders - Follow next steps)

2.cd frontend (React)
cd frontend
npm install
npm run dev

3.cd backend (Django) Server
cd backend
python3 -m venv venv
source venv/bin/activate  # For Linux/macOS
# OR
venv\Scripts\activate     # For Windows

pip install -r requirements.txt

python3 manage.py migrate
python3 manage.py runserver

---

## Folder Structure Overview
src/
├── components/        # Reusable UI components
├── pages/             # Page views
├── services/          # API service functions
├── App.jsx            # Main app layout
└── main.jsx           # Entry point

##Features
-View categorized resource cards
-Clickable image cards with hover "Explore" text
-Filter by category with dropdown
-Responsive grid layout
-Route-based detail views
-Back button and home navigation







