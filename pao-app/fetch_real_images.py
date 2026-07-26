import os
import requests
import json
import time

# Create folder
os.makedirs("public/images", exist_ok=True)

# Characters and their Wikipedia page titles (00-09)
characters = {
    "00": "Ozzy Osbourne",
    "01": "Neo (The Matrix)",
    "02": "James Bond",
    "03": "Harry Potter (character)",
    "04": "Thor (Marvel Comics)",
    "05": "Sherlock Holmes",
    "06": "Darth Vader",
    "07": "Wonder Woman",
    "08": "Mario",
    "09": "Batman"
}

# Headers to tell Wikipedia who we are (prevents blocking)
headers = {
    "User-Agent": "PAO-Memory-Trainer/1.0 (https://github.com/Clinton18rotich/pao-memory-trainer; your-email@example.com)"
}

print("Fetching real images from Wikipedia with proper headers...")

for num, name in characters.items():
    print(f"Searching for {name}...")
    
    # Wikipedia API URL to get the main image
    url = f"https://en.wikipedia.org/api/rest_v1/page/summary/{name.replace(' ', '_')}"
    
    try:
        response = requests.get(url, headers=headers)
        
        # Check if the request was successful
        if response.status_code == 200:
            data = response.json()
            
            # Look for the thumbnail image
            if 'thumbnail' in data and 'source' in data['thumbnail']:
                img_url = data['thumbnail']['source']
                
                # Download the image
                img_response = requests.get(img_url, headers=headers)
                filename = f"public/images/{num}.jpg"
                
                with open(filename, 'wb') as f:
                    f.write(img_response.content)
                print(f"✅ Downloaded real image for {num} - {name}")
            else:
                print(f"❌ No image found for {name}")
        else:
            print(f"❌ Failed to fetch {name} (Status code: {response.status_code})")
            
    except Exception as e:
        print(f"❌ Failed to fetch {name}: {e}")
    
    # Be polite - sleep for 1 second between requests
    time.sleep(1)

print("\nDone! Real images saved in public/images/")
