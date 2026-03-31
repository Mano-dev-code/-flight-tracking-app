import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

const Filtersection = ({ onFilterChange, flights = [] }) => {
  const [filters, setFilters] = useState({
    cabinClass: "",
    maxPrice: "",
    airline: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    cabinClass: "",
    maxPrice: "",
    airline: "",
  });

  // Get unique airlines from flights data
  const getUniqueAirlines = () => {
    if (!flights || flights.length === 0) return [];
    const airlines = flights.map((flight) => flight.airline);
    return [...new Set(airlines)].sort();
  };

  // Get price range from flights
  const getPriceRange = () => {
    if (!flights || flights.length === 0) return { min: 0, max: 10000 };
    const prices = flights.map((flight) => flight.price?.amount || 0);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  };

  // Handle filter input change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Apply filters logic
  const applyFilters = (filtersToApply) => {
    let filtered = [...flights];

    // Filter by cabin class
    if (filtersToApply.cabinClass) {
      filtered = filtered.filter(
        (flight) =>
          flight.cabinClass?.toLowerCase() ===
          filtersToApply.cabinClass.toLowerCase(),
      );
    }

    // Filter by max price
    if (filtersToApply.maxPrice) {
      const maxPrice = parseFloat(filtersToApply.maxPrice);
      filtered = filtered.filter(
        (flight) => (flight.price?.amount || 0) <= maxPrice,
      );
    }

    // Filter by airline
    if (filtersToApply.airline) {
      filtered = filtered.filter(
        (flight) =>
          flight.airline?.toLowerCase() ===
          filtersToApply.airline.toLowerCase(),
      );
    }

    return filtered;
  };

  // Handle apply filters
  const handleApplyFilters = (e) => {
    e.preventDefault();

    const newFilters = {
      cabinClass: filters.cabinClass,
      maxPrice: filters.maxPrice,
      airline: filters.airline,
    };

    setAppliedFilters(newFilters);

    const filteredFlights = applyFilters(newFilters);

    if (onFilterChange) {
      onFilterChange(filteredFlights, newFilters);
    }

    console.log("Filtered flights:", filteredFlights);
    console.log("Active filters:", newFilters);
  };

  // Handle reset
  const handleReset = () => {
    setFilters({
      cabinClass: "",
      maxPrice: "",
      airline: "",
    });
    setAppliedFilters({
      cabinClass: "",
      maxPrice: "",
      airline: "",
    });

    if (onFilterChange) {
      onFilterChange(flights, {
        cabinClass: "",
        maxPrice: "",
        airline: "",
      });
    }

    console.log("Filters reset. Showing all flights.");
  };

  const uniqueAirlines = getUniqueAirlines();
  const priceRange = getPriceRange();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Card
        className="my-1 flex-grow-1 d-flex flex-column shadow-sm"
        id="filter"
      >
        <Card.Body className="d-flex flex-column" style={{ padding: "16px" }}>
          {/* Header */}
          <div className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0" style={{ fontSize: "1.1rem" }}>
                Filter Flights
              </h5>
              <Button
                variant="primary"
                size="sm"
                type="button"
                onClick={handleReset}
                style={{ fontSize: "0.85rem" }}
              >
                Reset All
              </Button>
            </div>
          </div>

          {/* Scrollable Form */}
          <div className="flex-grow-1 overflow-auto">
            <Form onSubmit={handleApplyFilters}>
              {/* Cabin Class Filter */}
              <Form.Group className="mb-3 px-2" controlId="formCabinClass">
                <Form.Label className="fw-bold" style={{ fontSize: "0.9rem" }}>
                  Cabin Class
                </Form.Label>
                <Form.Select
                  aria-label="Select Cabin Class"
                  name="cabinClass"
                  value={filters.cabinClass}
                  onChange={handleFilterChange}
                  size="sm"
                  style={{ fontSize: "0.9rem" }}
                >
                  <option value="">All Classes</option>
                  <option value="Economy">Economy</option>
                  <option value="Business">Business</option>
                  <option value="First Class">First Class</option>
                </Form.Select>
                {filters.cabinClass && (
                  <small className="text-success">
                    ✓ {filters.cabinClass} selected
                  </small>
                )}
              </Form.Group>

              {/* Price Filter */}
              <Form.Group className="mb-3 px-2" controlId="formPrice">
                <Form.Label className="fw-bold" style={{ fontSize: "0.9rem" }}>
                  Max Price (₹)
                </Form.Label>
                <Form.Control
                  className=""
                  type="number"
                  placeholder={`₹${priceRange.max}`}
                  name="maxPrice"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                  min={priceRange.min}
                  max={priceRange.max}
                  size="sm"
                  style={{ fontSize: "0.9rem" }}
                />
                {filters.maxPrice && (
                  <small className="text-success">
                    ✓ Up to ₹
                    {parseFloat(filters.maxPrice).toLocaleString("en-IN")}
                  </small>
                )}
                <small
                  className="d-block text-muted"
                  style={{ fontSize: "0.75rem", marginTop: "4px" }}
                >
                  Range: ₹{priceRange.min.toLocaleString("en-IN")} - ₹
                  {priceRange.max.toLocaleString("en-IN")}
                </small>
              </Form.Group>

              {/* Airline Filter */}
              <Form.Group className="mb-3 px-2" controlId="formAirline">
                <Form.Label className="fw-bold" style={{ fontSize: "0.9rem" }}>
                  Airline
                </Form.Label>
                <Form.Select
                  aria-label="Select Airline"
                  name="airline"
                  value={filters.airline}
                  onChange={handleFilterChange}
                  size="sm"
                  style={{ fontSize: "0.9rem" }}
                >
                  <option value="">All Airlines</option>
                  <option value="Air India">Air India</option>
                  <option value="Indigo">Indigo</option>
                  <option value="Vistara">Vistara</option>
                  {uniqueAirlines.length > 0 ? (
                    uniqueAirlines.map((airline, index) => (
                      <option key={index} value={airline}>
                        {airline}
                      </option>
                    ))
                  ) : (
                    <option disabled>No airlines available</option>
                  )}
                </Form.Select>
                {filters.airline && (
                  <small className="text-success">
                    ✓ {filters.airline} selected
                  </small>
                )}
              </Form.Group>

              {/* Active Filters Display */}
              {(appliedFilters.cabinClass ||
                appliedFilters.maxPrice ||
                appliedFilters.airline) && (
                <div
                  className="p-2 mb-3"
                  style={{
                    backgroundColor: "#e7f3ff",
                    borderRadius: "6px",
                    border: "1px solid #b3d9ff",
                  }}
                >
                  <small
                    className="text-primary fw-bold"
                    style={{ fontSize: "0.85rem" }}
                  >
                    Active Filters:
                  </small>
                  <div style={{ fontSize: "0.8rem", marginTop: "6px" }}>
                    {appliedFilters.cabinClass && (
                      <div className="mb-1">
                        🎫 Class: <strong>{appliedFilters.cabinClass}</strong>
                      </div>
                    )}
                    {appliedFilters.maxPrice && (
                      <div className="mb-1">
                        💰 Max:{" "}
                        <strong>
                          ₹
                          {parseFloat(appliedFilters.maxPrice).toLocaleString(
                            "en-IN",
                          )}
                        </strong>
                      </div>
                    )}
                    {appliedFilters.airline && (
                      <div className="mb-1">
                        ✈️ Airline: <strong>{appliedFilters.airline}</strong>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* No Flights Message */}
              {appliedFilters.cabinClass ||
              appliedFilters.maxPrice ||
              appliedFilters.airline ? (
                flights.length === 0 ? (
                  <div
                    className="alert alert-warning"
                    style={{ fontSize: "0.85rem", marginBottom: "12px" }}
                    role="alert"
                  >
                    ⚠️ Search for flights first to apply filters
                  </div>
                ) : null
              ) : null}

              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                className="w-100 fw-bold"
                style={{ fontSize: "0.95rem" }}
              >
                Apply Filters
              </Button>
            </Form>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Filtersection;
