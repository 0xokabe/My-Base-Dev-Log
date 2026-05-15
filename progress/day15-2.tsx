"use client";

import { useState } from "react";

export default function Day15QuickSendTemplate() {
  const [templates, setTemplates] = useState<string[]>([]);
  const [newTemplate, setNewTemplate] = useState("");

  const saveTemplate = () => {
    if (!newTemplate) {
      alert("Please enter template info.");
      return;
    }

    setTemplates([...templates, newTemplate]);
    setNewTemplate("");
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
        <h1>Quick Send Template</h1>

        <input
          placeholder="Save Recipient + Amount Template"
          value={newTemplate}
          onChange={(e) => setNewTemplate(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveTemplate}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Template
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Templates
        </h2>

        {templates.length === 0 ? (
          <p>No saved templates yet</p>
        ) : (
          templates.map((template, index) => (
            <p key={index}>{template}</p>
          ))
        )}
      </div>
    </main>
  );
}
