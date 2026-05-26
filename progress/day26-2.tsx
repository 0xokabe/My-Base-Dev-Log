"use client";

import { useState } from "react";

export default function Day26PortfolioGoals() {
  const [goals, setGoals] = useState<string[]>([]);
  const [newGoal, setNewGoal] = useState("");

  const saveGoal = () => {
    if (!newGoal) {
      alert("Please enter portfolio goal.");
      return;
    }

    setGoals([...goals, newGoal]);
    setNewGoal("");
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
        <h1>Portfolio Goals Manager</h1>

        <input
          placeholder="Add portfolio goal"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveGoal}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Goal
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Goals
        </h2>

        {goals.length === 0 ? (
          <p>No portfolio goals yet</p>
        ) : (
          goals.map((goal, index) => (
            <p key={index}>{goal}</p>
          ))
        )}
      </div>
    </main>
  );
}
