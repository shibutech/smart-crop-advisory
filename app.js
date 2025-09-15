// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Register service worker for PWA functionality
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/sw.js')
                .then(registration => {
                    console.log('ServiceWorker registration successful');
                })
                .catch(err => {
                    console.error('ServiceWorker registration failed: ', err);
                });
        });
    }

    // Initialize i18next for translations
    i18next.init({
        lng: localStorage.getItem('selectedLanguage') || 'en',
        fallbackLng: 'en',
        debug: true, // Enable debug mode to see what's happening
        resources: {
            en: {
                translation: {
                    appTitle: 'Kisan Sathi',
                    appTagline: 'Your Smart Farming Companion',
                    selectLanguage: 'Select Your Language',
                    navDashboard: 'Dashboard',
                    navSoilAnalysis: 'Soil Analysis',
                    navPestDetection: 'Pest Detection',
                    navWeather: 'Weather',
                    navMarket: 'Market Prices',
                    dashboardTitle: 'Farmer Dashboard',
                    soilAnalysisTitle: 'Soil Health Analysis',
                    pestDetectionTitle: 'Pest & Disease Detection',
                    weatherTitle: 'Weather Update',
                    weatherForecast: 'Weather Forecast',
                    marketPricesTitle: 'Market Prices',
                    fetchingWeather: 'Fetching weather data...',
                    refresh: 'Refresh',
                    humidity: 'Humidity',
                    wind: 'Wind',
                    pressure: 'Pressure',
                    lastUpdated: 'Last updated',
                    retry: 'Retry',
                    errorLoadingWeather: 'Failed to load weather data. Please check your connection and try again.',
                    soilAnalysis: 'Soil Analysis',
                    soilAnalysisDesc: 'Get detailed analysis of your soil health and recommendations',
                    pestDetection: 'Pest Detection',
                    pestDetectionDesc: 'Identify pests and diseases in your crops',
                    marketPrices: 'Market Prices',
                    marketPricesDesc: 'Check current market prices for your produce',
                    quickLinks: 'Quick Links',
                    home: 'Home',
                    contactUs: 'Contact Us',
                    email: 'support@kisansathi.com',
                    phone: '+91 98765 43210',
                    location: 'New Delhi, India',
                    followUs: 'Follow Us',
                    downloadApp: 'Download App',
                    allRightsReserved: 'All Rights Reserved',
                    privacyPolicy: 'Privacy Policy',
                    termsOfService: 'Terms of Service',
                    faq: 'FAQ',
                    crops: {
                        wheat: 'Wheat',
                        rice: 'Rice',
                        soybean: 'Soybean',
                        cotton: 'Cotton',
                        maize: 'Maize',
                        sugarcane: 'Sugarcane'
                    },
                    markets: {
                        delhi: 'Delhi',
                        mumbai: 'Mumbai',
                        bengaluru: 'Bengaluru',
                        hyderabad: 'Hyderabad',
                        indore: 'Indore',
                        ahmedabad: 'Ahmedabad'
                    },
                    pests: {
                        aphids: 'Aphids',
                        whiteflies: 'Whiteflies',
                        spidermites: 'Spider Mites',
                        mealybugs: 'Mealybugs',
                        thrips: 'Thrips'
                    },
                    pestDescriptions: {
                        aphids: 'Small sap-sucking insects that can damage plants',
                        whiteflies: 'Tiny insects that feed on plant sap and can transmit diseases',
                        spidermites: 'Tiny spider-like insects that feed on plant sap and can cause yellowing or bronzing of leaves',
                        mealybugs: 'Small insects covered in a white, cottony substance that feed on plant sap',
                        thrips: 'Tiny insects that feed on plant sap and can cause stunted growth or distorted leaves'
                    },
                    treatments: {
                        aphids: [
                            'Use neem oil spray',
                            'Introduce natural predators like ladybugs',
                            'Remove heavily infested leaves'
                        ],
                        whiteflies: [
                            'Use yellow sticky traps',
                            'Spray insecticidal soap',
                            'Remove heavily infested leaves'
                        ],
                        spidermites: [
                            'Use neem oil spray',
                            'Increase water spray to wash off mites',
                            'Remove heavily infested leaves'
                        ],
                        mealybugs: [
                            'Use insecticidal soap',
                            'Introduce natural predators like ladybugs',
                            'Remove heavily infested leaves'
                        ],
                        thrips: [
                            'Use neem oil spray',
                            'Increase water spray to wash off thrips',
                            'Remove heavily infested leaves'
                        ]
                    },
                    soilTypes: {
                        clay: 'Clay',
                        silt: 'Silt',
                        sand: 'Sand',
                        loam: 'Loam'
                    },
                    moistureLevels: {
                        low: 'Low',
                        medium: 'Medium',
                        high: 'High'
                    },
                    fertilizers: {
                        npk: 'NPK 10-26-26',
                        urea: 'Urea',
                        dap: 'DAP'
                    },
                    applicationRates: {
                        npk: '50 kg/acre',
                        urea: '20 kg/acre',
                        dap: '30 kg/acre'
                    },
                    tips: {
                        maintainMoisture: 'Maintain soil moisture at optimal levels',
                        addOrganicCompost: 'Add organic compost to improve soil structure',
                        testSoilRegularly: 'Test soil every 6 months for better results'
                    }
                }
            },
            hi: {
                translation: {
                    appTitle: 'किसान साथी',
                    appTagline: 'आपका स्मार्ट खेती सहयोगी',
                    selectLanguage: 'अपनी भाषा चुनें',
                    navDashboard: 'डैशबोर्ड',
                    navSoilAnalysis: 'मिट्टी विश्लेषण',
                    navPestDetection: 'कीट पहचान',
                    navWeather: 'मौसम',
                    navMarket: 'बाजार भाव',
                    dashboardTitle: 'किसान डैशबोर्ड',
                    soilAnalysisTitle: 'मिट्टी स्वास्थ्य विश्लेषण',
                    pestDetectionTitle: 'कीट एवं रोग पहचान',
                    weatherTitle: 'मौसम अपडेट',
                    weatherForecast: 'मौसम पूर्वानुमान',
                    marketPricesTitle: 'बाजार भाव',
                    fetchingWeather: 'मौसम का डेटा लोड किया जा रहा है...',
                    refresh: 'ताज़ा करें',
                    humidity: 'नमी',
                    wind: 'हवा',
                    pressure: 'दबाव',
                    lastUpdated: 'अंतिम अपडेट',
                    retry: 'पुनः प्रयास करें',
                    errorLoadingWeather: 'मौसम का डेटा लोड करने में विफल। कृपया अपना कनेक्शन जांचें और पुनः प्रयास करें।',
                    soilAnalysis: 'मिट्टी विश्लेषण',
                    soilAnalysisDesc: 'अपने मिट्टी के स्वास्थ्य और सिफारिशों का विस्तृत विश्लेषण प्राप्त करें',
                    pestDetection: 'कीट पहचान',
                    pestDetectionDesc: 'अपनी फसलों में कीटों और रोगों की पहचान करें',
                    marketPrices: 'बाजार भाव',
                    marketPricesDesc: 'अपने उत्पादों के वर्तमान बाजार भाव देखें',
                    quickLinks: 'त्वरित लिंक',
                    home: 'होम',
                    contactUs: 'संपर्क करें',
                    email: 'समर्थन@kisansathi.com',
                    phone: '+91 98765 43210',
                    location: 'नई दिल्ली, भारत',
                    followUs: 'हमें फॉलो करें',
                    downloadApp: 'ऐप डाउनलोड करें',
                    allRightsReserved: 'सर्वाधिकार सुरक्षित',
                    privacyPolicy: 'गोपनीयता नीति',
                    termsOfService: 'सेवा की शर्तें',
                    faq: 'सामान्य प्रश्न',
                    crops: {
                        wheat: 'गेहूं',
                        rice: 'चावल',
                        soybean: 'सोयाबीन',
                        cotton: 'कपास',
                        maize: 'मक्का',
                        sugarcane: 'गन्ना'
                    },
                    markets: {
                        delhi: 'दिल्ली',
                        mumbai: 'मुंबई',
                        bengaluru: 'बेंगलुरु',
                        hyderabad: 'हैदराबाद',
                        indore: 'इंदौर',
                        ahmedabad: 'अहमदाबाद'
                    },
                    pests: {
                        aphids: 'एफिड्स',
                        whiteflies: 'सफेद मक्खियां',
                        spidermites: 'स्पाइडर माइट्स',
                        mealybugs: 'मीली बग्स',
                        thrips: 'थ्रिप्स'
                    },
                    pestDescriptions: {
                        aphids: 'छोटे सैप-चूसने वाले कीट जो पौधों को नुकसान पहुंचा सकते हैं',
                        whiteflies: 'छोटे कीट जो पौधों के सैप पर फीड करते हैं और बीमारियों को प्रसारित कर सकते हैं',
                        spidermites: 'छोटे स्पाइडर जैसे कीट जो पौधों के सैप पर फीड करते हैं और पत्तियों को पीला या भूरा कर सकते हैं',
                        mealybugs: 'छोटे कीट जो पौधों के सैप पर फीड करते हैं और सफेद, कपास जैसे पदार्थ से ढके होते हैं',
                        thrips: 'छोटे कीट जो पौधों के सैप पर फीड करते हैं और पौधों की वृद्धि को रोक सकते हैं या पत्तियों को विकृत कर सकते हैं'
                    },
                    treatments: {
                        aphids: [
                            'नीम का तेल स्प्रे का उपयोग करें',
                            'प्राकृतिक शिकारियों को पेश करें जैसे लेडी बग्स',
                            'भारी रूप से संक्रमित पत्तियों को हटा दें'
                        ],
                        whiteflies: [
                            'पीले चिपचिपे फंदे का उपयोग करें',
                            'कीटनाशक साबुन का स्प्रे करें',
                            'भारी रूप से संक्रमित पत्तियों को हटा दें'
                        ],
                        spidermites: [
                            'नीम का तेल स्प्रे का उपयोग करें',
                            'माइट्स को धोने के लिए पानी का स्प्रे बढ़ाएं',
                            'भारी रूप से संक्रमित पत्तियों को हटा दें'
                        ],
                        mealybugs: [
                            'कीटनाशक साबुन का उपयोग करें',
                            'प्राकृतिक शिकारियों को पेश करें जैसे लेडी बग्स',
                            'भारी रूप से संक्रमित पत्तियों को हटा दें'
                        ],
                        thrips: [
                            'नीम का तेल स्प्रे का उपयोग करें',
                            'थ्रिप्स को धोने के लिए पानी का स्प्रे बढ़ाएं',
                            'भारी रूप से संक्रमित पत्तियों को हटा दें'
                        ]
                    },
                    soilTypes: {
                        clay: 'मिट्टी',
                        silt: 'सिल्ट',
                        sand: 'रेत',
                        loam: 'लोम'
                    },
                    moistureLevels: {
                        low: 'कम',
                        medium: 'मध्यम',
                        high: 'उच्च'
                    },
                    fertilizers: {
                        npk: 'एनपीके 10-26-26',
                        urea: 'यूरिया',
                        dap: 'डीएपी'
                    },
                    applicationRates: {
                        npk: '50 किग्रा/एकड़',
                        urea: '20 किग्रा/एकड़',
                        dap: '30 किग्रा/एकड़'
                    },
                    tips: {
                        maintainMoisture: 'मिट्टी की नमी को इष्टतम स्तर पर बनाए रखें',
                        addOrganicCompost: 'मिट्टी की संरचना में सुधार के लिए जैविक खाद डालें',
                        testSoilRegularly: 'बेहतर परिणामों के लिए हर 6 महीने में मिट्टी की जांच करें'
                    }
                }
            },
            pa: {
                translation: {
                    appTitle: 'ਕਿਸਾਨ ਸਾਥੀ',
                    appTagline: 'ਤੁਹਾਡਾ ਸਮਾਰਟ ਖੇਤੀ ਸਹਿਯੋਗੀ',
                    selectLanguage: 'ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ',
                    navDashboard: 'ਡੈਸ਼ਬੋਰਡ',
                    navSoilAnalysis: 'ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ',
                    navPestDetection: 'ਕੀੜੇ ਦੀ ਪਛਾਣ',
                    navWeather: 'ਮੌਸਮ',
                    navMarket: 'ਮਾਰਕੀਟ ਦੀਆਂ ਕੀਮਤਾਂ',
                    dashboardTitle: 'ਕਿਸਾਨ ਡੈਸ਼ਬੋਰਡ',
                    soilAnalysisTitle: 'ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ',
                    pestDetectionTitle: 'ਕੀੜੇ ਅਤੇ ਰੋਗ ਦੀ ਪਛਾਣ',
                    weatherTitle: 'ਮੌਸਮ ਅਪਡੇਟ',
                    weatherForecast: 'ਮੌਸਮ ਦਾ ਪੂਰਵਾਨੁਮਾਨ',
                    marketPricesTitle: 'ਮਾਰਕੀਟ ਦੀਆਂ ਕੀਮਤਾਂ',
                    fetchingWeather: 'ਮੌਸਮ ਦਾ ਡੇਟਾ ਲੋਡ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ...',
                    refresh: 'ਤਾਜ਼ਾ ਕਰੋ',
                    humidity: 'ਨਮੀ',
                    wind: 'ਹਵਾ',
                    pressure: 'ਦਬਾਅ',
                    lastUpdated: 'ਆਖਰੀ ਅੱਪਡੇਟ',
                    retry: 'ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ',
                    errorLoadingWeather: 'ਮੌਸਮ ਦਾ ਡੇਟਾ ਲੋਡ ਕਰਨ ਵਿੱਚ ਅਸਫਲ। ਕਿਰਪਾ ਕਰਕੇ ਆਪਣਾ ਕਨੈਕਸ਼ਨ ਜਾਂਚੋ ਅਤੇ ਮੁੜ ਕੋਸ਼ਿਸ਼ ਕਰੋ।',
                    soilAnalysis: 'ਮਿੱਟੀ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ',
                    soilAnalysisDesc: 'ਆਪਣੀ ਮਿੱਟੀ ਦੀ ਸਿਹਤ ਅਤੇ ਸਿਫਾਰਸ਼ਾਂ ਦਾ ਵਿਸਤ੍ਰਿਤ ਵਿਸ਼ਲੇਸ਼ਣ ਪ੍ਰਾਪਤ ਕਰੋ',
                    pestDetection: 'ਕੀੜੇ ਦੀ ਪਛਾਣ',
                    pestDetectionDesc: 'ਆਪਣੀਆਂ ਫਸਲਾਂ ਵਿੱਚ ਕੀੜਿਆਂ ਅਤੇ ਰੋਗਾਂ ਦੀ ਪਛਾਣ ਕਰੋ',
                    marketPrices: 'ਮਾਰਕੀਟ ਦੀਆਂ ਕੀਮਤਾਂ',
                    marketPricesDesc: 'ਆਪਣੀਆਂ ਫਸਲਾਂ ਦੀਆਂ ਵਰਤਮਾਨ ਮਾਰਕੀਟ ਕੀਮਤਾਂ ਦੇਖੋ',
                    quickLinks: 'ਤੇਜ਼ ਲਿੰਕ',
                    home: 'ਹੋਮ',
                    contactUs: 'ਸਾਡੇ ਨਾਲ ਸੰਪਰਕ ਕਰੋ',
                    email: 'ਸਹਾਇਤਾ@kisansathi.com',
                    phone: '+91 98765 43210',
                    location: 'ਨਵੀਂ ਦਿੱਲੀ, ਭਾਰਤ',
                    followUs: 'ਸਾਨੂੰ ਫਾਲੋ ਕਰੋ',
                    downloadApp: 'ਐਪ ਡਾਊਨਲੋਡ ਕਰੋ',
                    allRightsReserved: 'ਸਾਰੇ ਹੱਕ ਸੁਰੱਖਿਅਤ',
                    privacyPolicy: 'ਪਰਾਈਵੇਸੀ ਨੀਤੀ',
                    termsOfService: 'ਸੇਵਾ ਦੀਆਂ ਸ਼ਰਤਾਂ',
                    faq: 'ਅਕਸਰ ਪੁੱਛੇ ਜਾਣ ਵਾਲੇ ਸਵਾਲ',
                    crops: {
                        wheat: 'ਕਣਕ',
                        rice: 'ਚਾਵਲ',
                        soybean: 'ਸੋਯਾਬੀਨ',
                        cotton: 'ਕਪਾਹ',
                        maize: 'ਮੱਕੀ',
                        sugarcane: 'ਗੰਨਾ'
                    },
                    markets: {
                        delhi: 'ਦਿੱਲੀ',
                        mumbai: 'ਮੁੰਬਈ',
                        bengaluru: 'ਬੰਗਲੌਰ',
                        hyderabad: 'ਹੈਦਰਾਬਾਦ',
                        indore: 'ਇੰਦੌਰ',
                        ahmedabad: 'ਅਹਿਮਦਾਬਾਦ'
                    },
                    pests: {
                        aphids: 'ਐਫਿਡਜ਼',
                        whiteflies: 'ਸਫੈਦ ਮੱਖੀਆਂ',
                        spidermites: 'ਸਪਾਈਡਰ ਮਾਈਟਸ',
                        mealybugs: 'ਮੀਲੀ ਬੱਗਸ',
                        thrips: 'ਥ੍ਰਿਪਸ'
                    },
                    pestDescriptions: {
                        aphids: 'ਛੋਟੇ ਸੈਪ-ਚੂਸਣ ਵਾਲੇ ਕੀੜੇ ਜੋ ਪੌਦਿਆਂ ਨੂੰ ਨੁਕਸਾਨ ਪਹੁੰਚਾ ਸਕਦੇ ਹਨ',
                        whiteflies: 'ਛੋਟੇ ਕੀੜੇ ਜੋ ਪੌਦਿਆਂ ਦੇ ਸੈਪ ਉੱਤੇ ਫੀਡ ਕਰਦੇ ਹਨ ਅਤੇ ਬਿਮਾਰੀਆਂ ਨੂੰ ਫੈਲਾ ਸਕਦੇ ਹਨ',
                        spidermites: 'ਛੋਟੇ ਸਪਾਈਡਰ ਵਰਗੇ ਕੀੜੇ ਜੋ ਪੌਦਿਆਂ ਦੇ ਸੈਪ ਉੱਤੇ ਫੀਡ ਕਰਦੇ ਹਨ ਅਤੇ ਪੱਤਿਆਂ ਨੂੰ ਪੀਲਾ ਜਾਂ ਭੁਰਾ ਕਰ ਸਕਦੇ ਹਨ',
                        mealybugs: 'ਛੋਟੇ ਕੀੜੇ ਜੋ ਪੌਦਿਆਂ ਦੇ ਸੈਪ ਉੱਤੇ ਫੀਡ ਕਰਦੇ ਹਨ ਅਤੇ ਸਫੈਦ, ਕਪਾਹ ਵਰਗੇ ਪਦਾਰਥ ਨਾਲ ਢੱਕੇ ਹੁੰਦੇ ਹਨ',
                        thrips: 'ਛੋਟੇ ਕੀੜੇ ਜੋ ਪੌਦਿਆਂ ਦੇ ਸੈਪ ਉੱਤੇ ਫੀਡ ਕਰਦੇ ਹਨ ਅਤੇ ਪੌਦਿਆਂ ਦੀ ਵਾਧਾ ਨੂੰ ਰੋਕ ਸਕਦੇ ਹਨ ਜਾਂ ਪੱਤਿਆਂ ਨੂੰ ਵਿਗਾੜ ਸਕਦੇ ਹਨ'
                    },
                    treatments: {
                        aphids: [
                            'ਨੀਮ ਦਾ ਤੇਲ ਸਪ੍ਰੇ ਕਰੋ',
                            'ਕੁਦਰਤੀ ਸ਼ਿਕਾਰੀਆਂ ਨੂੰ ਪੇਸ਼ ਕਰੋ ਜਿਵੇਂ ਕਿ ਲੇਡੀ ਬੱਗਸ',
                            'ਭਾਰੀ ਤੌਰ ਤੇ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਨੂੰ ਹਟਾ ਦਿਓ'
                        ],
                        whiteflies: [
                            'ਪੀਲੇ ਚਿਪਚਿਪੇ ਫੰਦੇ ਦੀ ਵਰਤੋਂ ਕਰੋ',
                            'ਕੀਟਨਾਸ਼ਕ ਸਾਬਣ ਦਾ ਸਪ੍ਰੇ ਕਰੋ',
                            'ਭਾਰੀ ਤੌਰ ਤੇ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਨੂੰ ਹਟਾ ਦਿਓ'
                        ],
                        spidermites: [
                            'ਨੀਮ ਦਾ ਤੇਲ ਸਪ੍ਰੇ ਕਰੋ',
                            'ਮਾਈਟਸ ਨੂੰ ਧੋਣ ਲਈ ਪਾਣੀ ਦਾ ਸਪ੍ਰੇ ਵਧਾਓ',
                            'ਭਾਰੀ ਤੌਰ ਤੇ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਨੂੰ ਹਟਾ ਦਿਓ'
                        ],
                        mealybugs: [
                            'ਕੀਟਨਾਸ਼ਕ ਸਾਬਣ ਦੀ ਵਰਤੋਂ ਕਰੋ',
                            'ਕੁਦਰਤੀ ਸ਼ਿਕਾਰੀਆਂ ਨੂੰ ਪੇਸ਼ ਕਰੋ ਜਿਵੇਂ ਕਿ ਲੇਡੀ ਬੱਗਸ',
                            'ਭਾਰੀ ਤੌਰ ਤੇ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਨੂੰ ਹਟਾ ਦਿਓ'
                        ],
                        thrips: [
                            'ਨੀਮ ਦਾ ਤੇਲ ਸਪ੍ਰੇ ਕਰੋ',
                            'ਥ੍ਰਿਪਸ ਨੂੰ ਧੋਣ ਲਈ ਪਾਣੀ ਦਾ ਸਪ੍ਰੇ ਵਧਾਓ',
                            'ਭਾਰੀ ਤੌਰ ਤੇ ਸੰਕਰਮਿਤ ਪੱਤਿਆਂ ਨੂੰ ਹਟਾ ਦਿਓ'
                        ]
                    },
                    soilTypes: {
                        clay: 'ਮਿੱਟੀ',
                        silt: 'ਸਿਲਟ',
                        sand: 'ਰੇਤ',
                        loam: 'ਲੋਮ'
                    },
                    moistureLevels: {
                        low: 'ਘੱਟ',
                        medium: 'ਮੱਧਮ',
                        high: 'ਉੱਚ'
                    },
                    fertilizers: {
                        npk: 'ਐਨਪੀਕੇ 10-26-26',
                        urea: 'ਯੂਰੀਆ',
                        dap: 'ਡੀਏਪੀ'
                    },
                    applicationRates: {
                        npk: '50 ਕਿਲੋ/ਏਕੜ',
                        urea: '20 ਕਿਲੋ/ਏਕੜ',
                        dap: '30 ਕਿਲੋ/ਏਕੜ'
                    },
                    tips: {
                        maintainMoisture: 'ਮਿੱਟੀ ਦੀ ਨਮੀ ਨੂੰ ਆਪਟੀਮਲ ਪੱਧਰ ਤੇ ਰੱਖੋ',
                        addOrganicCompost: 'ਮਿੱਟੀ ਦੀ ਬਣਤਰ ਵਿੱਚ ਸੁਧਾਰ ਲਈ ਜੈਵਿਕ ਖਾਦ ਪਾਓ',
                        testSoilRegularly: 'ਬਿਹਤਰ ਨਤੀਜਿਆਂ ਲਈ ਹਰ 6 ਮਹੀਨੇ ਬਾਅਦ ਮਿੱਟੀ ਦੀ ਜਾਂਚ ਕਰੋ'
                    }
                }
            }
        }
    }).then(function() {
        // Initialize app components after translations are loaded
        initNavigation();
        initLanguageSwitcher();
        updateContent();
        
        // Initialize other components
        initWeatherWidget();
        initSoilAnalysis();
        initPestDetection();
        initMarketPrices();
        initVoiceSupport();
        initFeedbackSystem();
    }).catch(function(err) {
        console.error('Error initializing i18next:', err);
    });
});

