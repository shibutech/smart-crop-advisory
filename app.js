// KrishiSetu Main Application JavaScript
// Global variables
let currentUser = null;
let currentLocation = null;
let weatherData = null;
let isVoiceEnabled = false;
let speechRecognition = null;
let speechSynthesis = window.speechSynthesis;
let currentCalendarDate = new Date(); // tracks which month is shown on calendar page

// Weather API Configuration
const WEATHER_API_KEY = 'cad6a2e3e077442e88b194629251409';
const WEATHER_API_URL = 'https://api.weatherapi.com/v1';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    
    // Check if coming from authentication (only redirect from landing/index)
    const isAuthenticated = localStorage.getItem('krishiSetuAuth');
    const path = (window.location.pathname || '').toLowerCase();
    const isLanding = path.endsWith('/index.html') || path.endsWith('/krishisetu/') || path.endsWith('/');
    if (isAuthenticated && isLanding) {
        showDashboard();
    }
    
    // Initialize speech recognition if available
    if ('webkitSpeechRecognition' in window) {
        speechRecognition = new webkitSpeechRecognition();
        setupSpeechRecognition();
    } else if ('SpeechRecognition' in window) {
        speechRecognition = new SpeechRecognition();
        setupSpeechRecognition();
    }
    
    // Get user location for weather
    getUserLocation();
    
    // Reset notification badge (removes hardcoded number)
    updateNotificationBadge(0);
    
    // Page-specific bootstrapping
    bootstrapPerPage();
    
    // Update weather data every 30 minutes
    setInterval(refreshWeatherData, 30 * 60 * 1000);
});

// Initialize application
function initializeApp() {
    console.log('KrishiSetu application initialized');
    
    // Apply saved language preference
    const savedLanguage = localStorage.getItem('krishiSetuLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }
    
    // Initialize service worker for PWA
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js')
            .then(registration => console.log('SW registered:', registration))
            .catch(error => console.log('SW registration failed:', error));
    }
}

// Language and Navigation Functions
function selectLanguage(languageCode) {
    changeLanguage(languageCode);
    showAuthScreen();
}

function showLanguageScreen() {
    hideAllScreens();
    document.getElementById('languageScreen').classList.add('active');
}

function showAuthScreen() {
    hideAllScreens();
    document.getElementById('authScreen').classList.add('active');
}

function showLoginForm() {
    hideAllScreens();
    document.getElementById('loginForm').classList.add('active');
}

function showSignupForm() {
    hideAllScreens();
    document.getElementById('signupForm').classList.add('active');
}

function continueWithoutLogin() {
    localStorage.setItem('krishiSetuAuth', 'guest');
    showDashboard();
}

function hideAllScreens() {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
}

function showDashboard() {
    window.location.href = 'dashboard.html';
}

// Authentication Functions
function handleLogin(event) {
    event.preventDefault();
    
    const phone = document.getElementById('loginPhone').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login process
    if (phone && password) {
        const userData = {
            phone: phone,
            name: 'Farmer User',
            farmSize: '5.0',
            location: 'Punjab, India'
        };
        
        localStorage.setItem('krishiSetuAuth', 'authenticated');
        localStorage.setItem('krishiSetuUser', JSON.stringify(userData));
        
        showSuccess('Login successful! Redirecting to dashboard...');
        setTimeout(() => showDashboard(), 2000);
    } else {
        showError('Please fill in all fields');
    }
}

function handleSignup(event) {
    event.preventDefault();
    
    const name = document.getElementById('signupName').value;
    const phone = document.getElementById('signupPhone').value;
    const farmSize = document.getElementById('farmSize').value;
    const location = document.getElementById('location').value;
    const password = document.getElementById('signupPassword').value;
    
    // Simulate signup process
    if (name && phone && farmSize && location && password) {
        const userData = {
            phone: phone,
            name: name,
            farmSize: farmSize,
            location: location
        };
        
        localStorage.setItem('krishiSetuAuth', 'authenticated');
        localStorage.setItem('krishiSetuUser', JSON.stringify(userData));
        
        showSuccess('Account created successfully! Redirecting to dashboard...');
        setTimeout(() => showDashboard(), 2000);
    } else {
        showError('Please fill in all fields');
    }
}

// Dashboard Functions (for dashboard.html)
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove active class from nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Show selected section
    const section = document.getElementById(sectionName + 'Section');
    if (section) {
        section.classList.add('active');
    }
    
    // Add active class to corresponding nav item
    const navItem = document.querySelector(`[onclick="showSection('${sectionName}')"]`);
    if (navItem) {
        navItem.classList.add('active');
    }
    
    // Initialize section-specific functionality
    switch (sectionName) {
        case 'chatbot':
            initializeChatbot();
            break;
        case 'ar':
            initializeAR();
            break;
        case 'soil':
            // Soil analysis is loaded via iframe
            break;
        case 'pest':
            // Pest detection is loaded via iframe
            break;
    }
}

// Weather Functions
function getUserLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                fetchWeatherData();
            },
            (error) => {
                console.log('Location access denied, using default location');
                currentLocation = { latitude: 30.7333, longitude: 76.7794 }; // Chandigarh default
                fetchWeatherData();
            }
        );
    } else {
        currentLocation = { latitude: 30.7333, longitude: 76.7794 }; // Chandigarh default
        fetchWeatherData();
    }
}

async function fetchWeatherData() {
    try {
        // Get current weather and forecast data
        const response = await fetch(
            `${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${currentLocation.latitude},${currentLocation.longitude}&days=7&aqi=yes&alerts=yes`
        );
        
        if (response.ok) {
            weatherData = await response.json();
            updateWeatherDisplay();
            updateDetailedWeatherInfo();
            checkWeatherAlerts();
            renderFarmingCalendar();
            renderByProductSuggestions();
        } else {
            console.log('API response not ok:', response.status);
            // Try with city name fallback
            await fetchWeatherByCity('Chandigarh');
        }
    } catch (error) {
        console.log('Weather API error, trying fallback:', error);
        await fetchWeatherByCity('Chandigarh');
    }
}

