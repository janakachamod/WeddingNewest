// Sample guest list (extended)
const guestList = {

  "Bride Family": "Table 01",
  "Mr. & Mrs. Mangala Ilanganthilaka & Family": "Table 01",
  "Prof. Percy Wijewardana & Family": "Table 01",
  "Groom Family":"Table 02",
  "Mr. & Mrs.Amarathunga & Family": "Table 02",
  "Mrs.Prinzi Fernando & Family": "Table 02",
  "Mr. & Mrs. Ajith Dannangoda": "Table 02",
  "Shane Heyn & Family": "Table 02",
  "Mr. & Mrs. Jayawardena": "Table 03",
  "Mr. & Mrs. Duminda Gunawardane": "Table 03",
  "Wasana Alwis": "Table 03",
  "Renuka Wijendra": "Table 03",
  "Mr. & Mrs. Ruwan Jayasinghe": "Table 03",
  "Sicilia Anthony": "Table 03",
  "Naali Mohideen": "Table 03",
  "Lalith Kumarage & Family": "Table 04",
  "Chathumi Modaragamage": "Table 04",
  "Charitha Rajapakse": "Table 04",
  "Nipuna Abeyweera": "Table 04",
  "Viduravi Kumbukage": "Table 04",
  "Achara Weerakoon": "Table 04",
  "Mr. & Mrs. Seevali Arukgoda & Family": "Table 05",
  "Mr. & Mrs. Sumith Bandara & Family": "Table 05",
  "Prasanna Liyanage": "Table 05",
  "Mr. & Mrs. Ranjith Fernando": "Table 05",
  "Mr. & Mrs. Sarath Jayawardena": "Table 06",
  "Mr. & Mrs. Kosala Dayan & Family": "Table 06",
  "Mr. & Mrs. Rajitha Wickramasinghe & Family ": "Table 06",
  "Gamini Withana & Family": "Table 06",
  "Kamani Liyanapathirana": "Table 07",
  "Tharanga Liyanapathirana & Family": "Table 07",
  "Ishara Attanayake": "Table 07",
  "Nilu Liyanapathirana": "Table 07",
  "Mr. & Mrs. Padmasiri Attanayake": "Table 07",
  "Nishanka De Silva & Family": "Table 07",
  "Lalindu Samaraweera": "Table 08",
  "Janaka Bandara": "Table 08",
  "Pasan Gunawardena": "Table 08",
  "Piumal Bandara": "Table 08",
  "Thilini Gunasiri": "Table 08",
  "Shehara Perera": "Table 08",
  "Mr. & Mrs. Dulanjana Senaviratne": "Table 08",
  "Devni Sellaperuma": "Table 08",
  "Harshika Dulanji": "Table 08",
  "Sanduni Welikala": "Table 09",
  "Linisha Siriwardana": "Table 09",
  "Dinithi Kulatunga": "Table 09",
  "Ayeshmantha Jayasekara": "Table 09",
  "Pamudi Ashenika": "Table 09",
  "Chaya Dayakumara": "Table 09",
  "Dulanji Benaragama": "Table 09",
  "Thisuri Fernando": "Table 09",
  "Hiruni Hewagamage": "Table 09",
  "Mekala Haputhantri": "Table 09",
  "Navodi Wickramaarchchi": "Table 09",
  "Tharushi Jayaratne": "Table 09",
  "Achini Wanigasekara": "Table 10",
  "Nishamini Amunugama": "Table 10",
  "Supun Rupasinghe": "Table 10",
  "Basil Devadason": "Table 10",
  "Chitra De Silva": "Table 10",
  "Nepalee Soundarya": "Table 10",
  "Mr. & Mrs. Vinura Kurundukumbura": "Table 10",
  "Dilusha Iranga": "Table 11",
  "Prageeth Wanigasuriya": "Table 11",
  "Nilupa Wijesinghe": "Table 11",
  "Niroshan Wickramasooriya": "Table 11",
  "Danushi Wetthasinghe": "Table 11",
  "Chamara Lekamage": "Table 11",
  "Sihan Gunathilake": "Table 11",
  "Suhail Nawas": "Table 11",
  "Senura Dharmathilaka": "Table 11",
  "Priyantha Kumarage": "Table 11",
  "Lamal Kottege": "Table 12",
  "Dulith Kulatunge": "Table 12",
  "Janindu Meegoda": "Table 12",
  "Mr. & Mrs. Pradeep Gamage": "Table 12",
  "Avindi Nisansala": "Table 12",
  "Kavishan Sooriyabandara": "Table 12",
  "Induwara Pasan": "Table 12",
  "Mr. & Mrs. Yashod Lalana": "Table 12",
  "Shanidu Avishka": "Table 13",
  "Dareen De Silva": "Table 13",
  "Chamath Asanka": "Table 13",
  "Mr. & Mrs. Paranawithana": "Table 13",
  "Sajith De Silva": "Table 13",
  "Ashan Gamage": "Table 13",
  "Prabath Fernando": "Table 13",
  "Weddings by Shaini De Silva": "Table 14",
  "Mama Photography": "Table 14",
  "Capital D Cinematics": "Table 14",
  "Yasansha Photography": "Table 14",
  "Loards Band": "Table 15",
  "Niran": "Head Table",
  "Samadhi": "Head Table",
  "Niven": "Head Table",
  "Lakmal": "Head Table",
  "Dulka": "Head Table",
  "Chamasha": "Head Table"

};

