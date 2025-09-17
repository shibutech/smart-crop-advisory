// Language content mapping
const translations = {
    en: {
        welcome: "Welcome to Smart Crop Advisor",
        dashboard: "Dashboard",
        soilAnalysis: "Soil Analysis",
        pestDetection: "Pest Detection",
        marketPrices: "Market Prices",
        weatherToday: "Weather Today",
        getWeather: "Get Weather",
        cropHealth: "Crop Health",
        quickActions: "Quick Actions",
        recentActivities: "Recent Activities",
        viewAll: "View All",
        addCrop: "Add New Crop",
        scheduleTask: "Schedule Task",
        viewReports: "View Reports",
        lastUpdated: "Last updated"
    },
    hi: {
        welcome: "स्मार्ट क्रॉप सलाहकार में आपका स्वागत है",
        dashboard: "डैशबोर्ड",
        soilAnalysis: "मृदा विश्लेषण",
        pestDetection: "कीट पहचान",
        marketPrices: "बाजार मूल्य",
        weatherToday: "आज का मौसम",
        getWeather: "मौसम जानें",
        cropHealth: "फसल स्वास्थ्य",
        quickActions: "त्वरित कार्य",
        recentActivities: "हाल की गतिविधियाँ",
        viewAll: "सभी देखें",
        addCrop: "नई फसल जोड़ें",
        scheduleTask: "कार्य शेड्यूल करें",
        viewReports: "रिपोर्ट देखें",
        lastUpdated: "अंतिम अपडेट"
    },
    pa: {
        welcome: "ਸਮਾਰਟ ਕਰਾਪ ਸਲਾਹਕਾਰ ਵਿੱਚ ਤੁਹਾਡਾ ਸਵਾਗਤ ਹੈ",
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        soilAnalysis: "ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ",
        pestDetection: "ਕੀੜੇ ਦੀ ਪਛਾਣ",
        marketPrices: "ਮਾਰਕੀਟ ਦੀਆਂ ਕੀਮਤਾਂ",
        weatherToday: "ਅੱਜ ਦਾ ਮੌਸਮ",
        getWeather: "ਮੌਸਮ ਪਤਾ ਕਰੋ",
        cropHealth: "ਫਸਲ ਦੀ ਸਿਹਤ",
        quickActions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
        recentActivities: "ਤਾਜ਼ਾ ਗਤੀਵਿਧੀਆਂ",
        viewAll: "ਸਭ ਵੇਖੋ",
        addCrop: "ਨਵੀਂ ਫਸਲ ਜੋੜੋ",
        scheduleTask: "ਕੰਮ ਸ਼ੈਡਿਊਲ ਕਰੋ",
        viewReports: "ਰਿਪੋਰਟਾਂ ਵੇਖੋ",
        lastUpdated: "ਆਖਰੀ ਅੱਪਡੇਟ"
    },
    hne: {
        welcome: "स्मार्ट क्रॉप सलाहकार में रा़ज होय",
        dashboard: "डैशबोर्ड",
        soilAnalysis: "माटी जांच",
        pestDetection: "कीड़ा पहिचान",
        marketPrices: "बजार भाओ",
        weatherToday: "आज के मौसम",
        getWeather: "मौसम देखें",
        cropHealth: "फसल सेहत",
        quickActions: "जल्दी काम",
        recentActivities: "हाल के काम",
        viewAll: "सब देखें",
        addCrop: "नई फसल डालें",
        scheduleTask: "कार्य तय करें",
        viewReports: "रिपोर्ट देखें",
        lastUpdated: "आखिरी अपडेट"
    },
    te: {
        welcome: "స్మార్ట్ క్రాప్ సలహాదారుకు స్వాగతం",
        dashboard: "డాష్‌బోర్డ్",
        soilAnalysis: "నేల విశ్లేషణ",
        pestDetection: "కీటకాల గుర్తింపు",
        marketPrices: "మార్కెట్ ధరలు",
        weatherToday: "ఈరోజు వాతావరణం",
        getWeather: "వాతావరణం తెలుసుకోండి",
        cropHealth: "పంట ఆరోగ్యం",
        quickActions: "త్వరిత చర్యలు",
        recentActivities: "ఇటీవలి కార్యకలాపాలు",
        viewAll: "అన్నీ చూడండి",
        addCrop: "కొత్త పంటను జోడించండి",
        scheduleTask: "పనిని షెడ్యూల్ చేయండి",
        viewReports: "నివేదికలను వీక్షించండి",
        lastUpdated: "చివరిగా నవీకరించబడింది"
    },
    ml: {
        welcome: "സ്മാർട്ട് ക്രോപ്പ് ഉപദേശകിലേക്ക് സ്വാഗതം",
        dashboard: "ഡാഷ്ബോർഡ്",
        soilAnalysis: "മണ്ണ് പരിശോധന",
        pestDetection: "കീടം കണ്ടെത്തൽ",
        marketPrices: "മാർക്കറ്റ് വിലകൾ",
        weatherToday: "ഇന്നത്തെ കാലാവസ്ഥ",
        getWeather: "കാലാവസ്ഥ പരിശോധിക്കുക",
        cropHealth: "വിളയുടെ ആരോഗ്യം",
        quickActions: "ദ്രുത പ്രവർത്തനങ്ങൾ",
        recentActivities: "സമീപകാല പ്രവർത്തനങ്ങൾ",
        viewAll: "എല്ലാം കാണുക",
        addCrop: "പുതിയ വിള ചേർക്കുക",
        scheduleTask: "ജോലി ഷെഡ്യൂൾ ചെയ്യുക",
        viewReports: "റിപ്പോർട്ടുകൾ കാണുക",
        lastUpdated: "അവസാനമായി അപ്ഡേറ്റ് ചെയ്തത്"
    }
};

