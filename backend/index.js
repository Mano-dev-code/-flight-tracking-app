const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Real flight data provided by user
const allFlights = [
  {
    flight_id: "AI101",
    airline: "Air India",
    departure: {
      airport: "MAA",
      city: "Chennai",
      date: "2026-04-01",
      time: "06:00",
    },
    arrival: {
      airport: "DEL",
      city: "Delhi",
      date: "2026-04-01",
      time: "08:30",
    },
    price: { currency: "INR", amount: 5000 },
  },
  {
    flight_id: "IN102",
    airline: "IndiGo",
    departure: {
      airport: "MAA",
      city: "Chennai",
      date: "2026-04-01",
      time: "09:00",
    },
    arrival: {
      airport: "DEL",
      city: "Delhi",
      date: "2026-04-01",
      time: "11:30",
    },
    price: { currency: "INR", amount: 4500 },
  },
  {
    flight_id: "VI103",
    airline: "Vistara",
    departure: {
      airport: "MAA",
      city: "Chennai",
      date: "2026-04-01",
      time: "13:00",
    },
    arrival: {
      airport: "DEL",
      city: "Delhi",
      date: "2026-04-01",
      time: "15:30",
    },
    price: { currency: "INR", amount: 6000 },
  },

  {
    flight_id: "AI201",
    airline: "Air India",
    departure: {
      airport: "DEL",
      city: "Delhi",
      date: "2026-04-02",
      time: "07:00",
    },
    arrival: {
      airport: "BOM",
      city: "Mumbai",
      date: "2026-04-02",
      time: "09:00",
    },
    price: { currency: "INR", amount: 5200 },
  },
  {
    flight_id: "IN202",
    airline: "IndiGo",
    departure: {
      airport: "DEL",
      city: "Delhi",
      date: "2026-04-02",
      time: "10:00",
    },
    arrival: {
      airport: "BOM",
      city: "Mumbai",
      date: "2026-04-02",
      time: "12:00",
    },
    price: { currency: "INR", amount: 4800 },
  },
  {
    flight_id: "VI203",
    airline: "Vistara",
    departure: {
      airport: "DEL",
      city: "Delhi",
      date: "2026-04-02",
      time: "14:00",
    },
    arrival: {
      airport: "BOM",
      city: "Mumbai",
      date: "2026-04-02",
      time: "16:00",
    },
    price: { currency: "INR", amount: 6500 },
  },

  {
    flight_id: "AI301",
    airline: "Air India",
    departure: {
      airport: "BOM",
      city: "Mumbai",
      date: "2026-04-03",
      time: "06:30",
    },
    arrival: {
      airport: "BLR",
      city: "Bengaluru",
      date: "2026-04-03",
      time: "08:00",
    },
    price: { currency: "INR", amount: 5500 },
  },
  {
    flight_id: "IN302",
    airline: "IndiGo",
    departure: {
      airport: "BOM",
      city: "Mumbai",
      date: "2026-04-03",
      time: "09:30",
    },
    arrival: {
      airport: "BLR",
      city: "Bengaluru",
      date: "2026-04-03",
      time: "11:00",
    },
    price: { currency: "INR", amount: 4900 },
  },
  {
    flight_id: "VI303",
    airline: "Vistara",
    departure: {
      airport: "BOM",
      city: "Mumbai",
      date: "2026-04-03",
      time: "13:30",
    },
    arrival: {
      airport: "BLR",
      city: "Bengaluru",
      date: "2026-04-03",
      time: "15:00",
    },
    price: { currency: "INR", amount: 7000 },
  },

  {
    flight_id: "AI401",
    airline: "Air India",
    departure: {
      airport: "BLR",
      city: "Bengaluru",
      date: "2026-04-04",
      time: "07:00",
    },
    arrival: {
      airport: "HYD",
      city: "Hyderabad",
      date: "2026-04-04",
      time: "08:30",
    },
    price: { currency: "INR", amount: 4000 },
  },
  {
    flight_id: "IN402",
    airline: "IndiGo",
    departure: {
      airport: "BLR",
      city: "Bengaluru",
      date: "2026-04-04",
      time: "10:00",
    },
    arrival: {
      airport: "HYD",
      city: "Hyderabad",
      date: "2026-04-04",
      time: "11:30",
    },
    price: { currency: "INR", amount: 3500 },
  },
  {
    flight_id: "VI403",
    airline: "Vistara",
    departure: {
      airport: "BLR",
      city: "Bengaluru",
      date: "2026-04-04",
      time: "14:00",
    },
    arrival: {
      airport: "HYD",
      city: "Hyderabad",
      date: "2026-04-04",
      time: "15:30",
    },
    price: { currency: "INR", amount: 5000 },
  },

  {
    flight_id: "AI501",
    airline: "Air India",
    departure: {
      airport: "HYD",
      city: "Hyderabad",
      date: "2026-04-05",
      time: "06:30",
    },
    arrival: {
      airport: "CCU",
      city: "Kolkata",
      date: "2026-04-05",
      time: "09:00",
    },
    price: { currency: "INR", amount: 6200 },
  },
  {
    flight_id: "IN502",
    airline: "IndiGo",
    departure: {
      airport: "HYD",
      city: "Hyderabad",
      date: "2026-04-05",
      time: "10:00",
    },
    arrival: {
      airport: "CCU",
      city: "Kolkata",
      date: "2026-04-05",
      time: "12:30",
    },
    price: { currency: "INR", amount: 5800 },
  },
  {
    flight_id: "VI503",
    airline: "Vistara",
    departure: {
      airport: "HYD",
      city: "Hyderabad",
      date: "2026-04-05",
      time: "15:00",
    },
    arrival: {
      airport: "CCU",
      city: "Kolkata",
      date: "2026-04-05",
      time: "17:30",
    },
    price: { currency: "INR", amount: 7200 },
  },

  {
    flight_id: "AI601",
    airline: "Air India",
    departure: {
      airport: "CCU",
      city: "Kolkata",
      date: "2026-04-06",
      time: "07:00",
    },
    arrival: {
      airport: "PNQ",
      city: "Pune",
      date: "2026-04-06",
      time: "09:30",
    },
    price: { currency: "INR", amount: 6500 },
  },
  {
    flight_id: "IN602",
    airline: "IndiGo",
    departure: {
      airport: "CCU",
      city: "Kolkata",
      date: "2026-04-06",
      time: "11:00",
    },
    arrival: {
      airport: "PNQ",
      city: "Pune",
      date: "2026-04-06",
      time: "13:30",
    },
    price: { currency: "INR", amount: 6000 },
  },
  {
    flight_id: "VI603",
    airline: "Vistara",
    departure: {
      airport: "CCU",
      city: "Kolkata",
      date: "2026-04-06",
      time: "16:00",
    },
    arrival: {
      airport: "PNQ",
      city: "Pune",
      date: "2026-04-06",
      time: "18:30",
    },
    price: { currency: "INR", amount: 7500 },
  },

  {
    flight_id: "AI701",
    airline: "Air India",
    departure: {
      airport: "PNQ",
      city: "Pune",
      date: "2026-04-07",
      time: "06:00",
    },
    arrival: {
      airport: "AMD",
      city: "Ahmedabad",
      date: "2026-04-07",
      time: "08:00",
    },
    price: { currency: "INR", amount: 4800 },
  },
  {
    flight_id: "IN702",
    airline: "IndiGo",
    departure: {
      airport: "PNQ",
      city: "Pune",
      date: "2026-04-07",
      time: "09:00",
    },
    arrival: {
      airport: "AMD",
      city: "Ahmedabad",
      date: "2026-04-07",
      time: "11:00",
    },
    price: { currency: "INR", amount: 4300 },
  },
  {
    flight_id: "VI703",
    airline: "Vistara",
    departure: {
      airport: "PNQ",
      city: "Pune",
      date: "2026-04-07",
      time: "13:00",
    },
    arrival: {
      airport: "AMD",
      city: "Ahmedabad",
      date: "2026-04-07",
      time: "15:00",
    },
    price: { currency: "INR", amount: 6200 },
  },

  {
    flight_id: "AI801",
    airline: "Air India",
    departure: {
      airport: "AMD",
      city: "Ahmedabad",
      date: "2026-04-08",
      time: "07:30",
    },
    arrival: {
      airport: "JAI",
      city: "Jaipur",
      date: "2026-04-08",
      time: "09:00",
    },
    price: { currency: "INR", amount: 3900 },
  },
  {
    flight_id: "IN802",
    airline: "IndiGo",
    departure: {
      airport: "AMD",
      city: "Ahmedabad",
      date: "2026-04-08",
      time: "10:30",
    },
    arrival: {
      airport: "JAI",
      city: "Jaipur",
      date: "2026-04-08",
      time: "12:00",
    },
    price: { currency: "INR", amount: 3500 },
  },
  {
    flight_id: "VI803",
    airline: "Vistara",
    departure: {
      airport: "AMD",
      city: "Ahmedabad",
      date: "2026-04-08",
      time: "14:30",
    },
    arrival: {
      airport: "JAI",
      city: "Jaipur",
      date: "2026-04-08",
      time: "16:00",
    },
    price: { currency: "INR", amount: 5000 },
  },

  {
    flight_id: "AI901",
    airline: "Air India",
    departure: {
      airport: "JAI",
      city: "Jaipur",
      date: "2026-04-09",
      time: "06:00",
    },
    arrival: { airport: "GOI", city: "Goa", date: "2026-04-09", time: "08:30" },
    price: { currency: "INR", amount: 7000 },
  },
  {
    flight_id: "IN902",
    airline: "IndiGo",
    departure: {
      airport: "JAI",
      city: "Jaipur",
      date: "2026-04-09",
      time: "09:00",
    },
    arrival: { airport: "GOI", city: "Goa", date: "2026-04-09", time: "11:30" },
    price: { currency: "INR", amount: 6500 },
  },
  {
    flight_id: "VI903",
    airline: "Vistara",
    departure: {
      airport: "JAI",
      city: "Jaipur",
      date: "2026-04-09",
      time: "13:00",
    },
    arrival: { airport: "GOI", city: "Goa", date: "2026-04-09", time: "15:30" },
    price: { currency: "INR", amount: 8000 },
  },

  {
    flight_id: "AI1001",
    airline: "Air India",
    departure: {
      airport: "GOI",
      city: "Goa",
      date: "2026-04-10",
      time: "07:00",
    },
    arrival: {
      airport: "MAA",
      city: "Chennai",
      date: "2026-04-10",
      time: "09:30",
    },
    price: { currency: "INR", amount: 5500 },
  },
  {
    flight_id: "IN1002",
    airline: "IndiGo",
    departure: {
      airport: "GOI",
      city: "Goa",
      date: "2026-04-10",
      time: "10:00",
    },
    arrival: {
      airport: "MAA",
      city: "Chennai",
      date: "2026-04-10",
      time: "12:30",
    },
    price: { currency: "INR", amount: 5000 },
  },
  {
    flight_id: "VI1003",
    airline: "Vistara",
    departure: {
      airport: "GOI",
      city: "Goa",
      date: "2026-04-10",
      time: "14:00",
    },
    arrival: {
      airport: "MAA",
      city: "Chennai",
      date: "2026-04-10",
      time: "16:30",
    },
    price: { currency: "INR", amount: 6500 },
  },
];

