"use client";

import { useState } from "react";

export default function Day23BridgeFeeCalculator() {
  const [amount, setAmount] = useState("");
  const [fee, setFee] = useState("");

  const calculateFee = () => {
    if (!amount) {
      alert("Please enter bridge amount.");
      return;
    }

    // simplified mock calculation
    const calculatedFee = Number(amount) * 0.003;

    setFee(calculatedFee.toFixed(4));
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
        <h1>Bridge Fee Calculator</h1>

        <input
          placeholder="Enter bridge amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={calculateFee}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Calculate Fee
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Estimated Bridge Fee
        </h2>

        {!fee ? (
          <p>No calculation yet</p>
        ) : (
          <p>{fee} ETH</p>
        )}
      </div>
    </main>
  );
}
