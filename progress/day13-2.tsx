"use client";

import { useState } from "react";

export default function Day13PortfolioSummary() {
  const [loaded, setLoaded] = useState(false);
  const [summary, setSummary] = useState({
    totalETH: "0",
    totalTokens: "0",
    totalNFTs: "0",
  });

  const loadPortfolio = () => {
    // simplified mock data
    setSummary({
      totalETH: "0.42",
      totalTokens: "5",
      totalNFTs: "7",
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
        <h1>Portfolio Summary Dashboard</h1>

        <button
          onClick={loadPortfolio}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Portfolio
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Portfolio Summary
        </h2>

        {!loaded ? (
          <p>No portfolio data loaded yet</p>
        ) : (
          <>
            <p>Total ETH: {summary.totalETH}</p>
            <p>Total Tokens: {summary.totalTokens}</p>
            <p>Total NFTs: {summary.totalNFTs}</p>
          </>
        )}
      </div>
    </main>
  );
}
