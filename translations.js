// Multilingual Support System for KrishiSetu
const translations = {
    en: {
        // Navigation and General
        tagline: "Where Farmers Efforts Meet Everyone's Progress",
        selectLanguage: "Select Your Language",
        welcomeBack: "Welcome Back",
        authDescription: "Join thousands of farmers improving their crop yields",
        login: "Login",
        signup: "Sign Up",
        continueWithoutLogin: "Continue without Login",
        dashboard: "Dashboard",
        chatbot: "ChatBot",
        arScan: "AR Scan",
        soilAnalysis: "Soil Analysis",
        pestDetection: "Pest Detection",
        
        // Form Fields
        phoneNumber: "Phone Number",
        password: "Password",
        fullName: "Full Name",
        farmSize: "Farm Size (in acres)",
        location: "Location",
        dontHaveAccount: "Don't have an account?",
        alreadyHaveAccount: "Already have an account?",
        
        // Dashboard
        welcomeFarmer: "Welcome, Farmer!",
        todayTip: "Today's farming tip: Check soil moisture before watering",
        weatherForecast: "Weather Forecast",
        sunny: "Sunny",
        humidity: "Humidity",
        windSpeed: "Wind Speed",
        cropHealth: "Crop Health",
        healthy: "Healthy",
        excellent: "Excellent",
        good: "Good",
        quickActions: "Quick Actions",
        addNewCrop: "Add New Crop",
        scheduleTask: "Schedule Task",
        viewReports: "View Reports",
        recentActivities: "Recent Activities",
        seedsPlanted: "Seeds planted in Field A",
        irrigationCompleted: "Irrigation completed",
        fertilizeApplied: "Fertilizer applied to crops",
        govSchemes: "Government Schemes",
        pmKisanDesc: "Income support scheme for farmers",
        cropInsuranceDesc: "Protect your crops from natural disasters",
        
        // ChatBot
        aiAssistant: "AI Assistant",
        welcomeMessage: "Hello! I'm your farming assistant. How can I help you today?",
        typeMessage: "Type your message...",
        
        // AR Scanning
        arScanning: "AR Crop Scanning",
        pointCamera: "Point camera at your crop",
        startScanning: "Start Scanning",
        stopScanning: "Stop Scanning",
        
        // Forms
        cropType: "Crop Type",
        fieldArea: "Field Area (acres)",
        plantingDate: "Planting Date",
        addCrop: "Add Crop",
        
        // Footer
        footerDescription: "Empowering farmers with smart agriculture solutions",
        quickLinks: "Quick Links",
        aboutUs: "About Us",
        support: "Support",
        privacy: "Privacy Policy",
        contact: "Contact",
        
        // Soil Analysis
        soilType: "Soil Type",
        phLevel: "pH Level",
        nitrogen: "Nitrogen",
        phosphorus: "Phosphorus",
        potassium: "Potassium",
        recommendations: "Recommendations",
        
        // Pest Detection
        pestFound: "Pest Found",
        pestType: "Pest Type",
        severity: "Severity",
        treatment: "Treatment",
        
        // Weather conditions
        cloudy: "Cloudy",
        rainy: "Rainy",
        partlyCloudy: "Partly Cloudy"
    },
    
    hi: {
        // नेवीगेशन और सामान्य
        tagline: "जहाँ किसानों के प्रयास सभी की प्रगति से मिलते हैं",
        selectLanguage: "अपनी भाषा चुनें",
        welcomeBack: "वापस स्वागत है",
        authDescription: "हजारों किसानों के साथ जुड़ें जो अपनी फसल की पैदावार बढ़ा रहे हैं",
        login: "लॉग इन",
        signup: "साइन अप",
        continueWithoutLogin: "बिना लॉगिन के जारी रखें",
        dashboard: "डैशबोर्ड",
        chatbot: "चैटबॉट",
        arScan: "एआर स्कैन",
        soilAnalysis: "मिट्टी विश्लेषण",
        pestDetection: "कीट पहचान",
        
        // फॉर्म फील्ड
        phoneNumber: "फोन नंबर",
        password: "पासवर्ड",
        fullName: "पूरा नाम",
        farmSize: "खेत का आकार (एकड़ में)",
        location: "स्थान",
        dontHaveAccount: "खाता नहीं है?",
        alreadyHaveAccount: "पहले से खाता है?",
        
        // डैशबोर्ड
        welcomeFarmer: "स्वागत है, किसान!",
        todayTip: "आज की खेती की युक्ति: पानी देने से पहले मिट्टी की नमी जांचें",
        weatherForecast: "मौसम पूर्वानुमान",
        sunny: "धूप",
        humidity: "नमी",
        windSpeed: "हवा की गति",
        cropHealth: "फसल स्वास्थ्य",
        healthy: "स्वस्थ",
        excellent: "उत्कृष्ट",
        good: "अच्छा",
        quickActions: "त्वरित कार्य",
        addNewCrop: "नई फसल जोड़ें",
        scheduleTask: "कार्य निर्धारित करें",
        viewReports: "रिपोर्ट देखें",
        recentActivities: "हाल की गतिविधियां",
        seedsPlanted: "खेत अ में बीज बोए गए",
        irrigationCompleted: "सिंचाई पूरी हुई",
        fertilizeApplied: "फसल में खाद डाली गई",
        govSchemes: "सरकारी योजनाएं",
        pmKisanDesc: "किसानों के लिए आय सहायता योजना",
        cropInsuranceDesc: "प्राकृतिक आपदाओं से फसल सुरक्षा",
        
        // चैटबॉट
        aiAssistant: "एआई सहायक",
        welcomeMessage: "नमस्ते! मैं आपका खेती सहायक हूँ। आज मैं आपकी कैसे मदद कर सकता हूँ?",
        typeMessage: "अपना संदेश टाइप करें...",
        
        // एआर स्कैनिंग
        arScanning: "एआर फसल स्कैनिंग",
        pointCamera: "कैमरा फसल पर लक्षित करें",
        startScanning: "स्कैनिंग शुरू करें",
        stopScanning: "स्कैनिंग रोकें",
        
        // फॉर्म
        cropType: "फसल प्रकार",
        fieldArea: "खेत क्षेत्र (एकड़)",
        plantingDate: "बुआई की तारीख",
        addCrop: "फसल जोड़ें",
        
        // फुटर
        footerDescription: "स्मार्ट कृषि समाधानों के साथ किसानों को सशक्त बनाना",
        quickLinks: "त्वरित लिंक",
        aboutUs: "हमारे बारे में",
        support: "सहायता",
        privacy: "गोपनीयता नीति",
        contact: "संपर्क",
        
        // मिट्टी विश्लेषण
        soilType: "मिट्टी का प्रकार",
        phLevel: "पीएच स्तर",
        nitrogen: "नाइट्रोजन",
        phosphorus: "फास्फोरस",
        potassium: "पोटेशियम",
        recommendations: "सिफारिशें",
        
        // कीट पहचान
        pestFound: "कीट मिला",
        pestType: "कीट प्रकार",
        severity: "गंभीरता",
        treatment: "उपचार",
        
        // मौसम स्थिति
        cloudy: "बादल",
        rainy: "बारिश",
        partlyCloudy: "आंशिक बादल"
    },
    
    pa: {
        // ਨੇਵੀਗੇਸ਼ਨ ਅਤੇ ਆਮ
        tagline: "ਜਿੱਥੇ ਕਿਸਾਨਾਂ ਦੇ ਯਤਨ ਸਾਰਿਆਂ ਦੀ ਤਰੱਕੀ ਨਾਲ ਮਿਲਦੇ ਹਨ",
        selectLanguage: "ਆਪਣੀ ਭਾਸ਼ਾ ਚੁਣੋ",
        welcomeBack: "ਵਾਪਸ ਸੁਆਗਤ",
        authDescription: "ਹਜ਼ਾਰਾਂ ਕਿਸਾਨਾਂ ਨਾਲ ਜੁੜੋ ਜੋ ਆਪਣੀ ਫਸਲ ਦੀ ਪੈਦਾਵਾਰ ਵਧਾ ਰਹੇ ਹਨ",
        login: "ਲਾਗਿਨ",
        signup: "ਸਾਈਨ ਅਪ",
        continueWithoutLogin: "ਬਿਨਾਂ ਲਾਗਿਨ ਜਾਰੀ ਰੱਖੋ",
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        chatbot: "ਚੈਟਬਾਟ",
        arScan: "ਏਆਰ ਸਕੈਨ",
        soilAnalysis: "ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ",
        pestDetection: "ਕੀੜੇ ਦੀ ਪਹਿਚਾਣ",
        
        // ਫਾਰਮ ਫੀਲਡ
        phoneNumber: "ਫੋਨ ਨੰਬਰ",
        password: "ਪਾਸਵਰਡ",
        fullName: "ਪੂਰਾ ਨਾਮ",
        farmSize: "ਖੇਤ ਦਾ ਸਾਈਜ਼ (ਏਕੜਾਂ ਵਿੱਚ)",
        location: "ਸਥਾਨ",
        dontHaveAccount: "ਖਾਤਾ ਨਹੀਂ ਹੈ?",
        alreadyHaveAccount: "ਪਹਿਲਾਂ ਤੋਂ ਖਾਤਾ ਹੈ?",
        
        // ਡੈਸ਼ਬੋਰਡ
        welcomeFarmer: "ਜੀ ਆਇਆਂ ਨੂੰ, ਕਿਸਾਨ!",
        todayTip: "ਅੱਜ ਦੀ ਖੇਤੀ ਦੀ ਸਲਾਹ: ਪਾਣੀ ਦੇਣ ਤੋਂ ਪਹਿਲਾਂ ਮਿੱਟੀ ਦੀ ਨਮੀ ਜਾਂਚੋ",
        weatherForecast: "ਮੌਸਮ ਪੂਰਵ ਅਨੁਮਾਨ",
        sunny: "ਧੁੱਪ",
        humidity: "ਨਮੀ",
        windSpeed: "ਹਵਾ ਦੀ ਗਤੀ",
        cropHealth: "ਫਸਲ ਦੀ ਸਿਹਤ",
        healthy: "ਸਿਹਤਮੰਦ",
        excellent: "ਸ਼ਾਨਦਾਰ",
        good: "ਚੰਗਾ",
        quickActions: "ਤੇਜ਼ ਕਾਰਵਾਈਆਂ",
        addNewCrop: "ਨਵੀਂ ਫਸਲ ਜੋੜੋ",
        scheduleTask: "ਕੰਮ ਤਹਿ ਕਰੋ",
        viewReports: "ਰਿਪੋਰਟਾਂ ਦੇਖੋ",
        recentActivities: "ਹਾਲ ਦੀਆਂ ਗਤੀਵਿਧੀਆਂ",
        seedsPlanted: "ਖੇਤ ਅ ਵਿੱਚ ਬੀਜ ਬੋਏ ਗਏ",
        irrigationCompleted: "ਸਿੰਚਾਈ ਪੂਰੀ ਹੋਈ",
        fertilizeApplied: "ਫਸਲ ਵਿੱਚ ਖਾਦ ਪਾਈ ਗਈ",
        govSchemes: "ਸਰਕਾਰੀ ਯੋਜਨਾਵਾਂ",
        pmKisanDesc: "ਕਿਸਾਨਾਂ ਲਈ ਆਮਦਨ ਸਹਾਇਤਾ ਯੋਜਨਾ",
        cropInsuranceDesc: "ਕੁਦਰਤੀ ਆਫਤਾਂ ਤੋਂ ਫਸਲ ਸੁਰੱਖਿਆ",
        
        // ਚੈਟਬਾਟ
        aiAssistant: "ਏਆਈ ਸਹਾਇਕ",
        welcomeMessage: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਤੁਹਾਡਾ ਖੇਤੀ ਸਹਾਇਕ ਹਾਂ। ਅੱਜ ਮੈਂ ਤੁਹਾਡੀ ਕਿਵੇਂ ਮਦਦ ਕਰ ਸਕਦਾ ਹਾਂ?",
        typeMessage: "ਆਪਣਾ ਸੰਦੇਸ਼ ਟਾਈਪ ਕਰੋ...",
        
        // ਏਆਰ ਸਕੈਨਿੰਗ
        arScanning: "ਏਆਰ ਫਸਲ ਸਕੈਨਿੰਗ",
        pointCamera: "ਕੈਮਰਾ ਫਸਲ ਵੱਲ ਕਰੋ",
        startScanning: "ਸਕੈਨਿੰਗ ਸ਼ੁਰੂ ਕਰੋ",
        stopScanning: "ਸਕੈਨਿੰਗ ਰੋਕੋ",
        
        // ਫਾਰਮ
        cropType: "ਫਸਲ ਦੀ ਕਿਸਮ",
        fieldArea: "ਖੇਤ ਦਾ ਖੇਤਰ (ਏਕੜ)",
        plantingDate: "ਬੀਜਣ ਦੀ ਤਾਰੀਖ",
        addCrop: "ਫਸਲ ਜੋੜੋ",
        
        // ਫੁੱਟਰ
        footerDescription: "ਸਮਾਰਟ ਖੇਤੀ ਹੱਲਾਂ ਨਾਲ ਕਿਸਾਨਾਂ ਨੂੰ ਸਸ਼ਕਤ ਬਣਾਉਣਾ",
        quickLinks: "ਤੁਰੰਤ ਲਿੰਕ",
        aboutUs: "ਸਾਡੇ ਬਾਰੇ",
        support: "ਸਹਾਇਤਾ",
        privacy: "ਗੁਪਤਤਾ ਨੀਤੀ",
        contact: "ਸੰਪਰਕ",
        
        // ਮਿੱਟੀ ਵਿਸ਼ਲੇਸ਼ਣ
        soilType: "ਮਿੱਟੀ ਦੀ ਕਿਸਮ",
        phLevel: "ਪੀਐਚ ਪੱਧਰ",
        nitrogen: "ਨਾਈਟ੍ਰੋਜਨ",
        phosphorus: "ਫਾਸਫੋਰਸ",
        potassium: "ਪੋਟੇਸ਼ਿਅਮ",
        recommendations: "ਸਿਫਾਰਸ਼ਾਂ",
        
        // ਕੀੜੇ ਦੀ ਪਹਿਚਾਣ
        pestFound: "ਕੀੜਾ ਮਿਲਿਆ",
        pestType: "ਕੀੜੇ ਦੀ ਕਿਸਮ",
        severity: "ਗੰਭੀਰਤਾ",
        treatment: "ਇਲਾਜ",
        
        // ਮੌਸਮ ਸਥਿਤੀਆਂ
        cloudy: "ਬੱਦਲਵਾਈ",
        rainy: "ਬਾਰਿਸ਼",
        partlyCloudy: "ਅੰਸ਼ਕ ਬੱਦਲਵਾਈ"
    },
    
    cg: {
        // छत्तीसगढ़ी अनुवाद
        tagline: "जहाँ किसानमन के मेहनत सबके तरक्की से मिलथे",
        selectLanguage: "अपन भाषा चुनव",
        welcomeBack: "वापस आवव के सुआगत",
        authDescription: "हजारों किसानमन के साथ जुड़व जउन अपन फसल के पैदावार बढ़ावत हावैं",
        login: "लाग इन",
        signup: "साईन अप",
        continueWithoutLogin: "बिना लाग इन के आगे बढ़व",
        dashboard: "डैशबोर्ड",
        chatbot: "चैटबाट",
        arScan: "एआर स्कैन",
        soilAnalysis: "माटी जांच",
        pestDetection: "कीड़ा पहचान",
        
        // फाम फील्ड
        phoneNumber: "फोन नंबर",
        password: "पासवर्ड",
        fullName: "पूरा नाम",
        farmSize: "खेत के साईज (एकड़ में)",
        location: "जगह",
        dontHaveAccount: "खाता नई हे?",
        alreadyHaveAccount: "पहिली से खाता हे?",
        
        // डैशबोर्ड
        welcomeFarmer: "आवव किसान भाई!",
        todayTip: "आज के खेती के सलाह: पानी देवै के पहिली माटी के नमी देखव",
        weatherForecast: "मौसम के हाल",
        sunny: "धूप",
        humidity: "नमी",
        windSpeed: "हवा के रफ्तार",
        cropHealth: "फसल के सेहत",
        healthy: "चंगा",
        excellent: "बढ़िया",
        good: "ठीक",
        quickActions: "जल्दी काम",
        addNewCrop: "नवा फसल जोड़व",
        scheduleTask: "काम तय करव",
        viewReports: "रिपोर्ट देखव",
        recentActivities: "हाल के गतिविधी",
        seedsPlanted: "खेत अ में बीज बोईस",
        irrigationCompleted: "सिंचाई पूरा होईस",
        fertilizeApplied: "फसल में खाद डारिस",
        govSchemes: "सरकारी योजना",
        pmKisanDesc: "किसानमन खातिर आमदनी सहायता योजना",
        cropInsuranceDesc: "प्राकृतिक आपदा से फसल के बचाव",
        
        // चैटबाट
        aiAssistant: "एआई सहायक",
        welcomeMessage: "नमस्कार! मैं तुंहर खेती सहायक आंव। आज मैं तुंहर काई मदद कर सकथंव?",
        typeMessage: "अपन संदेश टाईप करव...",
        
        // एआर स्कैनिंग
        arScanning: "एआर फसल स्कैनिंग",
        pointCamera: "कैमरा ल फसल कोती करव",
        startScanning: "स्कैनिंग सुरू करव",
        stopScanning: "स्कैनिंग बंद करव",
        
        // फाम
        cropType: "फसल के किसिम",
        fieldArea: "खेत के इलाका (एकड़)",
        plantingDate: "बोवाई के दिन",
        addCrop: "फसल जोड़व",
        
        // फुटर
        footerDescription: "समार्ट खेती समाधान के साथ किसानमन ल सक्षम बनाना",
        quickLinks: "जल्दी लिंक",
        aboutUs: "हमर बारे में",
        support: "मदद",
        privacy: "गोपनीयता नीति",
        contact: "संपर्क",
        
        // माटी जांच
        soilType: "माटी के किसिम",
        phLevel: "पीएच लेवल",
        nitrogen: "नाईट्रोजन",
        phosphorus: "फास्फोरस",
        potassium: "पोटाश",
        recommendations: "सलाह",
        
        // कीड़ा पहचान
        pestFound: "कीड़ा मिलिस",
        pestType: "कीड़ा के किसिम",
        severity: "गंभीरता",
        treatment: "इलाज",
        
        // मौसम हालत
        cloudy: "बादर",
        rainy: "बरसात",
        partlyCloudy: "कुछ बादर"
    },
    
    ta: {
        // தமிழ் மொழிபெயர்ப்பு
        tagline: "விவசாயிகளின் முயற்சிகள் அனைவரின் முன்னேற்றத்தைச் சந்திக்கும் இடம்",
        selectLanguage: "உங்கள் மொழியைத் தேர்ந்தெடுக்கவும்",
        welcomeBack: "மீண்டும் வரவேற்கிறோம்",
        authDescription: "பயிர் விளைச்சலை மேம்படுத்தும் ஆயிரக்கணக்கான விவசாயிகளுடன் சேருங்கள்",
        login: "உள்நுழைவு",
        signup: "பதிவு செய்யுங்கள்",
        continueWithoutLogin: "உள்நுழைவு இல்லாமல் தொடரவும்",
        dashboard: "டாஷ்போர்டு",
        chatbot: "சாட்போட்",
        arScan: "ஏஆர் ஸ்கேன்",
        soilAnalysis: "மண் பகுப்பாய்வு",
        pestDetection: "பூச்சி கண்டறிதல்",
        
        // படிவ புலங்கள்
        phoneNumber: "தொலைபேசி எண்",
        password: "கடவுச்சொல்",
        fullName: "முழு பெயர்",
        farmSize: "பண்ணை அளவு (ஏக்கரில்)",
        location: "இடம்",
        dontHaveAccount: "கணக்கு இல்லையா?",
        alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
        
        // டாஷ்போர்டு
        welcomeFarmer: "வரவேற்கிறோம், விவசாயி!",
        todayTip: "இன்றைய விவசாயத் தகவல்: நீர் பாய்ச்சுவதற்கு முன் மண்ணின் ஈரப்பதத்தை சரிபார்க்கவும்",
        weatherForecast: "வானிலை முன்னறிவிப்பு",
        sunny: "வெயில்",
        humidity: "ஈரப்பதம்",
        windSpeed: "காற்றின் வேகம்",
        cropHealth: "பயிர் ஆரோக்கியம்",
        healthy: "ஆரோக்கியமான",
        excellent: "சிறந்த",
        good: "நல்லது",
        quickActions: "விரைவு செயல்கள்",
        addNewCrop: "புதிய பயிர் சேர்க்கவும்",
        scheduleTask: "பணியை திட்டமிடுங்கள்",
        viewReports: "அறிக்கைகளைக் காண்க",
        recentActivities: "சமீபத்திய நடவடிக்கைகள்",
        seedsPlanted: "வயல் அ-வில் விதைகள் விதைக்கப்பட்டன",
        irrigationCompleted: "நீர்ப்பாசனம் முடிந்தது",
        fertilizeApplied: "பயிருக்கு உரம் இடப்பட்டது",
        govSchemes: "அரசு திட்டங்கள்",
        pmKisanDesc: "விவசாயிகளுக்கான வருமான ஆதரவு திட்டம்",
        cropInsuranceDesc: "இயற்கை பேரழிவுகளிலிருந்து உங்கள் பயிர்களைப் பாதுகாக்கவும்",
        
        // சாட்போட்
        aiAssistant: "ஏஐ உதவியாளர்",
        welcomeMessage: "வணக்கம்! நான் உங்கள் விவசாய உதவியாளர். இன்று நான் உங்களுக்கு எவ்வாறு உதவ முடியும்?",
        typeMessage: "உங்கள் செய்தியை தட்டச்சு செய்யுங்கள்...",
        
        // ஏஆர் ஸ்கேனிங்
        arScanning: "ஏஆர் பயிர் ஸ்கேனிங்",
        pointCamera: "கேமராவை உங்கள் பயிரின் மீது நோக்கவும்",
        startScanning: "ஸ்கேனிங் தொடங்கவும்",
        stopScanning: "ஸ்கேனிங் நிறுத்தவும்",
        
        // படிவம்
        cropType: "பயிர் வகை",
        fieldArea: "வயல் பகுதி (ஏக்கர்)",
        plantingDate: "நடவு தேதி",
        addCrop: "பயிர் சேர்க்கவும்",
        
        // அடிக்குறிப்பு
        footerDescription: "ஸ்மார்ட் வேளாண் தீர்வுகளுடன் விவசாயிகளை சக்திவாய்ந்தவர்களாக்குதல்",
        quickLinks: "விரைவு இணைப்புகள்",
        aboutUs: "எங்களைப் பற்றி",
        support: "ஆதரவு",
        privacy: "தனியுரிமைக் கொள்கை",
        contact: "தொடர்பு",
        
        // மண் பகுப்பாய்வு
        soilType: "மண் வகை",
        phLevel: "பிஹெச் நிலை",
        nitrogen: "நைட்ரஜன்",
        phosphorus: "பாஸ்பரஸ்",
        potassium: "பொட்டாசியம்",
        recommendations: "பரிந்துரைகள்",
        
        // பூச்சி கண்டறிதல்
        pestFound: "பூச்சி கண்டுபிடிக்கப்பட்டது",
        pestType: "பூச்சி வகை",
        severity: "தீவிரம்",
        treatment: "சிகிச்சை",
        
        // வானிலை நிலைமைகள்
        cloudy: "மேகமூட்டம்",
        rainy: "மழை",
        partlyCloudy: "பகுதி மேகமூட்டம்"
    },
    
    bn: {
        // বাংলা অনুবাদ
        tagline: "যেখানে কৃষকদের প্রচেষ্টা সবার উন্নতির সাথে মিলিত হয়",
        selectLanguage: "আপনার ভাষা নির্বাচন করুন",
        welcomeBack: "আবার স্বাগতম",
        authDescription: "হাজার হাজার কৃষকদের সাথে যোগ দিন যারা তাদের ফসলের ফলন বৃদ্ধি করছেন",
        login: "লগইন",
        signup: "সাইনআপ",
        continueWithoutLogin: "লগইন ছাড়াই চালিয়ে যান",
        dashboard: "ড্যাশবোর্ড",
        chatbot: "চ্যাটবট",
        arScan: "এআর স্ক্যান",
        soilAnalysis: "মাটি বিশ্লেষণ",
        pestDetection: "পোকামাকড় সনাক্তকরণ",
        
        // ফর্মের ক্ষেত্র
        phoneNumber: "ফোন নম্বর",
        password: "পাসওয়ার্ড",
        fullName: "পূর্ণ নাম",
        farmSize: "খামারের আকার (একরে)",
        location: "অবস্থান",
        dontHaveAccount: "অ্যাকাউন্ট নেই?",
        alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
        
        // ড্যাশবোর্ড
        welcomeFarmer: "স্বাগতম, কৃষক!",
        todayTip: "আজকের কৃষি টিপস: পানি দেওয়ার আগে মাটির আর্দ্রতা পরীক্ষা করুন",
        weatherForecast: "আবহাওয়ার পূর্বাভাস",
        sunny: "রৌদ্রোজ্জ্বল",
        humidity: "আর্দ্রতা",
        windSpeed: "বাতাসের গতি",
        cropHealth: "ফসলের স্বাস্থ্য",
        healthy: "স্বাস্থ্যকর",
        excellent: "চমৎকার",
        good: "ভাল",
        quickActions: "দ্রুত কার্যক্রম",
        addNewCrop: "নতুন ফসল যোগ করুন",
        scheduleTask: "কাজের সময়সূচী করুন",
        viewReports: "রিপোর্ট দেখুন",
        recentActivities: "সাম্প্রতিক কার্যক্রম",
        seedsPlanted: "ক্ষেত এ-তে বীজ রোপণ করা হয়েছে",
        irrigationCompleted: "সেচ সম্পন্ন হয়েছে",
        fertilizeApplied: "ফসলে সার প্রয়োগ করা হয়েছে",
        govSchemes: "সরকারী প্রকল্প",
        pmKisanDesc: "কৃষকদের জন্য আয় সহায়তা প্রকল্প",
        cropInsuranceDesc: "প্রাকৃতিক দুর্যোগ থেকে আপনার ফসল রক্ষা করুন",
        
        // চ্যাটবট
        aiAssistant: "এআই সহায়ক",
        welcomeMessage: "নমস্কার! আমি আপনার কৃষি সহায়ক। আজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?",
        typeMessage: "আপনার বার্তা টাইপ করুন...",
        
        // এআর স্ক্যানিং
        arScanning: "এআর ফসল স্ক্যানিং",
        pointCamera: "আপনার ফসলের দিকে ক্যামেরা তাক করুন",
        startScanning: "স্ক্যানিং শুরু করুন",
        stopScanning: "স্ক্যানিং বন্ধ করুন",
        
        // ফর্ম
        cropType: "ফসলের ধরন",
        fieldArea: "ক্ষেত্রের এলাকা (একর)",
        plantingDate: "রোপণের তারিখ",
        addCrop: "ফসল যোগ করুন",
        
        // ফুটার
        footerDescription: "স্মার্ট কৃষি সমাধানের সাথে কৃষকদের ক্ষমতায়ন",
        quickLinks: "দ্রুত লিংক",
        aboutUs: "আমাদের সম্পর্কে",
        support: "সহায়তা",
        privacy: "গোপনীয়তা নীতি",
        contact: "যোগাযোগ",
        
        // মাটি বিশ্লেষণ
        soilType: "মাটির ধরন",
        phLevel: "পিএইচ লেভেল",
        nitrogen: "নাইট্রোজেন",
        phosphorus: "ফসফরাস",
        potassium: "পটাসিয়াম",
        recommendations: "সুপারিশ",
        
        // পোকামাকড় সনাক্তকরণ
        pestFound: "পোকা পাওয়া গেছে",
        pestType: "পোকার ধরন",
        severity: "তীব্রতা",
        treatment: "চিকিৎসা",
        
        // আবহাওয়ার অবস্থা
        cloudy: "মেঘাচ্ছন্ন",
        rainy: "বৃষ্টি",
        partlyCloudy: "আংশিক মেঘাচ্ছন্ন"
    }
};

