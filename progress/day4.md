# Day 4 — Base Network Detection Logic

## Goal

Today I added the network detection logic planning for the wallet connection flow.

The purpose is to check whether the user is connected to Base Mainnet after connecting their wallet.

This helps prevent wrong-network transactions and improves user experience.

---

## Logic Overview

### Target Network

Base Mainnet Chain ID:

8453

If the connected wallet chainId is `8453`, the app shows:

Base Mainnet Connected ✅

Otherwise:

Wrong Network ❌

Please switch to Base Mainnet.

---

## Example Logic

```tsx
const chainId = useChainId();
const isBase = chainId === 8453;
