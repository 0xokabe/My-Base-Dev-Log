"use client";

import { useState } from "react";

export default function Day19TokenApprovalChecker() {
  const [loaded, setLoaded] = useState(false);
  const [approvals, setApprovals] = useState<string[]>([]);

  const loadApprovals = () => {
    // simplified mock data for builder challenge
    const mockApprovals = [
      "USDC → Approved for Uniswap",
      "DAI → Approved for Base Bridge",
      "USDT → Approved for Aave",
      "ETH → No approval needed",
    ];

    setApprovals(mockApprovals);
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
          width: "600px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Token Approval Checker</h1>

        <button
          onClick={loadApprovals}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Token Approvals
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Current Approvals
        </h2>

        {!loaded ? (
          <p>No approvals loaded yet</p>
        ) : (
          approvals.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        )}
      </div>
    </main>
  );
}
