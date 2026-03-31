# ✈️ Flight Tracking App (Full Stack)

A full-stack flight search application built using **React (Frontend)** and **Node.js + Express (Backend)**.
Users can search for flights based on departure and arrival cities, and view results in a clean UI with a vertical slider.

---

## 🚀 Features

* 🔍 Search flights by **From** and **To**
* 📅 Flight data available for **April 1–10, 2026**
* 🛫 Multiple airlines: Air India, IndiGo, Vistara
* 🎯 Dynamic flight results rendering
* 🎞️ Vertical carousel slider using React Slick
* 🌐 Backend API with filtering support
* ⚡ Fast and responsive UI using Bootstrap

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Bootstrap
* React Slick (Carousel)

### Backend

* Node.js
* Express.js
* CORS

---

## 📂 Project Structure

```
project-root/
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/ (react app)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Flightsearchcard.jsx
│   │   │   ├── Flightdetailcard.jsx
│   │   │   └── Flightdetailslider.jsx
│   │   └── App.jsx
│   └── package.json
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

---

### 2️⃣ Setup Backend

```
cd backend
npm install
npm run dev
```

Server will run at:

```
http://localhost:3000
```

---

### 3️⃣ Setup Frontend

```
cd ../frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Get Flights

```
GET /api/flights?from=City&to=City
```

### Get All Flights

```
GET /api/flights/all
```

### Get Cities

```
GET /api/cities
```

---

## 📸 UI Overview

* Flight search form
* Flight cards with:

  * Airline name
  * Departure & Arrival time
  * Route (City → City)
  * Price
* Vertical slider for better UX

---

## 🧠 Learning Highlights

* Connecting React frontend with Express backend
* Handling API requests using `fetch`
* Dynamic UI rendering with props
* Managing state using React Hooks
* Building reusable components
* Debugging real-world errors

---

## ⚠️ Known Limitations

* No authentication
* No real payment integration
* Static dataset (mock data)

---

## 📈 Future Improvements

* Add date-based filtering
* Integrate real flight APIs
* Add booking system
* Improve UI/UX (like MakeMyTrip)
* Deploy full stack app

---

## 👨‍💻 Author

Manikandan
BCA Graduate | Aspiring Full Stack Developer

---

## ⭐ Support

If you found this project useful, give it a ⭐ on GitHub!
