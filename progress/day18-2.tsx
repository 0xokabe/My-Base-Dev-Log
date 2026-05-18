"use client";

import { useState } from "react";

export default function Day18WalletRiskChecker() {
  const [checked, setChecked] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [riskLevel, setRiskLevel] = useState("");

  const checkRisk = () => {
    if (!walletAddress) {
      alert("Please enter wallet address.");
      return;
    }

    // simplified mock logic
    setRiskLevel("Low Risk ✅");
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
        <h1>Wallet Risk Checker</h1>

        <input
          placeholder="Enter wallet address"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={checkRisk}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Check Wallet Risk
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Risk Status
        </h2>

        {!checked ? (
          <p>No wallet checked yet</p>
        ) : (
          <p>{riskLevel}</p>
        )}
      </div>
    </main>
  );
}