// Fetch weather by city name as fallback
async function fetchWeatherByCity(cityName) {
    try {
        const response = await fetch(
            `${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${cityName}&days=7&aqi=yes&alerts=yes`
        );
        
        if (response.ok) {
            weatherData = await response.json();
            updateWeatherDisplay();
            updateDetailedWeatherInfo();
            checkWeatherAlerts();
            renderFarmingCalendar();
            renderByProductSuggestions();
        } else {
            // Use enhanced dummy weather data if API fails
            weatherData = getEnhancedDummyWeatherData();
            updateWeatherDisplay();
            updateDetailedWeatherInfo();
            renderFarmingCalendar();
            renderByProductSuggestions();
        }
    } catch (error) {
        console.log('Fallback weather API error, using dummy data:', error);
        weatherData = getEnhancedDummyWeatherData();
        updateWeatherDisplay();
        updateDetailedWeatherInfo();
        renderFarmingCalendar();
        renderByProductSuggestions();
    }
}

// Search weather by location name
async function searchWeatherByLocation(locationName) {
    if (!locationName || locationName.trim() === '') {
        return;
    }
    
    try {
        const response = await fetch(
            `${WEATHER_API_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${encodeURIComponent(locationName)}&days=7&aqi=yes&alerts=yes`
        );
        
        if (response.ok) {
            weatherData = await response.json();
            updateWeatherDisplay();
            updateDetailedWeatherInfo();
            checkWeatherAlerts();
            renderFarmingCalendar();
            renderByProductSuggestions();
            showSuccess(`Weather updated for ${weatherData.location.name}`);
        } else {
            showError('Location not found. Please try again.');
        }
    } catch (error) {
        console.log('Search weather error:', error);
        showError('Failed to fetch weather data. Please check your connection.');
    }
}

function getEnhancedDummyWeatherData() {
    const today = new Date();
    return {
        location: {
            name: "Chandigarh",
            region: "Chandigarh",
            country: "India",
            lat: 30.73,
            lon: 76.78,
            tz_id: "Asia/Kolkata",
            localtime: today.toISOString()
        },
        current: {
            temp_c: 28,
            temp_f: 82.4,
            condition: {
                text: "Sunny",
                icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                code: 1000
            },
            wind_mph: 7.5,
            wind_kph: 12,
            wind_degree: 220,
            wind_dir: "SW",
            pressure_mb: 1013,
            pressure_in: 29.94,
            precip_mm: 0,
            precip_in: 0,
            humidity: 65,
            cloud: 20,
            feelslike_c: 30,
            feelslike_f: 86,
            vis_km: 10,
            vis_miles: 6,
            uv: 6,
            gust_mph: 9,
            gust_kph: 14.4
        },
        forecast: {
            forecastday: [
                {
                    date: today.toISOString().split('T')[0],
                    day: {
                        maxtemp_c: 28,
                        maxtemp_f: 82.4,
                        mintemp_c: 22,
                        mintemp_f: 71.6,
                        avgtemp_c: 25,
                        avgtemp_f: 77,
                        maxwind_mph: 8.5,
                        maxwind_kph: 13.7,
                        totalprecip_mm: 0,
                        totalprecip_in: 0,
                        avgvis_km: 10,
                        avgvis_miles: 6,
                        avghumidity: 65,
                        daily_will_it_rain: 0,
                        daily_chance_of_rain: 10,
                        daily_will_it_snow: 0,
                        daily_chance_of_snow: 0,
                        condition: {
                            text: "Sunny",
                            icon: "//cdn.weatherapi.com/weather/64x64/day/113.png",
                            code: 1000
                        },
                        uv: 6
                    },
                    astro: {
                        sunrise: "06:15 AM",
                        sunset: "06:45 PM",
                        moonrise: "08:30 PM",
                        moonset: "09:15 AM",
                        moon_phase: "Waxing Crescent",
                        moon_illumination: "45"
                    }
                },
                {
                    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
                    day: {
                        maxtemp_c: 26,
                        maxtemp_f: 78.8,
                        mintemp_c: 20,
                        mintemp_f: 68,
                        avgtemp_c: 23,
                        avgtemp_f: 73.4,
                        maxwind_mph: 12,
                        maxwind_kph: 19.3,
                        totalprecip_mm: 5.2,
                        totalprecip_in: 0.2,
                        avgvis_km: 8,
                        avgvis_miles: 5,
                        avghumidity: 75,
                        daily_will_it_rain: 1,
                        daily_chance_of_rain: 80,
                        daily_will_it_snow: 0,
                        daily_chance_of_snow: 0,
                        condition: {
                            text: "Light rain",
                            icon: "//cdn.weatherapi.com/weather/64x64/day/296.png",
                            code: 1183
                        },
                        uv: 4
                    },
                    astro: {
                        sunrise: "06:16 AM",
                        sunset: "06:44 PM",
                        moonrise: "09:15 PM",
                        moonset: "10:00 AM",
                        moon_phase: "Waxing Crescent",
                        moon_illumination: "52"
                    }
                },
                {
                    date: new Date(Date.now() + 172800000).toISOString().split('T')[0],
                    day: {
                        maxtemp_c: 24,
                        maxtemp_f: 75.2,
                        mintemp_c: 18,
                        mintemp_f: 64.4,
                        avgtemp_c: 21,
                        avgtemp_f: 69.8,
                        maxwind_mph: 10,
                        maxwind_kph: 16.1,
                        totalprecip_mm: 0,
                        totalprecip_in: 0,
                        avgvis_km: 9,
                        avgvis_miles: 5.6,
                        avghumidity: 70,
                        daily_will_it_rain: 0,
                        daily_chance_of_rain: 20,
                        daily_will_it_snow: 0,
                        daily_chance_of_snow: 0,
                        condition: {
                            text: "Partly cloudy",
                            icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
                            code: 1003
                        },
                        uv: 5
                    },
                    astro: {
                        sunrise: "06:17 AM",
                        sunset: "06:43 PM",
                        moonrise: "10:00 PM",
                        moonset: "10:45 AM",
                        moon_phase: "First Quarter",
                        moon_illumination: "58"
                    }
                }
            ]
        },
        alerts: {
            alert: []
        }
    };
}