// Update the UI with the current language
function updateContent() {
    console.log('Updating content with language:', i18next.language);
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = i18next.t(key, { defaultValue: element.textContent });
        if (translation) {
            if (element.tagName === 'INPUT' && element.type === 'text') {
                element.placeholder = translation;
            } else if (element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translation);
            } else if (element.hasAttribute('title')) {
                element.setAttribute('title', translation);
            } else {
                element.textContent = translation;
            }
        }
    });
    
    // Update dynamic content
    updateMarketPrices();
    updatePestDetectionUI();
    updateSoilAnalysisUI();
}

// Set the application language
function setLanguage(lang) {
    console.log('Setting language to:', lang);
    
    // Save the selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);
    
    // Change the language in i18next
    i18next.changeLanguage(lang, (err, t) => {
        if (err) {
            console.error('Error changing language:', err);
            return;
        }
        
        // Update the UI with the new language
        updateContent();
        
        // Update the language selector
        const languageSelect = document.getElementById('languageSelect');
        if (languageSelect) {
            languageSelect.value = lang;
        }
        
        // Update the HTML lang attribute
        document.documentElement.lang = lang;
    });
}

// Initialize language switcher
function initLanguageSwitcher() {
    console.log('Initializing language switcher');
    
    // Handle language selection from the initial screen
    const languageOptions = document.querySelectorAll('.language-option');
    const languageScreen = document.getElementById('languageScreen');
    const app = document.getElementById('app');
    
    // Check if language is already selected
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
        console.log('Found saved language:', savedLanguage);
        if (languageScreen) languageScreen.classList.add('hidden');
        if (app) app.classList.remove('hidden');
        
        // Ensure the language is set in i18next
        if (i18next.language !== savedLanguage) {
            i18next.changeLanguage(savedLanguage);
        }
    }
    
    // Add click handlers for language selection
    languageOptions.forEach(option => {
        option.addEventListener('click', (e) => {
            const lang = e.currentTarget.getAttribute('data-lang');
            console.log('Language option clicked:', lang);
            setLanguage(lang);
            
            // Hide language screen and show app
            if (languageScreen) languageScreen.classList.add('hidden');
            if (app) app.classList.remove('hidden');
        });
    });
    
    // Handle language selector in the app
    const languageSelect = document.getElementById('languageSelect');
    if (languageSelect) {
        // Set the current language
        languageSelect.value = savedLanguage || 'en';
        
        // Add change event listener
        languageSelect.addEventListener('change', (e) => {
            console.log('Language select changed to:', e.target.value);
            setLanguage(e.target.value);
        });
    }
}

