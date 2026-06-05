"use client";

import { useState } from "react";

export default function Day30PortfolioPerformance() {
  const [loaded, setLoaded] = useState(false);

  const [stats, setStats] = useState({
    portfolioValue: "$0",
    profitLoss: "$0",
    roi: "0%",
  });

  const loadPerformance = () => {
    setStats({
      portfolioValue: "$8,420",
      profitLoss: "+$1,230",
      roi: "+17.1%",
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
          width: "620px",
          padding: "32px",
          borderRadius: "16px",
          background: "#111",
          border: "1px solid #222",
          textAlign: "center",
        }}
      >
        <h1>Portfolio Performance Tracker</h1>

        <button
          onClick={loadPerformance}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Performance
        </button>

        {loaded && (
          <>
            <h2 style={{ marginTop: "28px" }}>
              Portfolio Summary
            </h2>

            <p>Total Value: {stats.portfolioValue}</p>
            <p>P/L: {stats.profitLoss}</p>
            <p>ROI: {stats.roi}</p>
          </>
        )}
      </div>
    </main>
  );
}
