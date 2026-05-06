import asyncio
import httpx

async def send_data():
    data = {
        "product":[{
            "id": 1, 
            "name": "Desde Python",
            "price": 99
        }]
    }

    async with httpx.AsyncClient() as client:
        try:
            response = await client.post("http://localhost:3000/snapshots",json=data)
            if response.status_code == 200:
                print("Se envió correctamente")
            else:
                print("Error:", response.status_code)
        except Exception as e:
            print("Fallo la conexión", e)

    