function updateWeatherDisplay() {
    if (!weatherData) return;
    
    const weatherContent = document.getElementById('weatherContent');
    if (!weatherContent) return;
    
    const current = weatherData.current;
    const forecast = weatherData.forecast.forecastday;
    
    // Update current weather
    const tempElement = weatherContent.querySelector('.temperature');
    if (tempElement) tempElement.textContent = `${current.temp_c}°C`;
    
    const conditionElement = weatherContent.querySelector('.weather-desc');
    if (conditionElement) conditionElement.textContent = translate(getWeatherConditionKey(current.condition.text));
    
    const humidityElement = weatherContent.querySelector('.weather-item:nth-child(1) span:last-child');
    if (humidityElement) humidityElement.textContent = `${current.humidity}%`;
    
    const windElement = weatherContent.querySelector('.weather-item:nth-child(2) span:last-child');
    if (windElement) windElement.textContent = `${current.wind_kph} km/h`;
    
    // Update weather icon
    const iconElement = weatherContent.querySelector('.weather-icon');
    if (iconElement) {
        iconElement.className = 'fas weather-icon ' + getWeatherIcon(current.condition.text);
    }
    
    // Update forecast
    const forecastItems = weatherContent.querySelectorAll('.forecast-item');
    forecast.slice(0, 3).forEach((day, index) => {
        if (forecastItems[index]) {
            const dayName = index === 0 ? 'Today' : index === 1 ? 'Tomorrow' : 'Day 3';
            forecastItems[index].querySelector('.forecast-day').textContent = dayName;
            forecastItems[index].querySelector('.forecast-temp').textContent = 
                `${day.day.maxtemp_c}°/${day.day.mintemp_c}°`;
            
            const forecastIcon = forecastItems[index].querySelector('i');
            if (forecastIcon) {
                forecastIcon.className = 'fas ' + getWeatherIcon(day.day.condition.text);
            }
        }
    });
}

function getWeatherIcon(condition) {
    const iconMap = {
        'Sunny': 'fa-sun',
        'Clear': 'fa-sun',
        'Partly cloudy': 'fa-cloud-sun',
        'Cloudy': 'fa-cloud',
        'Overcast': 'fa-cloud',
        'Light rain': 'fa-cloud-rain',
        'Rain': 'fa-cloud-rain',
        'Heavy rain': 'fa-cloud-showers-heavy',
        'Snow': 'fa-snowflake',
        'Thunderstorm': 'fa-bolt'
    };
    return iconMap[condition] || 'fa-cloud';
}

function getWeatherConditionKey(condition) {
    const conditionMap = {
        'Sunny': 'sunny',
        'Clear': 'sunny',
        'Partly cloudy': 'partlyCloudy',
        'Cloudy': 'cloudy',
        'Light rain': 'rainy',
        'Rain': 'rainy',
        'Heavy rain': 'rainy'
    };
    return conditionMap[condition] || 'cloudy';
}

function refreshWeather() {
    const refreshBtn = document.querySelector('.refresh-btn');
    if (refreshBtn) {
        refreshBtn.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            refreshBtn.style.transform = 'rotate(0deg)';
        }, 1000);
    }
    fetchWeatherData();
}

function refreshWeatherData() {
    fetchWeatherData();
}

// Update detailed weather information
function updateDetailedWeatherInfo() {
    if (!weatherData) return;
    
    const current = weatherData.current;
    const location = weatherData.location;
    
    // Update location information
    const locationElement = document.querySelector('.weather-location');
    if (locationElement) {
        locationElement.textContent = `${location.name}, ${location.region}`;
    }
    
    // Update additional weather parameters
    const pressureElement = document.querySelector('.pressure-value');
    if (pressureElement) pressureElement.textContent = `${current.pressure_mb} mb`;
    
    const visibilityElement = document.querySelector('.visibility-value');
    if (visibilityElement) visibilityElement.textContent = `${current.vis_km} km`;
    
    const uvElement = document.querySelector('.uv-value');
    if (uvElement) uvElement.textContent = getUVIndexDescription(current.uv);
    
    const feelsLikeElement = document.querySelector('.feels-like-value');
    if (feelsLikeElement) feelsLikeElement.textContent = `${current.feelslike_c}°C`;
    
    // Update farming recommendations based on weather
    updateFarmingRecommendations();
}

// Check for weather alerts
function checkWeatherAlerts() {
    if (!weatherData || !weatherData.alerts || !weatherData.alerts.alert) {
        updateNotificationBadge(0);
        return;
    }
    
    const alerts = weatherData.alerts.alert;
    if (alerts.length > 0) {
        const alertContainer = document.querySelector('.weather-alerts');
        if (alertContainer) {
            alertContainer.innerHTML = '';
            alerts.forEach(alert => {
                const alertElement = document.createElement('div');
                alertElement.className = 'weather-alert';
                alertElement.innerHTML = `
                    <div class="alert-icon">
                        <i class="fas fa-exclamation-triangle"></i>
                    </div>
                    <div class="alert-content">
                        <h5>${alert.headline}</h5>
                        <p>${alert.desc}</p>
                        <small>Valid until: ${alert.expires}</small>
                    </div>
                `;
                alertContainer.appendChild(alertElement);
            });
            alertContainer.style.display = 'block';
        }
        updateNotificationBadge(alerts.length);
    } else {
        updateNotificationBadge(0);
    }
}