// Update content based on selected language
function updateContentLanguage(lang) {
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            // For input placeholders and other special attributes
            if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update RTL/LTR based on language
    if (['ar', 'fa', 'he', 'ur'].includes(lang)) {
        document.documentElement.dir = 'rtl';
    } else {
        document.documentElement.dir = 'ltr';
    }
    
    // Update the active language button in the language selector
    document.querySelectorAll('.language-select').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

// Register Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registration successful');
                
                // Check for updates
                registration.addEventListener('updatefound', () => {
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            // New update available
                            showUpdateNotification();
                        }
                    });
                });
            })
            .catch(err => console.error('ServiceWorker registration failed: ', err));
    });
}

// PWA Installation Prompt
let deferredPrompt;
const installButton = document.getElementById('install-button');

window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later
    deferredPrompt = e;
    
    // Show the install button if it exists
    if (installButton) {
        installButton.style.display = 'block';
        installButton.addEventListener('click', installApp);
    }
});

async function installApp() {
    if (!deferredPrompt) return;
    
    // Show the install prompt
    deferredPrompt.prompt();
    
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    
    // Hide the install button
    if (installButton) {
        installButton.style.display = 'none';
    }
    
    // We've used the prompt, and can't use it again, throw it away
    deferredPrompt = null;
}

// Show update notification
function showUpdateNotification() {
    if (window.Notification && Notification.permission === 'granted') {
        new Notification('Update Available', {
            body: 'A new version of CropAdvisor is available. Restart the app to update.',
            icon: 'images/icons/icon-192x192.png',
            vibrate: [200, 100, 200]
        });
    } else if (window.Notification && Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showUpdateNotification();
            }
        });
    }
}

// Check if app is running in standalone mode
function isRunningStandalone() {
    return window.matchMedia('(display-mode: standalone)').matches || 
           window.navigator.standalone || 
           document.referrer.includes('android-app://');
}

// Show install button if not running in standalone mode
if (!isRunningStandalone() && installButton) {
    installButton.style.display = 'block';
}

