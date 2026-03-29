import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import flightImg from "../assets/flightimage.jpg";

const Flightsearchcard = ({ onFlightsFound, onSearchStart }) => {
  const [flights, setFlights] = useState([]);
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchFlights = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validation
    if (!from.trim() || !to.trim()) {
      setError("Please enter both departure and destination cities");
      setLoading(false);
      return;
    }

    try {
      // Correct backend URL
      const apiUrl = `http://localhost:3000/api/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}&date=${date.toISOString().split("T")[0]}`;

      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      if (data.success && data.data) {
        setFlights(data.data);
        // Pass data to parent component
        if (onFlightsFound) {
          onFlightsFound({
            flights: data.data,
            from: from,
            to: to,
            date: date,
          });
        }
        console.log("Flights fetched successfully:", data.data);
      } else {
        setError("No flights found. Please try different locations.");
      }
    } catch (err) {
      console.error("Error fetching flights:", err);
      setError(
        `Error: ${err.message}. Make sure backend is running on port 3000.`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card className="card-des p-3 mt-1 shadow-sm">
        <Card.Body>
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-md-6">
              <Card.Subtitle className="mb-2 text-muted">
                Where would you want to go
              </Card.Subtitle>

              <Card.Title className="fs-3">Book a Flight</Card.Title>

              <img
                src={flightImg}
                alt="Flight"
                className="w-100 rounded mt-3"
              />
            </div>

            {/* RIGHT */}
            <div className="col-md-6 mt-5">
              <Form onSubmit={searchFlights}>
                <Form.Group className="mb-4">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Chennai"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mumbai"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label>Date</Form.Label>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="form-control"
                    dateFormat="dd-MM-yyyy"
                    disabled={loading}
                  />
                </Form.Group>

                {error && (
                  <div className="alert alert-danger mb-3" role="alert">
                    {error}
                  </div>
                )}

                <Button
                  variant="success"
                  className="w-75 fs-5"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Search Flights"}
                </Button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Flightsearchcard;
