"use client";

import { useState } from "react";

export default function Day30BuilderMilestone() {
  const [showStats, setShowStats] = useState(false);

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
        <h1>30 Day Builder Milestone</h1>

        <button
          onClick={() => setShowStats(true)}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          View Milestone
        </button>

        {showStats && (
          <>
            <h2 style={{ marginTop: "28px" }}>
              Progress Summary
            </h2>

            <p>Days Built: 30</p>
            <p>Projects Created: 60+</p>
            <p>Commit Streak: Active 🔥</p>
            <p>Base Builder Journey: Ongoing 🚀</p>
          </>
        )}
      </div>
    </main>
  );
}
