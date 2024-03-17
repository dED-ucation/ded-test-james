import React, { useState } from "react";

const DashboardIndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("");

  const universities = [
    "University of the West of England, Bristol",
    // ... other universities
  ];

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectUniversity = (university) => {
    setSelectedUniversity(university);
  };

  return (
    <div>
      <div>
        <nav>
          <h1>The Demilitarise Education Treaty</h1>
          <h2>treaty</h2>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/how-we-do-it">How We Do It</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>

        <p className="ded-total-investment">£1500000000000</p>
        <a href="/how-we-do-it">Learn how we do it</a>
      </div>

      <input
        className="ded-input-search-university"
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search for a university"
      />
      {searchTerm === "bri" && (
        <div
          onClick={() =>
            handleSelectUniversity("University of the West of England, Bristol")
          }
        >
          University of the West of England, Bristol
        </div>
      )}
      {selectedUniversity && (
        <>
          <h3>{selectedUniversity}</h3>
          <nav aria-label="Breadcrumb">
            <ol>
              <li>{selectedUniversity}</li>
            </ol>
          </nav>
          <ul>
            <li>
              <a href="/policies">policies</a>
            </li>
            <li>
              <a href="/financial-partnerships">financial partnerships</a>
            </li>
            <li>
              <a href="/research-partnerships">research partnerships</a>
            </li>
            <li>
              <a href="/academic-partnerships">academic partnerships</a>
            </li>
            <li>
              <a href="/foi-requests">FOI requests</a>
            </li>
            <li>
              <a href="/actions">actions</a>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default DashboardIndexPage;