const input = document.getElementById('guestInput');
const result = document.getElementById('result');
const suggestions = document.getElementById('suggestions');
const floatingHearts = document.getElementById('floatingHearts');
const particlesContainer = document.getElementById('particles');
const audio = document.getElementById('bg-music');
const audioControl = document.querySelector('.audio-control');

// Create floating particles
function createParticles() {
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    const size = Math.random() * 5 + 1;
    const posX = Math.random() * window.innerWidth;
    const posY = Math.random() * window.innerHeight;
    const delay = Math.random() * 5;
    const duration = Math.random() * 10 + 10;
    const opacity = Math.random() * 0.5 + 0.1;
    
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${posX}px`;
    particle.style.top = `${posY}px`;
    particle.style.opacity = opacity;
    particle.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;
    
    particlesContainer.appendChild(particle);
  }
}

// Create floating hearts
// Floating Hearts Logic Only
const floatingHeartsContainer = document.getElementById('floatingHearts');

function createHeart() {
  const heart = document.createElement('div');
  heart.className = 'heart';
  heart.innerHTML = '<i class="fas fa-heart"></i>';
  
  // Random position across the entire screen width
  const startPos = Math.random() * 100;
  heart.style.setProperty('--start-pos', `${startPos}vw`);
  
  // Random size between 10px and 30px
  const size = Math.random() * 20 + 10;
  heart.style.fontSize = `${size}px`;
  
  // Random animation duration between 5s and 10s
  const duration = Math.random() * 5 + 5;
  heart.style.animationDuration = `${duration}s`;
  
  // Random delay between 0s and 3s
  const delay = Math.random() * 3;
  heart.style.animationDelay = `${delay}s`;
  
  floatingHeartsContainer.appendChild(heart);
  
  // Remove heart after animation completes
  setTimeout(() => {
    heart.remove();
  }, duration * 1000 + 100);
}

function startHeartsAnimation() {
  // Create initial hearts
  for (let i = 0; i < 15; i++) {
    createHeart();
  }
  
  // Continue creating hearts every 500ms
  setInterval(createHeart, 500);
}

// Initialize hearts animation
document.addEventListener('DOMContentLoaded', startHeartsAnimation);

// Rest of your existing code remains exactly the same
// [All other functions stay unchanged]

// Create confetti effect
function createConfetti() {
  const confettiCount = 100;
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 60 + 30}, 100%, 80%)`;
    confetti.style.width = Math.random() * 10 + 5 + 'px';
    confetti.style.height = Math.random() * 10 + 5 + 'px';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.animationDelay = Math.random() * 2 + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
}