// Navigation and routing
function initNavigation() {
    // Handle navigation between different sections
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = e.target.getAttribute('href').substring(1);
            showSection(sectionId);
        });
    });
    
    // Show the initial section based on URL hash
    const initialSection = window.location.hash.substring(1) || 'dashboard';
    showSection(initialSection);
}

function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('main > section').forEach(section => {
        section.style.display = 'none';
        section.classList.remove('active');
    });
    
    // Show the selected section
    const section = document.getElementById(sectionId);
    if (section) {
        section.style.display = 'block';
        section.classList.add('active');
    }
    
    // Update active nav link
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
        }
    });
    
    // Update URL
    window.location.hash = sectionId;
}

// WeatherAPI.com configuration
const WEATHER_API_KEY = 'cad6a2e3e077442e88b194629251409';
const WEATHER_API_BASE_URL = 'https://api.weatherapi.com/v1';
let isWeatherLoading = false;

// Weather integration
async function initWeatherWidget() {
    if (isWeatherLoading) return;
    
    isWeatherLoading = true;
    
    try {
        // Show loading state
        const weatherWidget = document.getElementById('weather-widget');
        const weatherContainer = document.getElementById('weather-container');
        
        if (weatherWidget) {
            weatherWidget.innerHTML = `
                <div class="weather-loading">
                    <div class="spinner"></div>
                    <p data-i18n="fetchingWeather">Fetching weather data...</p>
                </div>
            `;
            // Update translations for the loading message
            updateContent();
        }

        let position;
        if (navigator.geolocation) {
            position = await new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(resolve, reject, {
                    enableHighAccuracy: true,
                    timeout: 10000,
                    maximumAge: 0
                });
            });
        }

        if (position && position.coords) {
            const { latitude, longitude } = position.coords;
            await updateWeatherWidget(latitude, longitude);
        } else {
            // Default to New Delhi if geolocation is not available or denied
            console.log('Using default location: New Delhi');
            await updateWeatherWidget(28.6139, 77.2090);
        }
    } catch (error) {
        console.error('Error initializing weather widget:', error);
        showWeatherError(error);
    } finally {
        isWeatherLoading = false;
    }
}

