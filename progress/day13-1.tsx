"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day13WalletProfile() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [nickname, setNickname] = useState("");
  const [savedNickname, setSavedNickname] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
      setConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  const saveNickname = () => {
    if (!nickname) {
      alert("Please enter a nickname.");
      return;
    }

    setSavedNickname(nickname);
    setNickname("");
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
        <h1>Wallet Profile Manager</h1>

        {!connected ? (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <>
            <p>Wallet Connected ✅</p>
            <p>{walletAddress}</p>

            <input
              placeholder="Set Wallet Nickname"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "20px",
              }}
            />

            <button
              onClick={saveNickname}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
              }}
            >
              Save Nickname
            </button>

            {savedNickname && (
              <>
                <h2 style={{ marginTop: "24px" }}>
                  Saved Profile
                </h2>
                <p>{savedNickname}</p>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
