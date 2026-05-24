"use client";

import { useState } from "react";

export default function Day24TokenSwapPreview() {
  const [tokenAmount, setTokenAmount] = useState("");
  const [estimatedOutput, setEstimatedOutput] = useState("");

  const previewSwap = () => {
    if (!tokenAmount) {
      alert("Please enter token amount.");
      return;
    }

    // simplified mock swap calculation
    const output = Number(tokenAmount) * 0.97;

    setEstimatedOutput(output.toFixed(2));
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
        <h1>Token Swap Preview</h1>

        <input
          placeholder="Enter token amount"
          value={tokenAmount}
          onChange={(e) => setTokenAmount(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={previewSwap}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Preview Swap
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Estimated Output
        </h2>

        {!estimatedOutput ? (
          <p>No swap preview yet</p>
        ) : (
          <p>{estimatedOutput} Tokens</p>
        )}
      </div>
    </main>
  );
}
