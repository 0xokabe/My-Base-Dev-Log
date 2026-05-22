"use client";

import { useState } from "react";

export default function Day22WalletExportTool() {
  const [wallets, setWallets] = useState<string[]>([
    "0x123...abc",
    "0x456...def",
    "0x789...ghi",
  ]);

  const [exported, setExported] = useState(false);

  const exportWallets = () => {
    // simplified export simulation
    console.log(wallets);
    setExported(true);
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
          width: "580px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Wallet Export Tool</h1>

        <h2 style={{ marginTop: "20px" }}>
          Saved Wallets
        </h2>

        {wallets.map((wallet, index) => (
          <p key={index}>{wallet}</p>
        ))}

        <button
          onClick={exportWallets}
          style={{
            marginTop: "24px",
            padding: "12px 20px",
          }}
        >
          Export Wallet List
        </button>

        {exported && (
          <p style={{ marginTop: "20px" }}>
            Wallet list exported ✅
          </p>
        )}
      </div>
    </main>
  );
}
