"use client";

import { useState } from "react";

export default function Day17WalletTagManager() {
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState("");

  const saveTag = () => {
    if (!newTag) {
      alert("Please enter a wallet tag.");
      return;
    }

    setTags([...tags, newTag]);
    setNewTag("");
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
        <h1>Wallet Tag Manager</h1>

        <input
          placeholder="Add wallet tag (ex: Main Wallet)"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveTag}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Tag
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Tags
        </h2>

        {tags.length === 0 ? (
          <p>No wallet tags yet</p>
        ) : (
          tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))
        )}
      </div>
    </main>
  );
}