// GET /api/flights endpoint
app.get("/api/flights", (req, res) => {
  const { from, to } = req.query;

  // Validate input
if (!from || !to) {
  return res.json({
    success: true,
    data: allFlights,
    message: "Showing all flights (no filters applied)",
  });
}

  // Convert to lowercase for case-insensitive matching
  const fromLower = from.toLowerCase().trim();
  const toLower = to.toLowerCase().trim();

  // Filter flights based on departure and arrival cities
  const filteredFlights = allFlights.filter((flight) => {
    const depCityMatch = flight.departure.city.toLowerCase() === fromLower;
    const arrCityMatch = flight.arrival.city.toLowerCase() === toLower;
    return depCityMatch && arrCityMatch;
  });

  // Return results
  res.json({
    success: true,
    data: filteredFlights,
    from: from,
    to: to,
    count: filteredFlights.length,
    message:
      filteredFlights.length === 0
        ? "No flights found for this route"
        : `Found ${filteredFlights.length} flight(s)`,
  });
});

// GET / - Health check
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// GET /api/flights/all - Get all available flights (optional, for debugging)
app.get("/api/flights/all", (req, res) => {
  res.json({
    success: true,
    data: allFlights,
    count: allFlights.length,
  });
});

// GET /api/cities - Get all unique cities (optional, for city dropdown)
app.get("/api/cities", (req, res) => {
  const cities = [];

  allFlights.forEach((flight) => {
    if (
      !cities.find(
        (c) => c.city.toLowerCase() === flight.departure.city.toLowerCase(),
      )
    ) {
      cities.push({
        city: flight.departure.city,
        airport: flight.departure.airport,
      });
    }
    if (
      !cities.find(
        (c) => c.city.toLowerCase() === flight.arrival.city.toLowerCase(),
      )
    ) {
      cities.push({
        city: flight.arrival.city,
        airport: flight.arrival.airport,
      });
    }
  });

  res.json({
    success: true,
    data: cities,
    count: cities.length,
  });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
