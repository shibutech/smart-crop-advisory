# KrishiSetu - Smart Crop Advisory System for Small and Marginal Farmer's

**Tagline:** *Connecting Farmer's with Technology and Knowledge*

A comprehensive multilingual PWA (Progressive Web App) designed for small and marginal farmers to provide AI-driven crop advisory services, weather-based farming schedules, Augmented Reality (AR) Based Pest Scan, Ai Call/Chat Agent and income maximization through by-product utilization.

## 🌟 Features

### 1. **Multilingual Support** (6 Languages)
- Hindi (हिन्दी)
- English
- Punjabi (ਪੰਜਾਬੀ)
- Chhattisgarhi (छत्तीसगढ़ी)
- Tamil (தமிழ்)
- Bengali (বাংলা)

### 2. **AI-Driven ChatBot**
- Voice-to-voice conversation capability
- Multilingual responses
- Farming queries and solutions
- Speech recognition and synthesis
- Augmented Reality (AR)
- AI Call Agent
- Ai Chat Agent

### 3. **AI-Generated Personalized Farming Calendar**
- Based on farm size, crop type, and soil analysis
- Weather forecast integration
- Seasonal crop recommendations
- Task scheduling and reminders

### 4. **Augmented Reality (AR) Crop Scanning**
- Real-time crop analysis through camera
- No image storage required
- Instant crop health assessment
- Growth stage detection

### 5. **Advisory Delivery System**
- ChatBot interface
- Voice guidance
- WhatsApp delivery simulation
- Offline mode with SMS/IVR tips

### 6. **Offline Mode Support**
- PWA functionality
- Service worker caching
- SMS/IVR tips integration
- Works without internet connectivity
- AI Call agent support

### 7. **By-Product Income Maximizer**
*Examples:*
- Wheat straw → Paper industry, Biofuel, Animal feed
- Rice husk → Construction material, Organic fertilizer
- Sugarcane bagasse → Paper production, Power generation
- Cow dung → Organic fertilizer, Biogas production
- Income calculator with buyer connections

### 8. **Soil Analysis & Pest Detection**
- Comprehensive soil health assessment
- NPK level analysis
- pH and organic matter testing
- AI-powered pest identification
- Treatment recommendations
- Historical tracking

### 9. **Weather Forecast Integration**
- WeatherAPI.com integration (API Key: cad6a2e3e077442e88b194629251409)
- 3-day weather forecast
- Weather-based task recommendations
- Location-based climate data

### 10. **Government Schemes Information**
- PM-KISAN scheme details
- Crop insurance information
- Soil Health Card Scheme
- Irrigation support programs
- Subsidy information

## 🚀 Getting Started

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection (for weather data and initial load)
- Camera access (for AR scanning)
- Microphone access (for voice features)

### Installation
1. Open `index.html` in a web browser
2. Select your preferred language
3. Choose to login, signup, or continue without login
4. Start using the KrishiSetu

### PWA Installation
- The app will prompt for installation on compatible devices
- Can be installed on home screen like a native app
- Works offline (few features) once installed

## 📱 User Journey

1. **Language Selection** - Choose from 6 supported languages
2. **Authentication** - Login, signup, or continue as guest
3. **Dashboard** - Access all features from central hub
4. **Navigation** - Use bottom navigation for main features:
   - Dashboard
   - ChatBot
   - AR Scan
   - Ai Agent
   - Soil Analysis
   - Pest Detection

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Grid and Flexbox
- **Icons**: Font Awesome 6.4.0
- **PWA**: Service Worker, Web App Manifest
- **APIs**: 
  - WeatherAPI.com for weather data
  - Web Speech API for voice features
  - Camera API for AR scanning
- **Storage**: localStorage for offline functionality
- **Responsive Design**: Mobile-first approach

## 🎨 Design Theme

- **Primary Color**: #4CAF50 (Light Green)
- **Secondary Color**: #8BC34A (Light Green variant)
- **Accent Color**: #FFC107 (Amber)
- **Background**: White and Light Gray (#F5F5F5)
- **Theme**: Agriculture-focused with green color palette

## 📂 File Structure

```
KrishiSetu/
├── index.html              # Main entry point with language selection
├── dashboard.html           # Main dashboard with all features
├── soil-analysis.html       # Soil analysis interface
├── pest-detection.html      # Pest detection interface
├── farming-calendar.html    # Farming calendar and by-product features
├── styles.css              # Complete styling for all components
├── app.js                  # Main application JavaScript
├── translations.js         # Multilingual support system
├── manifest.json          # PWA manifest
├── sw.js                   # Service worker for offline functionality
└── README.md               # Project documentation
```

## 🌐 Features in Detail

### Weather Integration
- Real-time weather data from WeatherAPI.com
- 3-day forecast with crop-specific recommendations
- Temperature, humidity, wind speed, and conditions
- Fallback to dummy data if API unavailable

### Voice Features
- Speech-to-text for chatbot queries
- Text-to-speech for responses
- Multilingual voice recognition
- Hands-free operation capability

### Offline Capability
- Service worker caches essential files
- Works without internet after first load
- Local storage for user preferences
- Offline notifications and tips

### Responsive Design
- Mobile-first responsive design
- Touch-friendly interface
- Adaptive layouts for different screen sizes
- Optimized for both mobile and desktop

## 🔒 Data & Privacy

- No personal data stored on servers
- All data stored locally on device
- Weather API only uses location coordinates
- Camera access only for real-time scanning
- No images stored or transmitted

## 🚀 Future Enhancements

- Real AI model integration for crop/pest detection
- WhatsApp Bot integration
- AI Call Agent for offline supports (target: Keypad Phone Users)
- SMS gateway for offline tips
- Real-time marketplace for by-products
- Farmer community features
- Integration with government databases
- IoT sensor data integration

## 🤝 Contributing

This project is designed for educational and demonstration purposes. For improvements or suggestions, please create issues or submit pull requests.

## 📄 License

This project is created for Smart India Hackathon and is intended for educational use.

## 📞 Support

For technical support or queries:
- Email: support_xyz@krishisetu.in (demo)
- Phone: 1800-123-4567 (demo)

## 🏆 Acknowledgments

- Weather data provided by WeatherAPI.com
- Icons by Font Awesome
- Designed for Smart India Hackathon 2024
- Built with ❤️ for Indian farmers

---

**KrishiSetu** - Empowering farmers with smart agriculture solutions through technology and Connecting Farmer's with Technology and Knowledge.