// Handle audio with user interaction requirement
function handleAudio() {
  // Set audio volume to 50% to be less intrusive
  audio.volume = 0.5;
  
  // Try to play audio (will fail without user interaction in most browsers)
  const playPromise = audio.play();
  
  if (playPromise !== undefined) {
    playPromise.then(() => {
      // Audio is playing
      audioControl.innerHTML = '<i class="fas fa-music"></i>';
    }).catch(error => {
      // Autoplay was prevented, show muted state
      console.log("Autoplay prevented:", error);
    });
  }
}

// Toggle audio
function toggleAudio() {
  if (audio.paused) {
    audio.play();
    audioControl.innerHTML = '<i class="fas fa-pause"></i>';
  } else {
    audio.pause();
    audioControl.innerHTML = '<i class="fas fa-music"></i>';
  }
}

// Check guest function with enhanced effects
function checkGuest(name) {
  const formattedName = name.trim().toLowerCase();
  const matched = Object.entries(guestList).find(([key]) => key.toLowerCase() === formattedName);

  if (matched) {
    result.innerHTML = `
      <div class="table-result">
        <div style="font-size: 1.8rem; margin-bottom: 0.5rem;">🎉</div>
        Welcome ${matched[0]}!<br>
        You are seated at <strong>${matched[1]}</strong>.
        <div style="margin-top: 0.8rem; font-size: 0.9em; color: #f5d7b3;">
         
        </div>
      </div>
    `;
    createConfetti();
  } else {
    result.innerHTML = `
      <div class="not-invited">
        <div style="font-size: 1.5rem; margin-bottom: 0.5rem;">😔</div>
        Sorry, we couldn't find your name on our guest list.<br>
        Please check with the wedding organizers.
      </div>
    `;
  }

  suggestions.style.display = 'none';
}

// Show suggestions with debounce
let debounceTimer;
function showSuggestions(value) {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const search = value.trim().toLowerCase();
    if (!search) {
      suggestions.style.display = 'none';
      return;
    }

    const matches = Object.keys(guestList).filter(name => 
      name.toLowerCase().includes(search)
    );

    if (matches.length > 0) {
      suggestions.innerHTML = matches.map(name => 
        `<li onclick="selectSuggestion('${name}')">${name} <span style="float: right; color: #f5d7b3; font-size: 0.9em;">${guestList[name]}</span></li>`
      ).join('');
      suggestions.style.display = 'block';
    } else {
      suggestions.style.display = 'none';
    }
  }, 200);
}

function selectSuggestion(name) {
  input.value = name;
  suggestions.style.display = 'none';
  checkGuest(name);
}

// Location popup functions
function openLocationPopup() {
  document.getElementById('locationPopup').classList.add('active');
  setTimeout(() => {
    if (!window.mapInitialized) {
      const map = L.map('map').setView([6.905857692451532, 79.91171436387717], 15); // Colombo coordinates
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      
      // Custom wedding icon
      const weddingIcon = L.icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/411/411745.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40]
      });
      
      L.marker([6.905857692451532, 79.91171436387717], {icon: weddingIcon}).addTo(map)
        .bindPopup("<b>Wedding Venue</b><br>Water's Edge view Hotel, Colombo")
        .openPopup();
        
      window.mapInitialized = true;
    }
  }, 200);
}

function closeLocationPopup() {
  document.getElementById('locationPopup').classList.remove('active');
}

// Navigation functions
function openNavigation(app) {
  const lat = 6.905857692451532;
  const lng = 79.91171436387717;
  const address = "Water's Edge view Hotel, Colombo";
  
  if (app === 'google') {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=driving&dir_action=navigate`);
  } else if (app === 'apple') {
    window.open(`http://maps.apple.com/?daddr=${lat},${lng}&dirflg=d`);
  }
}

function copyLocation() {
  const address = "Water's Edge view Hotel, Colombo";
  navigator.clipboard.writeText(address).then(() => {
    alert("Address copied to clipboard!");
  }).catch(err => {
    console.error('Failed to copy address: ', err);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
  // Create animated background elements
  createParticles();
  
  // Start floating hearts animation
  setInterval(createHearts, 500);
  
  // Set up event listeners for audio control
  handleAudio();
  
  // Set up input event listeners
  input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkGuest(input.value.trim());
    }
  });
});