// Get UV Index description
function getUVIndexDescription(uvIndex) {
    if (uvIndex <= 2) return `${uvIndex} (Low)`;
    if (uvIndex <= 5) return `${uvIndex} (Moderate)`;
    if (uvIndex <= 7) return `${uvIndex} (High)`;
    if (uvIndex <= 10) return `${uvIndex} (Very High)`;
    return `${uvIndex} (Extreme)`;
}

// Update farming recommendations based on weather
function updateFarmingRecommendations() {
    if (!weatherData) return;
    
    const current = weatherData.current;
    const forecast = weatherData.forecast.forecastday[0];
    const recommendations = [];
    
    // Temperature-based recommendations
    if (current.temp_c > 35) {
        recommendations.push({
            type: 'warning',
            icon: 'fa-thermometer-full',
            message: translate('highTempWarning') || 'Very high temperature. Ensure adequate irrigation for crops.'
        });
    } else if (current.temp_c < 5) {
        recommendations.push({
            type: 'warning',
            icon: 'fa-snowflake',
            message: translate('lowTempWarning') || 'Low temperature alert. Protect sensitive crops from frost.'
        });
    }
    
    // Rain-based recommendations
    if (forecast.day.daily_chance_of_rain > 70) {
        recommendations.push({
            type: 'info',
            icon: 'fa-cloud-rain',
            message: translate('rainExpected') || 'Heavy rain expected. Postpone spraying and harvesting activities.'
        });
    } else if (forecast.day.daily_chance_of_rain > 30) {
        recommendations.push({
            type: 'info',
            icon: 'fa-cloud-rain',
            message: translate('lightRainExpected') || 'Light rain possible. Plan indoor activities as backup.'
        });
    }
    
    // Wind-based recommendations
    if (current.wind_kph > 25) {
        recommendations.push({
            type: 'warning',
            icon: 'fa-wind',
            message: translate('highWindWarning') || 'High winds detected. Avoid pesticide spraying.'
        });
    }
    
    // UV-based recommendations
    if (current.uv > 7) {
        recommendations.push({
            type: 'info',
            icon: 'fa-sun',
            message: translate('highUVWarning') || 'High UV levels. Ideal for sun-drying crops but protect workers.'
        });
    }
    
    // Humidity-based recommendations
    if (current.humidity > 85) {
        recommendations.push({
            type: 'warning',
            icon: 'fa-eye',
            message: translate('highHumidityWarning') || 'High humidity may increase fungal disease risk. Monitor crops closely.'
        });
    }
    
    // Update recommendations display
    const recommendationsContainer = document.querySelector('.farming-recommendations');
    if (recommendationsContainer && recommendations.length > 0) {
        recommendationsContainer.innerHTML = recommendations.map(rec => `
            <div class="recommendation-item ${rec.type}">
                <i class="fas ${rec.icon}"></i>
                <span>${rec.message}</span>
            </div>
        `).join('');
        recommendationsContainer.style.display = 'block';
    }
}

// Get weather for current user location from signup
function getLocationWeather() {
    const userData = localStorage.getItem('krishiSetuUser');
    if (userData) {
        const user = JSON.parse(userData);
        if (user.location) {
            searchWeatherByLocation(user.location);
        }
    }
}

// Format weather data for farming calendar integration
function getWeatherForFarmingCalendar() {
    if (!weatherData) return null;
    
    const forecast = weatherData.forecast.forecastday;
    return forecast.map(day => ({
        date: day.date,
        maxTemp: day.day.maxtemp_c,
        minTemp: day.day.mintemp_c,
        condition: day.day.condition.text,
        rainChance: day.day.daily_chance_of_rain,
        rainAmount: day.day.totalprecip_mm,
        windSpeed: day.day.maxwind_kph,
        humidity: day.day.avghumidity,
        uv: day.day.uv,
        sunrise: day.astro.sunrise,
        sunset: day.astro.sunset,
        suitableForFarming: getSuitabilityScore(day.day)
    }));
}

// Calculate farming suitability score based on weather conditions
function getSuitabilityScore(dayData) {
    let score = 100; // Start with perfect score
    
    // Reduce score for extreme temperatures
    if (dayData.maxtemp_c > 40 || dayData.maxtemp_c < 0) score -= 30;
    else if (dayData.maxtemp_c > 35 || dayData.maxtemp_c < 5) score -= 15;
    
    // Reduce score for high rain probability
    if (dayData.daily_chance_of_rain > 80) score -= 25;
    else if (dayData.daily_chance_of_rain > 60) score -= 15;
    
    // Reduce score for high wind
    if (dayData.maxwind_kph > 30) score -= 20;
    else if (dayData.maxwind_kph > 20) score -= 10;
    
    // Reduce score for very high humidity
    if (dayData.avghumidity > 90) score -= 15;
    
    return Math.max(0, Math.min(100, score));
}

// Chatbot Functions
function initializeChatbot() {
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages && chatMessages.children.length <= 1) {
        // Add welcome message in current language
        addBotMessage(translate('welcomeMessage'));
    }
}

function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        addUserMessage(message);
        chatInput.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            const response = generateBotResponse(message);
            addBotMessage(response);
        }, 1000);
    }
}

function addUserMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message user-message';
    messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function addBotMessage(message) {
    const chatMessages = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message bot-message';
    messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
    
    // Speak the message if voice is enabled
    if (isVoiceEnabled && speechSynthesis) {
        speakText(message);
    }
}

