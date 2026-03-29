import React from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Card from "react-bootstrap/Card";

const Flightdetailcard = ({ flight }) => {
  // Provide default values if flight data is not available
  const {
    flight_id = "N/A",
    airline = "Airline Name",
    departure = {
      time: "00:00",
      airport: "XXX",
      city: "City",
      date: "2026-03-29",
    },
    arrival = {
      time: "00:00",
      airport: "XXX",
      city: "City",
      date: "2026-03-29",
    },
    price = { amount: 0, currency: "INR" },
    logo = "https://via.placeholder.com/36?text=FL",
  } = flight || {};

  // Calculate duration (simplified - assume flights are same day)
  const calculateDuration = (depTime, arrTime) => {
    try {
      const [depHour, depMin] = depTime.split(":").map(Number);
      const [arrHour, arrMin] = arrTime.split(":").map(Number);

      let diffHours = arrHour - depHour;
      let diffMins = arrMin - depMin;

      // Handle cases where arrival is next day
      if (diffHours < 0) {
        diffHours += 24;
      }
      if (diffMins < 0) {
        diffHours -= 1;
        diffMins += 60;
      }

      if (diffHours === 0 && diffMins === 0) return "Direct";
      return `${diffHours}h ${diffMins}m`;
    } catch {
      return "~2h";
    }
  };

  const duration = calculateDuration(departure.time, arrival.time);

  return (
    <div>
      <Card
        className="mx-2 rounded shadow-sm"
        style={{ border: "1px solid #e0e0e0" }}
      >
        <Card.Body>
          {/* Header: Time and Menu */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title className="text-primary fs-6 mb-0">
              <time className="fw-bold">{departure.time}</time>
              <span className="mx-2">→</span>
              <time className="fw-bold">{arrival.time}</time>
            </Card.Title>
            <span
              className="dots fs-5 text-muted"
              style={{ cursor: "pointer" }}
            >
              <HiOutlineDotsHorizontal />
            </span>
          </div>

          {/* Main Content: Airline Info */}
          <div className="d-flex align-items-center justify-content-between gap-3">
            {/* Left: Airline & Route Info */}
            <div className="d-flex align-items-center gap-3 flex-grow-1">
              {/* Airline Logo */}
              <div>
                <img
                  src={logo}
                  alt={airline}
                  width={45}
                  height={45}
                  className="rounded-circle"
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/45?text=" +
                      airline.substring(0, 2);
                  }}
                  style={{ objectFit: "cover", backgroundColor: "#f0f0f0" }}
                />
              </div>

              {/* Airline Details */}
              <div style={{ minWidth: 0 }}>
                <h6 className="mb-2 fw-bold text-dark">
                  {airline}
                  <span
                    className="text-muted ms-2"
                    style={{ fontSize: "0.85rem" }}
                  >
                    {flight_id}
                  </span>
                </h6>

                <div className="d-flex align-items-center gap-3">
                  <div>
                    <p
                      className="mb-0"
                      style={{ fontSize: "0.85rem", color: "#666" }}
                    >
                      {departure.city}
                    </p>
                    <p className="mb-0 fw-bold text-success">
                      {departure.airport}
                    </p>
                  </div>

                  <div style={{ color: "#999" }}>
                    <small>→</small>
                  </div>

                  <div>
                    <p
                      className="mb-0"
                      style={{ fontSize: "0.85rem", color: "#666" }}
                    >
                      {arrival.city}
                    </p>
                    <p className="mb-0 fw-bold text-success">
                      {arrival.airport}
                    </p>
                  </div>
                </div>

                {/* Duration */}
                <div className="mt-2">
                  <small className="text-muted">
                    Duration: <span className="fw-bold">{duration}</span>
                  </small>
                </div>
              </div>
            </div>

            {/* Right: Price Info */}
            <div className="text-end" style={{ minWidth: "120px" }}>
              <h5 className="mb-1 fw-bold text-dark">
                ₹{price.amount.toLocaleString("en-IN")}
              </h5>
              <p className="mb-2 text-muted small">{price.currency}</p>
              {/* <button
                className="btn btn-sm btn-success fw-bold"
                style={{ padding: "0.4rem 1rem", fontSize: "0.85rem" }}
              >
                Book Now
              </button> */}
            </div>
          </div>

          {/* Footer: Date Info */}
          <div className="mt-3 pt-2" style={{ borderTop: "1px solid #f0f0f0" }}>
            <small className="text-muted">
              Departure: <span className="fw-bold">{departure.date}</span>
              {departure.date !== arrival.date && (
                <>
                  {" "}
                  | Arrival: <span className="fw-bold">{arrival.date}</span>
                </>
              )}
            </small>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Flightdetailcard;
