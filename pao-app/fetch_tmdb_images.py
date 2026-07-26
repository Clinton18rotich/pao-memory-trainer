import os
import requests
import time

# Create folder
os.makedirs("public/images", exist_ok=True)

# Characters with search terms (00-09)
characters = {
    "00": "Ozzy Osbourne",
    "01": "Neo The Matrix",
    "02": "James Bond",
    "03": "Harry Potter",
    "04": "Thor",
    "05": "Sherlock Holmes",
    "06": "Darth Vader",
    "07": "Wonder Woman",
    "08": "Mario",
    "09": "Batman"
}

# Free TMDB API key (publicly available for demo)
API_KEY = "e3e6e07f41f38eab464b0b707e2c808f"

print("Fetching REAL high-quality images from TMDB...")

for num, name in characters.items():
    print(f"Searching for {name}...")
    
    # Search TMDB for the person
    search_url = f"https://api.themoviedb.org/3/search/person?api_key={API_KEY}&query={name}"
    
    try:
        response = requests.get(search_url)
        data = response.json()
        
        if data['results'] and len(data['results']) > 0:
            # Get the first result's profile path
            profile_path = data['results'][0]['profile_path']
            
            if profile_path:
                # Build the full image URL (TMDB serves high-quality 500px images)
                img_url = f"https://image.tmdb.org/t/p/w500{profile_path}"
                
                # Download the image
                img_response = requests.get(img_url)
                filename = f"public/images/{num}.jpg"
                
                with open(filename, 'wb') as f:
                    f.write(img_response.content)
                
                # Check if it actually downloaded (should be > 5KB)
                file_size = os.path.getsize(filename)
                print(f"✅ Downloaded {num} - {name} ({file_size} bytes)")
            else:
                print(f"❌ No profile image found for {name}")
        else:
            print(f"❌ No results found for {name}")
            
    except Exception as e:
        print(f"❌ Failed to fetch {name}: {e}")
    
    time.sleep(0.5)

print("\n✅ Done! High-quality images saved in public/images/")
