import requests
from decimal import Decimal

# Base Mainnet public RPC
BASE_RPC_URL = "https://mainnet.base.org"

def get_base_gas_price():
    payload = {
        "jsonrpc": "2.0",
        "method": "eth_gasPrice",
        "params": [],
        "id": 1
    }

    try:
        response = requests.post(BASE_RPC_URL, json=payload, timeout=10)
        response.raise_for_status()

        data = response.json()

        if "result" not in data:
            print("가스비 정보를 가져오지 못했습니다.")
            return

        # hex -> int (wei)
        gas_price_wei = int(data["result"], 16)

        # wei -> gwei
        gas_price_gwei = Decimal(gas_price_wei) / Decimal(10**9)

        print(f"현재 Base 가스비: {gas_price_gwei:.2f} Gwei")

        # 간단한 상태 표시
        if gas_price_gwei < 0.05:
            print("상태: 매우 저렴")
        elif gas_price_gwei < 0.2:
            print("상태: 보통")
        else:
            print("상태: 비쌈")

    except requests.exceptions.RequestException as e:
        print("RPC 요청 실패:", e)


if __name__ == "__main__":
    get_base_gas_price()