async function updateWeatherWidget(lat, lon) {
    try {
        // Show loading state in the main weather container if available
        const weatherContainer = document.getElementById('weather-container');
        if (weatherContainer) {
            weatherContainer.innerHTML = `
                <div class="weather-loading">
                    <div class="spinner"></div>
                    <p data-i18n="fetchingWeather">Fetching weather data...</p>
                </div>
            `;
            updateContent(); // Update translations
        }

        // Fetch current weather and forecast in parallel
        const [currentResponse, forecastResponse] = await Promise.all([
            fetch(`${WEATHER_API_BASE_URL}/current.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&aqi=no`),
            fetch(`${WEATHER_API_BASE_URL}/forecast.json?key=${WEATHER_API_KEY}&q=${lat},${lon}&days=5&aqi=no&alerts=yes`)
        ]);

        if (!currentResponse.ok) {
            throw new Error(`Weather API error: ${currentResponse.status} ${currentResponse.statusText}`);
        }
        if (!forecastResponse.ok) {
            throw new Error(`Forecast API error: ${forecastResponse.status} ${forecastResponse.statusText}`);
        }

        const currentData = await currentResponse.json();
        const forecastData = await forecastResponse.json();

        updateCurrentWeather(currentData);
        updateWeatherForecast(forecastData);
        updateWeatherAlerts(forecastData);
    } catch (error) {
        console.error('Error updating weather widget:', error);
        showWeatherError(error);
    }
}

