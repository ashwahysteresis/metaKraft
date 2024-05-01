import requests

response = requests.get("http://localhost:8000/hello", timeout=10)  # Adjust the timeout value as needed
print(response.json())