function generateBotResponse(userMessage) {
    const responses = {
        en: {
            greeting: ["Hello! How can I help you with your farming today?", "Hi there! What farming question do you have?"],
            weather: ["The weather today is perfect for farming activities. Temperature is 28°C with good humidity levels."],
            crops: ["For your soil type, I recommend wheat and corn. They should give you good yields this season."],
            pest: ["I can help you identify pests. Please use the AR scanning feature or upload an image of the affected plant."],
            fertilizer: ["Based on your soil analysis, you need phosphorus fertilizer. Apply 20-25 kg/acre of DAP."],
            default: ["I understand you're asking about farming. Can you be more specific? I can help with weather, crops, pests, or soil analysis."]
        },
        hi: {
            greeting: ["नमस्ते! आज मैं आपकी खेती में कैसे मदद कर सकता हूँ?", "हैलो! आपका कौन सा खेती का सवाल है?"],
            weather: ["आज का मौसम खेती के लिए बहुत अच्छा है। तापमान 28°C है और नमी का स्तर भी ठीक है।"],
            crops: ["आपकी मिट्टी के लिए मैं गेहूँ और मक्का की सिफारिश करता हूँ। इस सीजन में अच्छी पैदावार होगी।"],
            pest: ["मैं कीटों की पहचान में आपकी मदद कर सकता हूँ। कृपया AR स्कैनिंग का उपयोग करें या प्रभावित पौधे की तस्वीर अपलोड करें।"],
            fertilizer: ["आपके मिट्टी के विश्लेषण के अनुसार, आपको फास्फोरस उर्वरक की जरूरत है। DAP 20-25 किग्रा प्रति एकड़ डालें।"],
            default: ["मैं समझ गया कि आप खेती के बारे में पूछ रहे हैं। क्या आप और स्पष्ट बता सकते हैं? मैं मौसम, फसल, कीट, या मिट्टी विश्लेषण में मदद कर सकता हूँ।"]
        }
    };
    
    const currentLang = currentLanguage || 'en';
    const langResponses = responses[currentLang] || responses.en;
    
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('नमस्ते')) {
        return getRandomResponse(langResponses.greeting);
    } else if (lowerMessage.includes('weather') || lowerMessage.includes('मौसम')) {
        return getRandomResponse(langResponses.weather);
    } else if (lowerMessage.includes('crop') || lowerMessage.includes('फसल')) {
        return getRandomResponse(langResponses.crops);
    } else if (lowerMessage.includes('pest') || lowerMessage.includes('कीट')) {
        return getRandomResponse(langResponses.pest);
    } else if (lowerMessage.includes('fertilizer') || lowerMessage.includes('खाद')) {
        return getRandomResponse(langResponses.fertilizer);
    } else {
        return getRandomResponse(langResponses.default);
    }
}

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// Voice Functions
function toggleVoice() {
    const voiceBtn = document.getElementById('voiceBtn');
    
    if (!speechRecognition) {
        alert('Voice recognition not supported in this browser');
        return;
    }
    
    if (isVoiceEnabled) {
        speechRecognition.stop();
        voiceBtn.classList.remove('active');
        isVoiceEnabled = false;
    } else {
        speechRecognition.start();
        voiceBtn.classList.add('active');
        isVoiceEnabled = true;
    }
}

function toggleSpeaker() {
    const speakerBtn = document.getElementById('speakerBtn');
    
    if (speechSynthesis.speaking) {
        speechSynthesis.cancel();
        speakerBtn.classList.remove('active');
    } else {
        speakerBtn.classList.add('active');
    }
}

function setupSpeechRecognition() {
    speechRecognition.continuous = false;
    speechRecognition.interimResults = false;
    speechRecognition.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
    
    speechRecognition.onresult = function(event) {
        const transcript = event.results[0][0].transcript;
        document.getElementById('chatInput').value = transcript;
        sendMessage();
    };
    
    speechRecognition.onend = function() {
        const voiceBtn = document.getElementById('voiceBtn');
        if (voiceBtn) voiceBtn.classList.remove('active');
        isVoiceEnabled = false;
    };
}

function speakText(text) {
    if (speechSynthesis) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = currentLanguage === 'hi' ? 'hi-IN' : 'en-US';
        utterance.rate = 0.8;
        speechSynthesis.speak(utterance);
    }
}

// AR Functions
function initializeAR() {
    console.log('AR initialized');
}

function startAR() {
    const video = document.getElementById('video');
    
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                video.srcObject = stream;
                video.play();
                
                // Simulate AR scanning
                setTimeout(() => {
                    showARResults();
                    stopAR();
                }, 5000);
            })
            .catch(function(error) {
                console.log('Camera access denied:', error);
                alert('Camera access required for AR scanning');
            });
    }
}

function stopAR() {
    const video = document.getElementById('video');
    if (video.srcObject) {
        video.srcObject.getTracks().forEach(track => track.stop());
        video.srcObject = null;
    }
}

function showARResults() {
    const resultsDiv = document.getElementById('arResults');
    if (resultsDiv) {
        resultsDiv.style.display = 'block';
        resultsDiv.innerHTML = `
            <h4>Crop Analysis Results</h4>
            <div class="ar-result-item">
                <strong>Crop Health:</strong> Good (85%)
            </div>
            <div class="ar-result-item">
                <strong>Growth Stage:</strong> Flowering
            </div>
            <div class="ar-result-item">
                <strong>Recommendation:</strong> Continue current care routine
            </div>
        `;
    }
}

// Modal Functions
function showAddCropModal() {
    document.getElementById('addCropModal').style.display = 'flex';
}

function showScheduleModal() {
    alert('Schedule task functionality coming soon!');
}

