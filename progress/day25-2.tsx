"use client";

import { useState } from "react";

export default function Day25WalletHealthScore() {
  const [checked, setChecked] = useState(false);
  const [healthScore, setHealthScore] = useState("");

  const calculateHealth = () => {
    // simplified mock score
    setHealthScore("92 / 100 ✅");
    setChecked(true);
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
          width: "560px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Wallet Health Score</h1>

        <button
          onClick={calculateHealth}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Calculate Wallet Health
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Health Score
        </h2>

        {!checked ? (
          <p>No wallet analysis yet</p>
        ) : (
          <p>{healthScore}</p>
        )}
      </div>
    </main>
  );
}