// Current language
let currentLanguage = localStorage.getItem('krishiSetuLanguage') || 'en';

// Translation function
function translate(key) {
    return translations[currentLanguage] && translations[currentLanguage][key] 
        ? translations[currentLanguage][key] 
        : translations['en'][key] || key;
}

// Update all translatable elements
function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        const translation = translate(key);
        
        // Handle different element types
        if (element.tagName === 'INPUT' && element.type !== 'submit') {
            if (element.hasAttribute('placeholder')) {
                element.placeholder = translation;
            } else {
                element.value = translation;
            }
        } else {
            element.textContent = translation;
        }
    });
    
    // Update placeholder attributes
    const placeholderElements = document.querySelectorAll('[data-translate-placeholder]');
    placeholderElements.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translate(key);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Change language function
function changeLanguage(languageCode) {
    currentLanguage = languageCode;
    localStorage.setItem('krishiSetuLanguage', languageCode);
    updateTranslations();
    
    // Update language selector if it exists
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = languageCode;
    }
    
    // Trigger custom event for other components
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: languageCode } }));
}

// Initialize translations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set initial language selector value
    const languageSelector = document.getElementById('languageSelector');
    if (languageSelector) {
        languageSelector.value = currentLanguage;
    }
    
    updateTranslations();
});

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, translate, changeLanguage, updateTranslations };
}
