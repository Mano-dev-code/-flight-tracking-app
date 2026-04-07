import React, { useState } from "react";
import Flightsearchcard from "../components/Flightsearchcard.jsx";
import Flightdetailslider from "../components/Flightdetailslider.jsx";
import Lottie from "lottie-react";
import animation from "../assets/Searching.json";
import Filtersection from "./Filtersection.jsx";

const Main = () => {
  const [searchData, setSearchData] = useState({
    flights: [],
    from: "Chennai",
    to: "Mumbai",
    date: new Date(),
  });

  const [filteredFlights, setFilteredFlights] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilters, setActiveFilters] = useState({

    cabinClass: "",
    maxPrice: "",
    airline: "",
  });

  // Handle new flight search
  const handleFlightsFound = (data) => {
    // Show animation for 3 seconds
    setShowAnimation(true);

    // After 3 seconds, show carousel
    setTimeout(() => {
      setShowAnimation(false);
      setSearchData({
        flights: data.flights || [],
        from: data.from,
        to: data.to,
        date: data.date,
      });
      // Reset filters when new search is performed
      setFilteredFlights(data.flights || []);
      setActiveFilters({
        cabinClass: "",
        maxPrice: "",
        airline: "",
      });
    }, 4000); // 4 seconds
  };

  // Handle filter changes from Filtersection
  const handleFilterChange = (filteredFlightsList, appliedFilters) => {
    setFilteredFlights(filteredFlightsList);
    setActiveFilters(appliedFilters);
    console.log(
      "Main: Flights filtered -",
      filteredFlightsList.length,
      "flights",
    );
  };

  // Determine which flights to display
  const displayFlights =
    activeFilters.cabinClass || activeFilters.maxPrice || activeFilters.airline
      ? filteredFlights
      : searchData.flights;

  // Check if any filters are active
  const hasActiveFilters =
    activeFilters.cabinClass || activeFilters.maxPrice || activeFilters.airline;

  return (
    <div className="main-layout">
      {/* Left Section - Search and Results */}
      <div style={{ flex: 2, minWidth: 0 }}>
        {/* Search Card */}
        <div>
          <Flightsearchcard onFlightsFound={handleFlightsFound} />
        </div>

        {/* Flight Results */}
        <div>
          {/* Animation Loading State */}
          {showAnimation && (
            <div className="px-1">
              <div
                className="slider-container"
                style={{
                  textAlign: "center",
                  padding: "40px 20px",
                  minHeight: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  bottom: "100px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "60%",
                    height: "200px",
                    margin: "0 auto",
                  }}
                >
                  <Lottie
                    animationData={animation}
                    loop={true}
                    autoplay={true}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Carousel - Shows after animation */}
          {!showAnimation && (
            <>
              {/* Route Display */}
              <div className="route-section">
                <div>
                  <p className="mb-1" style={{ fontSize: "0.85rem" }}>
                    From
                  </p>
                  <p className="mb-1 fs-3" style={{ marginBottom: "0.25rem" }}>
                    {searchData.from}
                  </p>
                  <p
                    className="mb-1"
                    style={{ fontSize: "0.85rem", color: "#666" }}
                  >
                    {searchData.from === "Chennai"
                      ? "MAA"
                      : searchData.from === "Delhi"
                        ? "DEL"
                        : searchData.from === "Mumbai"
                          ? "BOM"
                          : searchData.from === "Bengaluru"
                            ? "BLR"
                            : searchData.from.substring(0, 3).toUpperCase()}
                  </p>
                </div>
                <hr className="flex-fill" style={{ borderStyle: "dashed" }} />
                <div>
                  <p className="mb-1" style={{ fontSize: "0.85rem" }}>
                    To
                  </p>
                  <p className="mb-1 fs-3" style={{ marginBottom: "0.25rem" }}>
                    {searchData.to}
                  </p>
                  <p
                    className="mb-1"
                    style={{ fontSize: "0.85rem", color: "#666" }}
                  >
                    {searchData.to === "Mumbai"
                      ? "BOM"
                      : searchData.to === "Delhi"
                        ? "DEL"
                        : searchData.to === "Bengaluru"
                          ? "BLR"
                          : searchData.to === "Chennai"
                            ? "MAA"
                            : searchData.to.substring(0, 3).toUpperCase()}{" "}
                    Airport
                  </p>
                </div>
              </div>

              {/* Filter Status Badge */}
              {hasActiveFilters && (
                <div
                  style={{
                    marginTop: "12px",
                    padding: "10px 14px",
                    backgroundColor: "#fff3cd",
                    borderRadius: "6px",
                    border: "1px solid #ffc107",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <small style={{ color: "#856404", fontSize: "0.85rem" }}>
                    📊 Showing <strong>{displayFlights.length}</strong> of{" "}
                    <strong>{searchData.flights.length}</strong> flights
                  </small>
                  <small
                    style={{
                      color: "#856404",
                      fontSize: "0.75rem",
                      backgroundColor: "rgba(0,0,0,0.05)",
                      padding: "2px 6px",
                      borderRadius: "3px",
                    }}
                  >
                    Filters Active ✓
                  </small>
                </div>
              )}

              {/* Flight Slider */}
              <div>
                <Flightdetailslider flights={displayFlights} />
              </div>
            </>
          )}
        </div>
      </div>

      {/* Right Section - Filter */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <Filtersection
          onFilterChange={handleFilterChange}
          flights={searchData.flights}
        />
      </div>
    </div>
  );
};

export default Main;
