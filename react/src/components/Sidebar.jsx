
import React from "react";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="ham-btn">
        <button className="hamburger d-md-none" onClick={() => setIsOpen(true)}>
          ☰
        </button>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}

      <div id="side-menu" className={`Sidebar ${isOpen ? "open" : ""}`}>
        <div>
          <h3 id="head" className="fw-bold py-3 text-center">
            🚀 fly High
          </h3>

          <nav className="sidebar-links mt-5 text-center w-100">
            <ul className="navbar-nav gap-4">
              <li className="links active rounded p-2">
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Ticket</a>
              </li>
              <li>
                <a href="">Schedule</a>
              </li>
              <li>
                <a href="">History</a>
              </li>
              <li>
                <a href="">Support</a>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <nav className="sidebar-links mt-5 text-center">
            <ul className="navbar-nav mb-4">
              <li>
                <a href="">⚙️ Settings</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar

