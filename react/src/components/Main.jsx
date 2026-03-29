import React, { useState } from "react";
import Flightsearchcard from "../components/Flightsearchcard.jsx";
import Flightdetailslider from "../components/Flightdetailslider.jsx";

const Main = () => {
  const [searchData, setSearchData] = useState({
    flights: [],
    from: "Chennai",
    to: "Mumbai",
    date: new Date(),
  });

  const handleFlightsFound = (data) => {
    setSearchData({
      flights: data.flights || [],
      from: data.from,
      to: data.to,
      date: data.date,
    });
  };

  return (
    <div className="row">
      {/* Search Card */}
      <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12">
        <Flightsearchcard onFlightsFound={handleFlightsFound} />
      </div>

      {/* Flight Results */}
      <div className="col-md-8 col-lg-8 col-xl-8 col-sm-12">
        {/* Route Display */}
        <div className="d-flex justify-content-between align-items-center mt-4 gap-3">
          <div>
            <p className="mb-1 text-muted">From</p>
            <p className="mb-1 fs-4 fw-medium">{searchData.from}</p>
            <p className="mb-1 text-muted">
              {searchData.from === "Chennai"
                ? "MAA"
                : searchData.from.substring(0, 3).toUpperCase()}
            </p>
          </div>
          <hr className="flex-fill" style={{ borderStyle: "dashed" }} />
          <div>
            <p className="mb-1 text-muted">To</p>
            <p className="mb-1 fs-4 fw-medium">{searchData.to}</p>
            <p className="mb-1 text-muted">
              {searchData.to === "Mumbai"
                ? "BOM"
                : searchData.to.substring(0, 3).toUpperCase()}{" "}
              Airport
            </p>
          </div>
        </div>

        {/* Flight Slider */}
        <div>
          <Flightdetailslider flights={searchData.flights} />
        </div>
      </div>
    </div>
  );
};

export default Main;