function updateCurrentWeather(data) {
    if (!data || !data.current || !data.location) return;

    const { current, location } = data;
    
    // Update location
    const locationElement = document.getElementById('location-name');
    if (locationElement) {
        locationElement.textContent = `${location.name}, ${location.region}, ${location.country}`;
    }

    // Update current weather
    const tempElement = document.getElementById('current-temp');
    if (tempElement) {
        tempElement.textContent = Math.round(current.temp_c);
    }

    // Update weather description
    const descElement = document.getElementById('weather-description');
    if (descElement && current.condition) {
        descElement.textContent = current.condition.text;
    }

    // Update weather icon
    const iconElement = document.querySelector('.weather-icon');
    if (iconElement) {
        iconElement.innerHTML = `<img src="https:${current.condition.icon}" alt="${current.condition.text}">`;
    }

    // Update weather details
    const humidityElement = document.getElementById('humidity');
    if (humidityElement) humidityElement.textContent = current.humidity;

    const windElement = document.getElementById('wind-speed');
    if (windElement) windElement.textContent = current.wind_kph;

    const pressureElement = document.getElementById('pressure');
    if (pressureElement) pressureElement.textContent = current.pressure_mb;

    // Update last updated time
    const lastUpdated = document.getElementById('last-updated');
    if (lastUpdated) {
        const lastUpdatedTime = new Date(current.last_updated_epoch * 1000).toLocaleTimeString();
        lastUpdated.textContent = `Last updated: ${lastUpdatedTime}`;
    }
}

