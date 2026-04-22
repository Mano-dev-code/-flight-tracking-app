# ✈️ Flight Tracking App (Full Stack)

A full-stack flight search application built using **React (Frontend)** and **Node.js + Express (Backend)**. Users can search for flights based on departure and arrival cities, and view results in a clean UI with a vertical slider.

---

## 🚀 Features

- 🔍 Search flights by **From** and **To**
- 📅 Flight data available for **April 1–10, 2026**
- 🛫 Multiple airlines: Air India, IndiGo, Vistara
- 🎯 Dynamic flight results rendering
- 🎞️ Vertical carousel slider using React Slick
- 🌐 Backend API with filtering support
- ⚡ Responsive UI using Bootstrap

---

## 🛠️ Tech Stack

### Frontend
- React.js  
- Bootstrap  
- React Slick  

### Backend
- Node.js  
- Express.js  
- CORS  

---

## 🌐 Live Demo

- 🔗 **Frontend (Vercel):**  
  https://flight-tracking-app-sigma.vercel.app/

- 🔗 **Backend (Render):**  
  https://flight-tracking-app.onrender.com

---
## 📂 Project Structure


project-root/
│
├── backend/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── Flightsearchcard.jsx
│ │ │ ├── Flightdetailcard.jsx
│ │ │ └── Flightdetailslider.jsx
│ │ └── App.jsx
│ └── package.json


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

bash
git clone https://github.com/Mano-dev-code/-flight-tracking-app
cd your-repo-name
2️⃣ Setup Backend
cd backend
npm install
npm run dev

Runs on:
http://localhost:3000

3️⃣ Setup Frontend
cd ../frontend
npm install
npm run dev

Runs on:
http://localhost:5173

## 🔗 Add End Points

GET /api/flights?from=City&to=City → Filter flights
GET /api/flights/all → Get all flights
GET /api/cities → Get available cities
📸 UI Overview
Flight search form
Flight cards displaying:
Airline name
Departure & Arrival time
Route (City → City)
Price
Vertical slider for better UX

## 🧠 Learning Highlights
Connecting React frontend with Express backend
Handling API requests using fetch
Dynamic UI rendering with props
Managing state using React Hooks
Building reusable components
Debugging real-world errors

## ⚠️ Known Limitations
No authentication
No real payment integration
Static dataset (mock data)

## 📈 Future Improvements
Add date-based filtering
Integrate real flight APIs
Add booking system
Improve UI/UX (like MakeMyTrip)
Add database for production-ready deployment

## 🚀 Deployment Details
Frontend deployed using Vercel
Backend deployed using Render

## 👨‍💻 Author

Manikandan
BCA Graduate | Aspiring Full Stack Developer

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub!
