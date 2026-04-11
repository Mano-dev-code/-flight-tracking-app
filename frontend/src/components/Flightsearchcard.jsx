import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Lottie from "lottie-react";
import animation from "../assets/flight.json";




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
     const BASE_URL = import.meta.env.VITE_API_URL;

     const apiUrl = `${BASE_URL}/api/flights?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;

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
        `Error: ${err.message}.Failed to fetch flights. Please try again.`,
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Card className="card-des p-3 mb-3 mt-0 shadow-sm ">
        <Card.Body>
          <div className="row align-items-center">
            {/* LEFT */}
            <div className="col-md-6">
              <Card.Subtitle className="mb-2  text-muted">
                Where would you want to go
              </Card.Subtitle>

              <Card.Title className="fs-3">Book a Flight</Card.Title>

              <Lottie
                animationData={animation}
                loop={true}
                className="w-100 mt-3 rounded "
              />
            </div>

            {/* RIGHT */}
            <div className="col-md-6 mt-5">
              <Form onSubmit={searchFlights}>
                <Form.Group className="mb-4" controlId="from">
                  <Form.Label className="fs-6">From</Form.Label>
                  <Form.Control
                    type="text"
                    name="from"
                    placeholder="Chennai"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fs-6">To</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Mumbai"
                    name="to"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                    disabled={loading}
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="date">
                  <Form.Label className="fs-6">Date</Form.Label>
                  <DatePicker
                    selected={date}
                    onChange={(date) => setDate(date)}
                    className="form-control ms-4"
                    dateFormat="dd-MM-yyyy"
                    name="date"
                    disabled={loading}
                  />
                </Form.Group>

                {error && (
                  <div className="alert alert-danger mb-3" role="alert">
                    {error}
                  </div>
                )}

                <button
                  className="butn w-100 fs-5 rounded"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Searching..." : "Search Flights"}
                </button>
              </Form>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Flightsearchcard;