function updateWeatherForecast(data) {
    if (!data || !data.forecast) return;

    const forecastContainer = document.getElementById('weather-forecast');
    if (!forecastContainer) return;

    // Clear previous forecast
    forecastContainer.innerHTML = '';

    // Add forecast header
    const forecastHeader = document.createElement('h3');
    forecastHeader.textContent = '5-Day Forecast';
    forecastHeader.style.marginBottom = '1rem';
    forecastContainer.appendChild(forecastHeader);

    const forecastDays = document.createElement('div');
    forecastDays.className = 'forecast-days';

    // Get next 5 days forecast
    data.forecast.forecastday.slice(0, 5).forEach(day => {
        const date = new Date(day.date);
        const dayName = date.toLocaleDateString(i18next.language, { weekday: 'short' });
        
        const dayElement = document.createElement('div');
        dayElement.className = 'forecast-day';
        dayElement.innerHTML = `
            <div class="forecast-day-name">${dayName}</div>
            <div class="forecast-icon">
                <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
            </div>
            <div class="forecast-temp">
                <span class="forecast-temp-max">${Math.round(day.day.maxtemp_c)}°</span>
                <span class="forecast-temp-min">${Math.round(day.day.mintemp_c)}°</span>
            </div>
            <div class="forecast-precip">
                <span class="material-icons">opacity</span>
                ${day.day.daily_chance_of_rain}%
            </div>
        `;
        forecastDays.appendChild(dayElement);
    });

    forecastContainer.appendChild(forecastDays);
}

