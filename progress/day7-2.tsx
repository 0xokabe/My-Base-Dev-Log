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
          width: "500px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Wallet Balance Checker</h1>

        {!connected ? (
          <button
            onClick={connectWallet}
            style={{
              padding: "12px 20px",
              marginTop: "20px",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
            }}
          >
            Connect Wallet
          </button>
        ) : (
          <>
            <p style={{ marginTop: "20px" }}>
              Wallet Connected ✅
            </p>

            <p>{walletAddress}</p>

            <h2 style={{ marginTop: "24px" }}>
              ETH Balance
            </h2>

            <p>{balance} ETH</p>
          </>
        )}
      </div>
    </main>
  );
}