function viewReports() {
    alert('Reports functionality coming soon!');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

function openWeatherForecastModal() {
    const existing = document.getElementById('forecastIframeModal');
    if (!existing) {
        const modalHtml = `
        <div class="modal" id="forecastIframeModal">
            <div class="modal-content large">
                <div class="modal-header">
                    <h3>7-Day Weather Forecast</h3>
                    <button class="modal-close" onclick="closeModal('forecastIframeModal')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <iframe class="modal-iframe" src="weather-forecast.html" title="Extended Forecast" loading="lazy"></iframe>
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }
    document.getElementById('forecastIframeModal').style.display = 'flex';
}

// Utility Functions
function showSuccess(message) {
    showNotification(message, 'success');
}

function showError(message) {
    showNotification(message, 'error');
}

function showNotification(message, type) {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `;
    
    if (type === 'success') {
        notification.style.background = '#4CAF50';
    } else {
        notification.style.background = '#F44336';
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Event Listeners
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const activeElement = document.activeElement;
        
        // Send chat message on Enter
        if (activeElement.id === 'chatInput') {
            sendMessage();
        }
    }
});

// Click outside modal to close
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
    }
});

// Update language when changed
window.addEventListener('languageChanged', function(event) {
    const newLang = event.detail.language;
    
    // Update speech recognition language
    if (speechRecognition) {
        speechRecognition.lang = newLang === 'hi' ? 'hi-IN' : 'en-US';
    }
    
    // Refresh chatbot welcome message
    if (document.getElementById('chatMessages')) {
        initializeChatbot();
    }
});

// PWA Install Event
let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
    // Show install banner or button
    showInstallBanner();
});