// Language Selection and App Initialization
document.addEventListener('DOMContentLoaded', function() {
    // Enable text selection
    document.body.style.userSelect = 'auto';
    
    // Get the modal element
    const languageModalElement = document.getElementById('languageModal');
    const languageModal = new bootstrap.Modal(languageModalElement, {
        backdrop: 'static',
        keyboard: false
    });
    
    // Show language modal on first load if no language is selected
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (!savedLanguage) {
        languageModal.show();
    } else {
        updateContentLanguage(savedLanguage);
        document.getElementById('app').classList.remove('d-none');
    }
    
    // Handle language selection
    document.querySelectorAll('.language-select').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = this.getAttribute('data-lang');
            localStorage.setItem('selectedLanguage', selectedLanguage);
            updateContentLanguage(selectedLanguage);
            languageModal.hide();
            document.getElementById('app').classList.remove('d-none');
        });
    });
    
    // Handle change language button
    const changeLanguageBtn = document.getElementById('changeLanguageBtn');
    if (changeLanguageBtn) {
        changeLanguageBtn.addEventListener('click', function() {
            languageModal.show();
        });
    }
    
    // Navigation handling
    setupNavigation();
    
    // Weather functionality
    setupWeather();
    
    // Initialize dashboard
    initializeDashboard();
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Initialize Chatbot
    const chatbotBtn = document.getElementById('chatbotBtn');
    const chatbotModal = new bootstrap.Modal(document.getElementById('chatbotModal'));
    
    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', function() {
            chatbotModal.show();
        });
    }

    // Initialize AR Scanner
    const arScanBtn = document.getElementById('ar-scan-btn');
    const arScannerModal = new bootstrap.Modal(document.getElementById('arScannerModal'));
    
    if (arScanBtn) {
        arScanBtn.addEventListener('click', function() {
            // In a real implementation, this would access the device camera
            // For the prototype, we'll just show the modal with a placeholder
            arScannerModal.show();
        });
    }

    // Handle chat input
    const chatInput = document.querySelector('#chatbotModal input[type="text"]');
    const chatSendBtn = document.querySelector('#chatbotModal .btn-primary');
    
    if (chatInput && chatSendBtn) {
        const sendMessage = () => {
            const message = chatInput.value.trim();
            if (message) {
                // In a real implementation, this would send the message to an AI service
                console.log('Sending message to AI:', message);
                chatInput.value = '';
                
                // Simulate AI response
                setTimeout(() => {
                    const responses = [
                        "I can help you with crop management and farming techniques. What specific information do you need?",
                        "For optimal growth, make sure your crops get enough sunlight and water.",
                        "I've analyzed your query. Here's what I recommend based on your crop type and region.",
                        "Based on the current season, you might want to consider adjusting your irrigation schedule."
                    ];
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    alert("AI Response: " + randomResponse);
                }, 1000);
            }
        };
        
        chatSendBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Simulate AR scanning (just for the prototype)
    document.getElementById('arScannerModal')?.addEventListener('shown.bs.modal', function() {
        console.log('AR Scanner activated - in a real implementation, this would access the device camera');
    });
    
    // Add event listeners for quick action buttons
    document.querySelectorAll('.quick-action').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            let message = '';
            let icon = 'info-circle';
            
            switch(action) {
                case 'schedule-irrigation':
                    message = 'Irrigation scheduling feature will be available in the next update. Our team is working on optimizing water usage recommendations for your fields.';
                    break;
                case 'add-note':
                    message = 'Field notes feature coming soon! You\'ll be able to record observations, soil conditions, and crop growth stages.';
                    break;
                case 'view-weather':
                    message = 'Weather forecast integration is in progress. Soon you\'ll get hyper-local weather predictions for your fields.';
                    break;
                case 'scan-pest':
                    message = 'Pest scanning with AI is under development. This feature will help identify pests and diseases from photos of your crops.';
                    icon = 'bug';
                    break;
                default:
                    message = 'This feature is coming soon!';
            }
            
            // Show a toast notification
            showToast('Feature Coming Soon', message, icon);
        });
    });

    // Show toast notification
    function showToast(title, message, icon = 'info-circle') {
        const toastContainer = document.getElementById('toastContainer');
        if (!toastContainer) return;
        
        const toastId = 'toast-' + Date.now();
        const toast = document.createElement('div');
        toast.className = 'toast align-items-center text-white bg-primary border-0';
        toast.role = 'alert';
        toast.setAttribute('aria-live', 'assertive');
        toast.setAttribute('aria-atomic', 'true');
        toast.id = toastId;
        
        toast.innerHTML = `
            <div class="d-flex">
                <div class="toast-body">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-${icon} me-2 fs-5"></i>
                        <strong class="me-auto">${title}</strong>
                    </div>
                    <div class="mt-1">${message}</div>
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        
        const bsToast = new bootstrap.Toast(toast, {
            autohide: true,
            delay: 5000
        });
        
        toast.addEventListener('hidden.bs.toast', function() {
            toast.remove();
        });
        
        bsToast.show();
    }

    // Add toast container to body if it doesn't exist
    function ensureToastContainer() {
        if (!document.getElementById('toastContainer')) {
            const container = document.createElement('div');
            container.id = 'toastContainer';
            container.className = 'toast-container position-fixed bottom-0 end-0 p-3';
            container.style.zIndex = '1100';
            document.body.appendChild(container);
        }
    }

    // Initialize toast container when DOM is loaded
    ensureToastContainer();
    
    // Show welcome message
    setTimeout(() => {
        showToast(
            'Welcome to CropAdvisor', 
            'Explore the new features including soil analysis, pest detection, and market prices!',
            'emoji-smile'
        );
    }, 1000);
});

// Add CSS for toast notifications
const toastStyles = document.createElement('style');
toastStyles.textContent = `
    .toast {
        margin-bottom: 1rem;
        box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
        border-radius: 0.5rem;
        max-width: 350px;
    }
    .toast-body {
        padding: 1rem;
    }
    .toast-container {
        z-index: 1090;
    }
`;
document.head.appendChild(toastStyles);

// Add this to your existing DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Add click handlers for view buttons in tables
    document.querySelectorAll('button[data-bs-target^="#"]').forEach(button => {
        button.addEventListener('click', function(e) {
            const target = this.getAttribute('data-bs-target');
            if (target === '#soilAnalysisModal' || target === '#pestHistoryModal' || target === '#priceTrendsModal') {
                e.preventDefault();
                showToast(
                    'Feature Preview', 
                    'This is a preview of the detailed view. The complete feature with real-time data will be available in the next update.',
                    'info-circle'
                );
            }
        });
    });
});

// Previous code...

// AR Scanner with Camera Access
let stream = null;

async function startCamera() {
    try {
        stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                facingMode: 'environment',
                width: { ideal: 1920 },
                height: { ideal: 1080 }
            },
            audio: false
        });
        
        const videoElement = document.getElementById('camera-feed');
        videoElement.srcObject = stream;
        videoElement.play();
        
        // Show scanner UI
        document.getElementById('scanner-ui').classList.remove('d-none');
        document.getElementById('camera-permission-prompt').classList.add('d-none');
        
        // Start analysis simulation
        startAnalysis();
        
    } catch (err) {
        console.error('Error accessing camera:', err);
        document.getElementById('camera-error').classList.remove('d-none');
        document.getElementById('camera-permission-prompt').classList.add('d-none');
        
        // Fallback to static image for demo
        document.getElementById('camera-fallback').classList.remove('d-none');
    }
}

function stopCamera() {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
    }
}

// Dummy crop data for simulation
const dummyCropData = {
    'wheat': {
        health: 85,
        issues: [
            { type: 'rust', severity: 'low', confidence: 0.75 },
            { type: 'nutrient_deficiency', nutrient: 'nitrogen', severity: 'medium', confidence: 0.82 }
        ],
        growthStage: 'tillering',
        daysToHarvest: 45,
        recommendations: [
            'Apply nitrogen-rich fertilizer',
            'Monitor for rust spread',
            'Check soil moisture levels'
        ]
    },
    'rice': {
        health: 92,
        issues: [
            { type: 'blast', severity: 'low', confidence: 0.68 }
        ],
        growthStage: 'vegetative',
        daysToHarvest: 60,
        recommendations: [
            'Apply fungicide for blast control',
            'Maintain proper water levels',
            'Monitor for leaf folder insects'
        ]
    },
    'corn': {
        health: 78,
        issues: [
            { type: 'armyworm', severity: 'high', confidence: 0.88 },
            { type: 'drought_stress', severity: 'medium', confidence: 0.65 }
        ],
        growthStage: 'silking',
        daysToHarvest: 30,
        recommendations: [
            'Apply appropriate insecticide for armyworm',
            'Irrigate if possible',
            'Consider early harvest if damage is severe'
        ]
    }
};

function getRandomCropData() {
    const crops = Object.keys(dummyCropData);
    const randomCrop = crops[Math.floor(Math.random() * crops.length)];
    return {
        cropType: randomCrop,
        ...dummyCropData[randomCrop]
    };
}

let analysisInterval;

function startAnalysis() {
    // Clear any existing interval
    if (analysisInterval) clearInterval(analysisInterval);
    
    // Initial analysis
    updateAnalysisUI();
    
    // Update analysis every 5 seconds
    analysisInterval = setInterval(updateAnalysisUI, 5000);
}

function updateAnalysisUI() {
    const cropData = getRandomCropData();
    const resultsContainer = document.getElementById('ar-analysis-results');
    
    // Update crop type
    resultsContainer.querySelector('.crop-type').textContent = cropData.cropType.charAt(0).toUpperCase() + cropData.cropType.slice(1);
    
    // Update health meter
    const healthMeter = resultsContainer.querySelector('.health-meter');
    healthMeter.style.width = `${cropData.health}%`;
    healthMeter.setAttribute('aria-valuenow', cropData.health);
    healthMeter.textContent = `${cropData.health}%`;
    
    // Update issues
    const issuesList = resultsContainer.querySelector('.issues-list');
    issuesList.innerHTML = cropData.issues.map(issue => `
        <div class="d-flex align-items-center mb-2">
            <i class="bi bi-exclamation-triangle-fill text-warning me-2"></i>
            <div>
                <strong>${issue.type.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}</strong>
                <div class="text-muted small">
                    Severity: ${issue.severity} • Confidence: ${Math.round(issue.confidence * 100)}%
                    ${issue.nutrient ? `• Nutrient: ${issue.nutrient}` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    // Update recommendations
    const recommendationsList = resultsContainer.querySelector('.recommendations-list');
    recommendationsList.innerHTML = cropData.recommendations.map(rec => `
        <li class="d-flex align-items-start mb-2">
            <i class="bi bi-check-circle-fill text-success me-2 mt-1"></i>
            <span>${rec}</span>
        </li>
    `).join('');
    
    // Show results
    resultsContainer.classList.remove('d-none');
}

// Update AR scanner modal event listeners
document.getElementById('arScannerModal')?.addEventListener('show.bs.modal', function() {
    document.getElementById('camera-permission-prompt').classList.remove('d-none');
    document.getElementById('scanner-ui').classList.add('d-none');
    document.getElementById('camera-error').classList.add('d-none');
    document.getElementById('camera-fallback').classList.add('d-none');
    document.getElementById('ar-analysis-results').classList.add('d-none');
});

document.getElementById('arScannerModal')?.addEventListener('hidden.bs.modal', function() {
    stopCamera();
    if (analysisInterval) clearInterval(analysisInterval);
});

// Add click handler for retry button
document.getElementById('retry-camera')?.addEventListener('click', startCamera);

// Initialize camera when the start scanning button is clicked
document.getElementById('start-scanning')?.addEventListener('click', startCamera);

function setupNavigation() {
    // Show dashboard by default and set active nav link
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById('dashboard').style.display = 'block';
    
    // Set active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#dashboard') {
            link.classList.add('active');
        }
    });
    
    // Handle nav link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Hide all sections
            document.querySelectorAll('.section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show target section
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }
            
            // Update active nav link
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

