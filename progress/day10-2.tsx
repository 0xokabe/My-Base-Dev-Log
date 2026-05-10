"use client";

import { useState } from "react";

export default function Day10AddressBook() {
  const [savedAddresses, setSavedAddresses] = useState<string[]>([]);
  const [newAddress, setNewAddress] = useState("");

  const saveAddress = () => {
    if (!newAddress) {
      alert("Please enter wallet address.");
      return;
    }

    setSavedAddresses([...savedAddresses, newAddress]);
    setNewAddress("");
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
        <h1>Wallet Address Book</h1>

        <input
          placeholder="Save Wallet Address"
          value={newAddress}
          onChange={(e) => setNewAddress(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveAddress}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Address
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Saved Addresses
        </h2>

        {savedAddresses.length === 0 ? (
          <p>No saved addresses yet</p>
        ) : (
          savedAddresses.map((address, index) => (
            <p key={index}>{address}</p>
          ))
        )}
      </div>
    </main>
  );
}