function showInstallBanner() {
    // Create install banner
    const banner = document.createElement('div');
    banner.id = 'installBanner';
    banner.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 1rem;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        z-index: 1000;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
    `;
    
    banner.innerHTML = `
        <div>
            <strong>Install KrishiSetu</strong><br>
            <small>Get the full app experience</small>
        </div>
        <div>
            <button onclick="installPWA()" style="background: white; color: #4CAF50; border: none; padding: 0.5rem 1rem; border-radius: 4px; margin-right: 0.5rem; cursor: pointer;">Install</button>
            <button onclick="dismissInstallBanner()" style="background: transparent; color: white; border: 1px solid white; padding: 0.5rem; border-radius: 4px; cursor: pointer;">×</button>
        </div>
    `;
    
    document.body.appendChild(banner);
}

function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            }
            deferredPrompt = null;
        });
    }
    dismissInstallBanner();
}

function dismissInstallBanner() {
    const banner = document.getElementById('installBanner');
    if (banner) {
        banner.remove();
    }
}

// Farming Calendar Functions
function generateFarmingCalendar() {
    const calendar = {
        'January': [
            { task: 'Prepare fields for Rabi harvest', icon: 'fa-tractor' },
            { task: 'Apply fertilizer to wheat crops', icon: 'fa-seedling' }
        ],
        'February': [
            { task: 'Harvest wheat and barley', icon: 'fa-cut' },
            { task: 'Prepare for summer crops', icon: 'fa-sun' }
        ],
        'March': [
            { task: 'Plant summer vegetables', icon: 'fa-carrot' },
            { task: 'Start irrigation for summer crops', icon: 'fa-tint' }
        ],
        // Add more months as needed
    };
    
    return calendar;
}

// By-Product Income Maximizer
function getByProductSuggestions() {
    return [
        {
            crop: 'Wheat',
            byProduct: 'Wheat Straw',
            uses: ['Paper industry', 'Biofuel', 'Animal feed'],
            income: '₹2,000-3,000 per ton'
        },
        {
            crop: 'Rice',
            byProduct: 'Rice Husk',
            uses: ['Construction material', 'Biofuel', 'Organic fertilizer'],
            income: '₹1,500-2,500 per ton'
        },
        {
            crop: 'Sugarcane',
            byProduct: 'Bagasse',
            uses: ['Paper production', 'Biofuel', 'Building material'],
            income: '₹3,000-4,000 per ton'
        }
    ];
}

// Government Schemes Data
function getGovernmentSchemes() {
    return [
        {
            name: 'PM-KISAN',
            description: 'Direct income support to farmers',
            benefit: '₹6,000 per year',
            eligibility: 'Small and marginal farmers',
            link: '#'
        },
        {
            name: 'Pradhan Mantri Fasal Bima Yojana',
            description: 'Crop insurance scheme',
            benefit: 'Up to 90% coverage',
            eligibility: 'All farmers',
            link: '#'
        },
        {
            name: 'Soil Health Card Scheme',
            description: 'Free soil testing',
            benefit: 'Soil nutrient analysis',
            eligibility: 'All farmers',
            link: '#'
        },
        {
            name: 'Pradhan Mantri Krishi Sinchai Yojana',
            description: 'Irrigation support',
            benefit: 'Up to 55% subsidy',
            eligibility: 'All categories of farmers',
            link: '#'
        }
    ];
}

// Location search functions
function handleLocationSearch(event) {
    if (event.key === 'Enter') {
        const locationInput = document.getElementById('locationSearch');
        const location = locationInput.value.trim();
        if (location) {
            searchWeatherByLocation(location);
        }
    }
}

function searchCurrentLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                currentLocation = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };
                fetchWeatherData();
                showSuccess('Location updated successfully!');
            },
            (error) => {
                showError('Location access denied. Please enter location manually.');
            }
        );
    } else {
        showError('Geolocation not supported by this browser.');
    }
}

// Enhanced weather display functions
function showExtendedForecast() {
    if (!weatherData || !weatherData.forecast) return;
    
    const forecastData = weatherData.forecast.forecastday;
    let forecastHtml = '<div class="extended-forecast">';
    
    forecastData.forEach((day, index) => {
        const date = new Date(day.date);
        const dayName = index === 0 ? 'Today' : 
                       index === 1 ? 'Tomorrow' : 
                       date.toLocaleDateString('en', { weekday: 'short' });
        
        const suitability = getSuitabilityScore(day.day);
        const suitabilityClass = suitability >= 80 ? 'excellent' : 
                               suitability >= 60 ? 'good' : 
                               suitability >= 40 ? 'fair' : 'poor';
        
        forecastHtml += `
            <div class="forecast-day-detailed">
                <div class="forecast-header">
                    <h5>${dayName}</h5>
                    <span class="forecast-date">${date.toLocaleDateString()}</span>
                </div>
                <div class="forecast-weather">
                    <i class="fas ${getWeatherIcon(day.day.condition.text)}"></i>
                    <span class="temp-range">${day.day.maxtemp_c}°/${day.day.mintemp_c}°</span>
                    <span class="condition">${day.day.condition.text}</span>
                </div>
                <div class="forecast-details">
                    <span><i class="fas fa-cloud-rain"></i> ${day.day.daily_chance_of_rain}%</span>
                    <span><i class="fas fa-wind"></i> ${day.day.maxwind_kph} km/h</span>
                    <span><i class="fas fa-eye"></i> ${day.day.avghumidity}%</span>
                </div>
                <div class="farming-suitability ${suitabilityClass}">
                    <span>Farming Suitability: ${suitability}%</span>
                </div>
                <div class="astro-info">
                    <span><i class="fas fa-sun"></i> ${day.astro.sunrise}</span>
                    <span><i class="fas fa-moon"></i> ${day.astro.sunset}</span>
                </div>
            </div>
        `;
    });
    
    forecastHtml += '</div>';
    
    // Display in modal or dedicated section
    const modalContent = `
        <div class="modal" id="forecastModal">
            <div class="modal-content large">
                <div class="modal-header">
                    <h3>7-Day Weather Forecast</h3>
                    <button class="modal-close" onclick="closeModal('forecastModal')">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="modal-body">
                    ${forecastHtml}
                </div>
            </div>
        </div>
    `;
    
    // Add modal to document if it doesn't exist
    if (!document.getElementById('forecastModal')) {
        document.body.insertAdjacentHTML('beforeend', modalContent);
    }
    
    document.getElementById('forecastModal').style.display = 'flex';
}

// Notification badge helper
function updateNotificationBadge(count) {
    const badge = document.querySelector('.notification-badge');
    if (!badge) return;
    if (count && count > 0) {
        badge.textContent = count;
        badge.style.display = 'flex';
    } else {
        badge.textContent = '';
        badge.style.display = 'none';
    }
}

// Personalized Farming Calendar rendering
function renderFarmingCalendar() {
    const container = document.getElementById('farmingCalendar');
    if (!container) return;
    const forecast = getWeatherForFarmingCalendar();
    const profile = loadUserProfile();
    const userStr = localStorage.getItem('krishiSetuUser');
    const user = userStr ? JSON.parse(userStr) : {};
    const crop = profile.cropType || user.cropType || 'Wheat';
    const farmSize = profile.farmSize || user.farmSize || '5.0';
    
    if (!forecast) {
        container.innerHTML = '<p>Calendar will appear once weather data loads.</p>';
        return;
    }
    
    const items = forecast.slice(0, 7).map(day => {
        const suitable = day.suitableForFarming;
        let task = 'General field monitoring';
        if (day.rainChance > 70) task = 'Avoid spraying; plan drainage checks';
        else if (day.rainChance > 40) task = 'Weeding and soil aeration';
        else if (day.windSpeed > 25) task = 'Stake/support plants; avoid spraying';
        else if (suitable >= 80) task = `Irrigation and nutrient application for ${crop}`;
        else if (suitable >= 60) task = `Field operations and pest scouting`;
        return {
            date: day.date,
            condition: day.condition,
            task,
            suitable
        };
    });
    
    container.innerHTML = `
        <div class="calendar-meta">Crop: <strong>${crop}</strong> • Farm size: <strong>${farmSize} acres</strong></div>
        <div class="calendar-grid">
            ${items.map(i => `
                <div class="calendar-item suitability-${i.suitable >= 80 ? 'high' : i.suitable >= 60 ? 'med' : 'low'}">
                    <div class="calendar-date">${new Date(i.date).toLocaleDateString()}</div>
                    <div class="calendar-condition"><i class="fas fa-cloud"></i> ${i.condition}</div>
                    <div class="calendar-task">${i.task}</div>
                    <div class="calendar-score">Suitability: ${i.suitable}%</div>
                </div>
            `).join('')}
        </div>
    `;
}

// By-Product Income Maximizer rendering
function renderByProductSuggestions() {
    const container = document.getElementById('byProductSuggestions');
    if (!container) return;
    const userStr = localStorage.getItem('krishiSetuUser');
    const user = userStr ? JSON.parse(userStr) : {};
    const crop = user.cropType || 'Wheat';
    const suggestions = getByProductSuggestions();
    
    const filtered = suggestions.filter(s => s.crop === crop);
    const list = (filtered.length ? filtered : suggestions).map(s => `
        <div class="byproduct-item">
            <div class="byproduct-title">${s.crop} — ${s.byProduct}</div>
            <div class="byproduct-uses">Uses: ${s.uses.join(', ')}</div>
            <div class="byproduct-income">Potential: ${s.income}</div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="byproduct-list">${list}</div>
    `;
}

// Profile helpers
function loadUserProfile() {
    try {
        const raw = localStorage.getItem('krishiSetuUserProfile');
        return raw ? JSON.parse(raw) : {};
    } catch { return {}; }
}

function saveUserProfile(profile) {
    const existing = loadUserProfile();
    const merged = { ...existing, ...profile };
    localStorage.setItem('krishiSetuUserProfile', JSON.stringify(merged));
    // also mirror a few useful fields into krishiSetuUser for backward compatibility
    const userRaw = localStorage.getItem('krishiSetuUser');
    const userObj = userRaw ? JSON.parse(userRaw) : {};
    if (merged.farmSize) userObj.farmSize = merged.farmSize;
    if (merged.location) userObj.location = merged.location;
    if (merged.cropType) userObj.cropType = merged.cropType;
    localStorage.setItem('krishiSetuUser', JSON.stringify(userObj));
    showSuccess('Profile saved successfully');
}

function bootstrapPerPage() {
    const path = (window.location.pathname || '').toLowerCase();
    if (path.endsWith('/calendar.html')) {
        // Attach month navigation
        const prevBtn = document.getElementById('prevMonthBtn');
        const nextBtn = document.getElementById('nextMonthBtn');
        if (prevBtn) prevBtn.addEventListener('click', () => changeCalendarMonth(-1));
        if (nextBtn) nextBtn.addEventListener('click', () => changeCalendarMonth(1));
        // Initial render
        renderMonthlyCalendar(currentCalendarDate);
        // Re-render when weather data becomes available
        if (weatherData) renderMonthlyCalendar(currentCalendarDate);
    } else if (path.endsWith('/profile.html')) {
        // populate form fields if present
        const profile = loadUserProfile();
        const fields = ['farmerName','location','farmSize','cropType','soilType','irrigation','phone'];
        fields.forEach(id => {
            const el = document.getElementById(id);
            if (el && profile[id] !== undefined) el.value = profile[id];
        });
        const form = document.getElementById('profileForm');
        if (form) {
            form.addEventListener('submit', function(e){
                e.preventDefault();
                const payload = {
                    farmerName: document.getElementById('farmerName')?.value || '',
                    location: document.getElementById('location')?.value || '',
                    farmSize: document.getElementById('farmSize')?.value || '',
                    cropType: document.getElementById('cropType')?.value || '',
                    soilType: document.getElementById('soilType')?.value || '',
                    irrigation: document.getElementById('irrigation')?.value || '',
                    phone: document.getElementById('phone')?.value || ''
                };
                saveUserProfile(payload);
            });
        }
    }
}

function changeCalendarMonth(delta) {
    const d = new Date(currentCalendarDate);
    d.setMonth(d.getMonth() + delta);
    currentCalendarDate = d;
    renderMonthlyCalendar(currentCalendarDate);
}

function renderMonthlyCalendar(dateObj) {
    const monthGrid = document.getElementById('monthGrid');
    const monthLabel = document.getElementById('monthLabel');
    const meta = document.getElementById('calendarMeta');
    if (!monthGrid || !monthLabel) return;
    
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDayOfWeek = firstDay.getDay(); // 0=Sun
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Header
    const monthName = firstDay.toLocaleString('en', { month: 'long' });
    monthLabel.textContent = `${monthName} ${year}`;
    
    // Meta (profile summary)
    if (meta) {
        const profile = loadUserProfile();
        const crop = profile.cropType || 'Wheat';
        const size = profile.farmSize || '5.0';
        meta.innerHTML = `Crop: <strong>${crop}</strong> • Farm size: <strong>${size} acres</strong>`;
    }
    
    // Build grid (6 weeks x 7 days = 42 cells)
    const totalCells = 42;
    let html = '';
    for (let cell = 0; cell < totalCells; cell++) {
        const dayNum = cell - startDayOfWeek + 1; // 1..daysInMonth
        if (dayNum < 1 || dayNum > daysInMonth) {
            html += `<div class="day-cell empty"></div>`;
            continue;
        }
        const cellDate = new Date(year, month, dayNum);
        const dateStr = cellDate.toISOString().split('T')[0];
        const suitability = getSuitabilityForDate(dateStr);
        const suitabilityClass = suitability == null ? 'no' : (suitability >= 80 ? 'high' : suitability >= 60 ? 'med' : 'low');
        const task = getSuggestedTaskForSuitability(suitability);
        html += `
            <div class="day-cell suitability-${suitabilityClass}" title="${task}">
                <div class="date-number">${dayNum}</div>
                <div class="day-task">${task}</div>
                ${suitability != null ? `<div class="day-score">${suitability}%</div>` : ''}
            </div>
        `;
    }
    monthGrid.innerHTML = html;
}

function getSuitabilityForDate(dateStr) {
    if (!weatherData || !weatherData.forecast || !weatherData.forecast.forecastday) return null;
    const match = weatherData.forecast.forecastday.find(d => d.date === dateStr);
    if (!match) return null; // no forecast for that day
    return getSuitabilityScore(match.day);
}

function getSuggestedTaskForSuitability(suitability) {
    if (suitability == null) return 'No forecast data';
    if (suitability >= 80) return 'Irrigation & nutrient application';
    if (suitability >= 60) return 'Field operations & pest scouting';
    if (suitability >= 40) return 'Weeding & soil aeration';
    return 'Avoid spraying; plan maintenance';
}

// Export functions for use in other scripts
window.KrishiSetu = {
    selectLanguage,
    showAuthScreen,
    showLoginForm,
    showSignupForm,
    continueWithoutLogin,
    handleLogin,
    handleSignup,
    showSection,
    refreshWeather,
    sendMessage,
    toggleVoice,
    toggleSpeaker,
    startAR,
    stopAR,
    showAddCropModal,
    closeModal,
    generateFarmingCalendar,
    getByProductSuggestions,
    getGovernmentSchemes,
    searchWeatherByLocation,
    handleLocationSearch,
    searchCurrentLocation,
    showExtendedForecast,
    openWeatherForecastModal,
    getWeatherForFarmingCalendar,
    updateDetailedWeatherInfo,
    renderFarmingCalendar,
    renderByProductSuggestions,
    loadUserProfile,
    saveUserProfile,
    renderMonthlyCalendar,
    changeCalendarMonth
};