function setupWeather() {
    const weatherWidget = document.getElementById('weather-widget');
    const requestLocationBtn = document.getElementById('request-location');
    
    if (requestLocationBtn) {
        requestLocationBtn.addEventListener('click', function() {
            getWeatherByLocation();
        });
    }
    
    // Load weather on page load if location is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude);
            },
            error => {
                console.error('Error getting location:', error);
                // Default to New Delhi coordinates if location access is denied
                fetchWeatherData(28.6139, 77.2090);
            }
        );
    } else {
        // Default to New Delhi coordinates if geolocation is not supported
        fetchWeatherData(28.6139, 77.2090);
    }
}

async function fetchWeatherData(lat, lon) {
    const apiKey = 'cad6a2e3e077442e88b194629251409';
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${lat},${lon}&aqi=no`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Weather data not available');
        }
        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        showWeatherError('Failed to fetch weather data. Please try again.');
    }
}

function updateWeatherUI(data) {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;
    
    const iconUrl = data.current.condition.icon.startsWith('http') ? 
        data.current.condition.icon : 
        'https:' + data.current.condition.icon;
    
    weatherWidget.innerHTML = `
        <div class="weather-info">
            <div class="d-flex align-items-center">
                <img src="${iconUrl}" alt="${data.current.condition.text}" class="me-2">
                <div>
                    <h4 class="mb-0">${Math.round(data.current.temp_c)}°C</h4>
                    <small class="text-muted">${data.current.condition.text}</small>
                </div>
            </div>
            <div class="mt-2">
                <small class="text-muted">
                    <i class="bi bi-geo-alt"></i> ${data.location.name}, ${data.location.country}
                </small>
            </div>
        </div>
    `;
}

function showWeatherError(message) {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;
    
    weatherWidget.innerHTML = `
        <div class="alert alert-warning mb-0">
            <i class="bi bi-exclamation-triangle"></i> ${message}
        </div>
    `;
}

function getWeatherByLocation() {
    const weatherWidget = document.getElementById('weather-widget');
    if (!weatherWidget) return;
    
    weatherWidget.innerHTML = `
        <div class="text-center py-2">
            <div class="spinner-border spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <span class="ms-2">Getting weather...</span>
        </div>
    `;
    
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                fetchWeatherData(latitude, longitude);
            },
            error => {
                console.error('Error getting location:', error);
                showWeatherError('Unable to get your location. Using default location.');
                fetchWeatherData(28.6139, 77.2090); // Default to New Delhi
            }
        );
    } else {
        showWeatherError('Geolocation is not supported by your browser.');
        fetchWeatherData(28.6139, 77.2090); // Default to New Delhi
    }
}

function initializeDashboard() {
    // Sample data for recent activities
    const activities = [
        { title: 'Irrigation Completed', time: '2 hours ago', description: 'Field A1 was irrigated' },
        { title: 'Pest Alert', time: '5 hours ago', description: 'Pest detected in Field B2' },
        { title: 'Fertilization Scheduled', time: '1 day ago', description: 'Scheduled for tomorrow' }
    ];
    
    // Update recent activities
    const activitiesList = document.querySelector('.recent-activities');
    if (activitiesList) {
        activitiesList.innerHTML = activities.map(activity => `
            <div class="list-group-item border-0 px-0">
                <div class="d-flex w-100 justify-content-between">
                    <h6 class="mb-1">${activity.title}</h6>
                    <small class="text-muted">${activity.time}</small>
                </div>
                <p class="mb-1 small text-muted">${activity.description}</p>
            </div>
        `).join('');
    }
    
    // Update last updated time
    const lastUpdatedElements = document.querySelectorAll('.last-updated');
    lastUpdatedElements.forEach(el => {
        el.textContent = new Date().toLocaleTimeString();
    });
}