function updateWeatherAlerts(data) {
    if (!data || !data.alerts || !data.alerts.alert) return;

    const alertsContainer = document.getElementById('weather-alerts');
    if (!alertsContainer) return;

    // Clear previous alerts
    alertsContainer.innerHTML = '';

    // Add alerts header
    const alertsHeader = document.createElement('h3');
    alertsHeader.textContent = 'Weather Alerts';
    alertsHeader.style.margin = '2rem 0 1rem';
    alertsContainer.appendChild(alertsHeader);

    // Add each alert
    data.alerts.alert.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = 'alert-item';
        alertElement.innerHTML = `
            <div class="alert-header">
                <span class="material-icons">warning</span>
                <strong>${alert.headline || 'Weather Alert'}</strong>
            </div>
            <div class="alert-message">${alert.desc || 'No details available'}</div>
            <div class="alert-period">
                <small>${new Date(alert.effective).toLocaleString()} - ${new Date(alert.expires).toLocaleString()}</small>
            </div>
        `;
        alertsContainer.appendChild(alertElement);
    });
}

function showWeatherError(error) {
    console.error('Weather error:', error);
    
    const errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.innerHTML = `
        <span class="material-icons">error_outline</span>
        <p data-i18n="errorLoadingWeather">Failed to load weather data. Please check your connection and try again.</p>
        <button id="retry-weather" class="btn btn-primary">
            <span class="material-icons">refresh</span>
            <span data-i18n="retry">Retry</span>
        </button>
    `;

    const weatherWidget = document.getElementById('weather-widget') || document.getElementById('weather-container');
    if (weatherWidget) {
        weatherWidget.innerHTML = '';
        weatherWidget.appendChild(errorMessage);
        
        // Add retry button event listener
        const retryButton = document.getElementById('retry-weather');
        if (retryButton) {
            retryButton.addEventListener('click', initWeatherWidget);
        }
        
        // Update translations
        updateContent();
    }
}

