"use client";

import { useState } from "react";

export default function Day16GasTracker() {
  const [loaded, setLoaded] = useState(false);
  const [gasData, setGasData] = useState({
    slow: "0",
    standard: "0",
    fast: "0",
  });

  const loadGasData = () => {
    // simplified mock data for builder challenge
    setGasData({
      slow: "0.0021 ETH",
      standard: "0.0034 ETH",
      fast: "0.0050 ETH",
    });

    setLoaded(true);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0a0a0a",
        color: "white",
      }}
    >
      <div
        style={{
          width: "580px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Gas Fee Speed Tracker</h1>

        <button
          onClick={loadGasData}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Gas Fees
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Current Gas Options
        </h2>

        {!loaded ? (
          <p>No gas fee data loaded yet</p>
        ) : (
          <>
            <p>Slow: {gasData.slow}</p>
            <p>Standard: {gasData.standard}</p>
            <p>Fast: {gasData.fast}</p>
          </>
        )}
      </div>
    </main>
  );
}
