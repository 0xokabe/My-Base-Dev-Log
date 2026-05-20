"use client";

import { useState } from "react";

export default function Day20TransactionMemo() {
  const [memos, setMemos] = useState<string[]>([]);
  const [newMemo, setNewMemo] = useState("");

  const saveMemo = () => {
    if (!newMemo) {
      alert("Please enter transaction memo.");
      return;
    }

    setMemos([...memos, newMemo]);
    setNewMemo("");
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
        <h1>Transaction Memo Manager</h1>

        <input
          placeholder="Add transaction memo"
          value={newMemo}
          onChange={(e) => setNewMemo(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveMemo}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Memo
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Memos
        </h2>

        {memos.length === 0 ? (
          <p>No transaction memos yet</p>
        ) : (
          memos.map((memo, index) => (
            <p key={index}>{memo}</p>
          ))
        )}
      </div>
    </main>
  );
}
