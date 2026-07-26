import os
import requests
import time
import json

# Create folder
os.makedirs("public/images", exist_ok=True)

# Characters (00-09)
characters = {
    "00": "Ozzy Osbourne",
    "01": "Neo",
    "02": "James Bond",
    "03": "Harry Potter",
    "04": "Thor",
    "05": "Sherlock Holmes",
    "06": "Darth Vader",
    "07": "Wonder Woman",
    "08": "Mario",
    "09": "Batman"
}

# Free TMDB API key
API_KEY = "e3e6e07f41f38eab464b0b707e2c808f"

print("Fetching images using TMDB...")

for num, name in characters.items():
    print(f"Searching for {name}...")
    
    try:
        # Search for the person
        search_url = f"https://api.themoviedb.org/3/search/person?api_key={API_KEY}&query={name}"
        response = requests.get(search_url)
        data = response.json()
        
        if data.get('results') and len(data['results']) > 0:
            profile_path = data['results'][0].get('profile_path')
            
            if profile_path:
                # Download the image
                img_url = f"https://image.tmdb.org/t/p/w500{profile_path}"
                img_response = requests.get(img_url)
                
                filename = f"public/images/{num}.jpg"
                with open(filename, 'wb') as f:
                    f.write(img_response.content)
                
                file_size = os.path.getsize(filename)
                print(f"✅ Downloaded {num} - {name} ({file_size} bytes)")
            else:
                print(f"❌ No profile image for {name}")
        else:
            print(f"❌ No results for {name}")
            
    except Exception as e:
        print(f"❌ Error: {e}")
    
    time.sleep(1)

print("\n✅ Done! Images saved in public/images/")
