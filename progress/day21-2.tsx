"use client";

import { useState } from "react";

export default function Day21SavedSearches() {
  const [searches, setSearches] = useState<string[]>([]);
  const [newSearch, setNewSearch] = useState("");

  const saveSearch = () => {
    if (!newSearch) {
      alert("Please enter search keyword.");
      return;
    }

    setSearches([...searches, newSearch]);
    setNewSearch("");
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
        <h1>Saved Wallet Searches</h1>

        <input
          placeholder="Save search keyword"
          value={newSearch}
          onChange={(e) => setNewSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveSearch}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Search
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Searches
        </h2>

        {searches.length === 0 ? (
          <p>No saved searches yet</p>
        ) : (
          searches.map((search, index) => (
            <p key={index}>{search}</p>
          ))
        )}
      </div>
    </main>
  );
}