// Add event listener for manual refresh
const refreshButton = document.getElementById('refresh-weather');
if (refreshButton) {
    refreshButton.addEventListener('click', initWeatherWidget);
}

// Soil Analysis and Fertilizer Recommendation
function initSoilAnalysis() {
    const soilForm = document.getElementById('soil-analysis-form');
    if (soilForm) {
        soilForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const soilType = document.getElementById('soil-type').value;
            const phLevel = document.getElementById('ph-level').value;
            const moisture = document.getElementById('moisture').value;
            
            // In a real app, you would send this data to a backend service
            const recommendation = generateSoilRecommendation(soilType, phLevel, moisture);
            displaySoilRecommendation(recommendation);
        });
    }
}

function generateSoilRecommendation(soilType, phLevel, moisture) {
    // This is a simple mock implementation
    return {
        fertilizer: 'NPK 10-26-26',
        quantity: '50 kg/acre',
        schedule: 'Apply before sowing and during growth stage',
        tips: [
            'Maintain soil moisture at optimal levels',
            'Add organic compost to improve soil structure',
            'Test soil every 6 months for better results'
        ]
    };
}

// Pest and Disease Detection
function initPestDetection() {
    const imageUpload = document.getElementById('pest-image-upload');
    if (imageUpload) {
        imageUpload.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                analyzePestImage(file);
            }
        });
    }
}

function analyzePestImage(file) {
    // In a real app, you would send the image to a machine learning model
    const reader = new FileReader();
    reader.onload = (e) => {
        // Display the uploaded image
        const preview = document.getElementById('pest-image-preview');
        if (preview) {
            preview.src = e.target.result;
            preview.style.display = 'block';
        }
        
        // Simulate API call
        setTimeout(() => {
            displayPestAnalysis({
                pestName: 'Aphids',
                confidence: '85%',
                description: 'Small sap-sucking insects that can damage plants',
                treatment: [
                    'Use neem oil spray',
                    'Introduce natural predators like ladybugs',
                    'Remove heavily infested leaves'
                ]
            });
        }, 1500);
    };
    reader.readAsDataURL(file);
}

// Market Price Tracking
function initMarketPrices() {
    // In a real app, you would fetch this from an API
    const mockPrices = [
        { crop: 'Wheat', price: '₹2,100/quintal', market: 'Delhi' },
        { crop: 'Rice', price: '₹1,950/quintal', market: 'Mumbai' },
        { crop: 'Soybean', price: '₹5,200/quintal', market: 'Indore' },
        { crop: 'Cotton', price: '₹6,500/quintal', market: 'Ahmedabad' },
    ];
    
    updateMarketPrices(mockPrices);
}

function updateMarketPrices(prices) {
    const container = document.getElementById('market-prices');
    if (container) {
        container.innerHTML = `
            <h3>Current Market Prices</h3>
            <table>
                <tr>
                    <th>Crop</th>
                    <th>Price</th>
                    <th>Market</th>
                </tr>
                ${prices.map(item => `
                    <tr>
                        <td>${item.crop}</td>
                        <td>${item.price}</td>
                        <td>${item.market}</td>
                    </tr>
                `).join('')}
            </table>
            <button id="refresh-prices">Refresh Prices</button>
        `;
    }
}

// Voice Support
function initVoiceSupport() {
    const voiceButton = document.getElementById('voice-command');
    if (voiceButton && 'webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        
        voiceButton.addEventListener('click', () => {
            recognition.start();
            voiceButton.textContent = 'Listening...';
            
            recognition.onresult = (event) => {
                const command = event.results[0][0].transcript.toLowerCase();
                handleVoiceCommand(command);
                voiceButton.textContent = 'Tap to Speak';
            };
            
            recognition.onerror = () => {
                voiceButton.textContent = 'Tap to Speak';
            };
        });
    }
}

function handleVoiceCommand(command) {
    // Simple command handling
    if (command.includes('weather')) {
        showSection('weather');
    } else if (command.includes('soil') || command.includes('fertilizer')) {
        showSection('soil-analysis');
    } else if (command.includes('pest') || command.includes('disease')) {
        showSection('pest-detection');
    } else if (command.includes('price') || command.includes('market')) {
        showSection('market-prices');
    }
}

// Feedback System
function initFeedbackSystem() {
    const feedbackForm = document.getElementById('feedback-form');
    if (feedbackForm) {
        feedbackForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const feedback = document.getElementById('feedback-text').value;
            const rating = document.querySelector('input[name="rating"]:checked')?.value || 0;
            
            // In a real app, you would send this to your backend
            console.log('Feedback submitted:', { feedback, rating });
            
            // Show thank you message
            const feedbackContainer = document.getElementById('feedback-container');
            if (feedbackContainer) {
                feedbackContainer.innerHTML = `
                    <h3>Thank You!</h3>
                    <p>Your feedback has been submitted successfully.</p>
                    <button onclick="showSection('dashboard')">Back to Dashboard</button>
                `;
            }
        });
    }
}

// Helper function to update UI elements with translations
function updateTranslations(lang) {
    document.documentElement.lang = lang;
    // Update all elements with data-i18n attributes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = i18next.t(key);
    });
}

// Export functions that need to be available globally
window.showSection = showSection;
