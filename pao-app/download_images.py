import os
import requests

# Create folder if it doesn't exist
os.makedirs("public/images", exist_ok=True)

# Character list (00-09) with search terms
characters = {
    "00": "Ozzy+Osbourne",
    "01": "Neo+Matrix",
    "02": "James+Bond",
    "03": "Harry+Potter",
    "04": "Thor",
    "05": "Sherlock+Holmes",
    "06": "Darth+Vader",
    "07": "Wonder+Woman",
    "08": "Mario",
    "09": "Batman"
}

print("Downloading images from picsum.photos (SSL-safe)...")

for num, name in characters.items():
    # Use picsum.photos - generates random placeholder images with text
    url = f"https://picsum.photos/seed/{name}/300/300"
    
    filename = f"public/images/{num}.jpg"
    try:
        response = requests.get(url, verify=False)  # Disable SSL verification for Termux
        with open(filename, 'wb') as f:
            f.write(response.content)
        print(f"✅ Downloaded {num} - {name}")
    except Exception as e:
        print(f"❌ Failed to download {num}: {e}")

print("\nDone! Images saved in public/images/")
