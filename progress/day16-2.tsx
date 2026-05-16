"use client";

import { useState } from "react";

export default function Day16WalletNotes() {
  const [notes, setNotes] = useState<string[]>([]);
  const [newNote, setNewNote] = useState("");

  const saveNote = () => {
    if (!newNote) {
      alert("Please enter a note.");
      return;
    }

    setNotes([...notes, newNote]);
    setNewNote("");
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
        <h1>Wallet Notes Manager</h1>

        <input
          placeholder="Add wallet memo or note"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveNote}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Note
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Notes
        </h2>

        {notes.length === 0 ? (
          <p>No notes yet</p>
        ) : (
          notes.map((note, index) => (
            <p key={index}>{note}</p>
          ))
        )}
      </div>
    </main>
  );
}
