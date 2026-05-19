"use client";

import { useState } from "react";

export default function Day19RecurringTransferPlanner() {
  const [plans, setPlans] = useState<string[]>([]);
  const [newPlan, setNewPlan] = useState("");

  const savePlan = () => {
    if (!newPlan) {
      alert("Please enter transfer plan.");
      return;
    }

    setPlans([...plans, newPlan]);
    setNewPlan("");
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
        <h1>Recurring Transfer Planner</h1>

        <input
          placeholder="Add recurring transfer plan"
          value={newPlan}
          onChange={(e) => setNewPlan(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={savePlan}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Plan
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Plans
        </h2>

        {plans.length === 0 ? (
          <p>No transfer plans yet</p>
        ) : (
          plans.map((plan, index) => (
            <p key={index}>{plan}</p>
          ))
        )}
      </div>
    </main>
  );
}
