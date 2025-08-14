import React, { useState } from "react";

export default function App() {
    const flightsData = [
        { id: 1, airline: "Indigo", from: "Chennai", to: "Delhi", price: 5000, time: "10:00 AM" },
        { id: 2, airline: "Air India", from: "Chennai", to: "Delhi", price: 7000, time: "12:00 PM" },
        { id: 3, airline: "SpiceJet", from: "Chennai", to: "Delhi", price: 4500, time: "6:00 AM" },
        { id: 4, airline: "Vistara", from: "Chennai", to: "Delhi", price: 6500, time: "8:00 PM" },
    ];

    const [maxPrice, setMaxPrice] = useState("");
    const [selectedAirline, setSelectedAirline] = useState("");

    const filteredFlights = flightsData.filter((flight) => {
        return (
            (maxPrice === "" || flight.price <= parseInt(maxPrice)) &&
            (selectedAirline === "" || flight.airline === selectedAirline)
        );
    });

    return (
        <div style={{ margin: 0, padding: 0, background: "#fff" }}>
            <div style={{ ...styles.slideContainer, height: "100vh", overflow: "auto" }}>
                {/* Search Header */}
                <h2 style={styles.heading}>Search Flights ✈️</h2>

                {/* Filters */}
                <div style={styles.filterBox}>
                    <div style={styles.filterItem}>
                        <label style={styles.label}>Max Price</label>
                        <input
                            type="number"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            placeholder="Enter max price"
                            style={styles.input}
                        />
                    </div>

                    <div style={styles.filterItem}>
                        <label style={styles.label}>Airline</label>
                        <select
                            value={selectedAirline}
                            onChange={(e) => setSelectedAirline(e.target.value)}
                            style={styles.select}
                        >
                            <option value="">All Airlines</option>
                            <option value="Indigo">Indigo</option>
                            <option value="Air India">Air India</option>
                            <option value="SpiceJet">SpiceJet</option>
                            <option value="Vistara">Vistara</option>
                        </select>
                    </div>
                </div>

                {/* Results */}
                <div style={styles.results}>
                    {filteredFlights.length > 0 ? (
                        filteredFlights.map((flight) => (
                            <div key={flight.id} style={styles.card}>
                                <h3 style={{ margin: "0" }}>{flight.airline}</h3>
                                <p style={styles.text}>{flight.from} → {flight.to}</p>
                                <p style={styles.text}>Time: {flight.time}</p>
                                <p style={styles.price}>₹{flight.price}</p>
                            </div>
                        ))
                    ) : (
                        <p style={{ textAlign: "center", color: "#999" }}>
                            No flights match your filter.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

const styles = {
    slideContainer: {
        background: "white",
        padding: "0px",
        margin: 0,
        width: "400px",
        borderRadius: "0px",
        boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    },
    heading: {
        margin: "0 0 10px 0", // removed top space
        padding: "10px 0",
        fontSize: "1.5rem",
        textAlign: "center",
        color: "#2563eb",
    },
    filterBox: {
        display: "flex",
        flexDirection: "column",
        gap: "0px",
        marginBottom: "20px",
        padding: "0 10px",
    },
    filterItem: {
        display: "flex",
        flexDirection: "column",
    },
    label: {
        marginBottom: "5px",
        fontSize: "0.9rem",
        color: "#333",
    },
    input: {
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    select: {
        padding: "8px",
        border: "1px solid #ccc",
        borderRadius: "5px",
    },
    results: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "0 10px",
    },
    card: {
        background: "#d0d0d1ff",
        padding: "15px",
        borderRadius: "8px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
    },
    text: {
        margin: "3px 0",
        color: "#282626ff",
    },
    price: {
        marginTop: "5px",
        fontWeight: "bold",
        color: "#22c55e",
    },
};
