"use client";

import { useState } from "react";

export default function Day24DAOProposalTracker() {
  const [loaded, setLoaded] = useState(false);
  const [proposals, setProposals] = useState<string[]>([]);

  const loadProposals = () => {
    // simplified mock DAO proposal data
    const mockProposals = [
      "Proposal #12 — Treasury Allocation Update",
      "Proposal #15 — Base Ecosystem Grant",
      "Proposal #18 — Governance Parameter Change",
      "Proposal #21 — Community Rewards Expansion",
    ];

    setProposals(mockProposals);
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
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>DAO Proposal Tracker</h1>

        <button
          onClick={loadProposals}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load DAO Proposals
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Active Proposals
        </h2>

        {!loaded ? (
          <p>No proposals loaded yet</p>
        ) : (
          proposals.map((proposal, index) => (
            <p key={index}>{proposal}</p>
          ))
        )}
      </div>
    </main>
  );
}
