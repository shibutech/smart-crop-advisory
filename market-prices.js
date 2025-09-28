// Market Prices JavaScript for KrishiSetu
// Global variables
let marketData = [];
let filteredData = [];
let currentLanguage = 'en';

// API Configuration
const MARKET_API_URL = 'https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070';
const API_KEY = '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b';

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
    initializeMarketApp();

    // Apply saved language preference
    const savedLanguage = localStorage.getItem('krishiSetuLanguage');
    if (savedLanguage) {
        changeLanguage(savedLanguage);
    }

    // Load market data
    loadMarketData();
});

// Initialize market application
function initializeMarketApp() {
    console.log('Market Prices application initialized');
}

// Load market data from API
async function loadMarketData() {
    try {
        showLoadingState();

        const response = await fetch(
            `${MARKET_API_URL}?api-key=${API_KEY}&format=xml&limit=1000`,
            {
                method: 'GET',
                headers: {
                    'accept': 'application/xml'
                }
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xmlText = await response.text();
        const parsedData = parseXMLData(xmlText);

        if (parsedData.length === 0) {
            throw new Error('No data received from API');
        }

        marketData = parsedData;
        filteredData = [...marketData];

        populateFilters();
        displayMarketData();
        updateLastUpdatedTime();

    } catch (error) {
        console.error('Error loading market data:', error);
        showErrorState(error.message);
    }
}

// Parse XML response data
function parseXMLData(xmlText) {
    try {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'text/xml');

        // Check for API errors
        const statusElement = xmlDoc.querySelector('status');
        if (statusElement && statusElement.textContent !== 'ok') {
            throw new Error('API returned error status');
        }

        const records = xmlDoc.querySelectorAll('records > item');
        const parsedData = [];

        records.forEach(record => {
            const item = {
                state: getElementText(record, 'state'),
                district: getElementText(record, 'district'),
                market: getElementText(record, 'market'),
                commodity: getElementText(record, 'commodity'),
                variety: getElementText(record, 'variety'),
                grade: getElementText(record, 'grade'),
                arrival_date: getElementText(record, 'arrival_date'),
                min_price: parseFloat(getElementText(record, 'min_price')) || 0,
                max_price: parseFloat(getElementText(record, 'max_price')) || 0,
                modal_price: parseFloat(getElementText(record, 'modal_price')) || 0
            };
            parsedData.push(item);
        });

        return parsedData;

    } catch (error) {
        console.error('Error parsing XML:', error);
        return [];
    }
}

// Helper function to get text content from XML elements
function getElementText(parent, tagName) {
    const element = parent.querySelector(tagName);
    return element ? element.textContent.trim() : '';
}

// Populate filter dropdowns
function populateFilters() {
    populateStateFilter();
    populateDistrictFilter();
    populateCommodityFilter();
}

// Populate state filter
function populateStateFilter() {
    const states = [...new Set(marketData.map(item => item.state))].sort();
    const stateFilter = document.getElementById('stateFilter');

    stateFilter.innerHTML = '<option value="">All States</option>';
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateFilter.appendChild(option);
    });
}

// Populate district filter
function populateDistrictFilter() {
    const districts = [...new Set(marketData.map(item => item.district))].sort();
    const districtFilter = document.getElementById('districtFilter');

    districtFilter.innerHTML = '<option value="">All Districts</option>';
    districts.forEach(district => {
        const option = document.createElement('option');
        option.value = district;
        option.textContent = district;
        districtFilter.appendChild(option);
    });
}

// Populate commodity filter
function populateCommodityFilter() {
    const commodities = [...new Set(marketData.map(item => item.commodity))].sort();
    const commodityFilter = document.getElementById('commodityFilter');

    commodityFilter.innerHTML = '<option value="">All Commodities</option>';
    commodities.forEach(commodity => {
        const option = document.createElement('option');
        option.value = commodity;
        option.textContent = commodity;
        commodityFilter.appendChild(option);
    });
}

// Filter data based on user selections
function filterData() {
    const stateFilter = document.getElementById('stateFilter').value;
    const districtFilter = document.getElementById('districtFilter').value;
    const commodityFilter = document.getElementById('commodityFilter').value;
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();

    filteredData = marketData.filter(item => {
        // Apply filters
        const matchesState = !stateFilter || item.state === stateFilter;
        const matchesDistrict = !districtFilter || item.district === districtFilter;
        const matchesCommodity = !commodityFilter || item.commodity === commodityFilter;

        // Apply search
        const matchesSearch = !searchTerm ||
            item.commodity.toLowerCase().includes(searchTerm) ||
            item.state.toLowerCase().includes(searchTerm) ||
            item.district.toLowerCase().includes(searchTerm) ||
            item.market.toLowerCase().includes(searchTerm);

        return matchesState && matchesDistrict && matchesCommodity && matchesSearch;
    });

    displayMarketData();
}

// Display filtered market data
function displayMarketData() {
    const tableBody = document.getElementById('pricesTableBody');

    if (filteredData.length === 0) {
        showNoDataState();
        return;
    }

    hideMessages();

    tableBody.innerHTML = '';

    filteredData.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.state}</td>
            <td>${item.district}</td>
            <td>${item.market}</td>
            <td class="commodity-name">${item.commodity}</td>
            <td>${item.variety}</td>
            <td>${item.grade}</td>
            <td>${formatDate(item.arrival_date)}</td>
            <td class="price-highlight">₹${item.min_price}</td>
            <td class="price-highlight">₹${item.max_price}</td>
            <td class="price-highlight">₹${item.modal_price}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Format date for display
function formatDate(dateString) {
    if (!dateString) return 'N/A';

    try {
        // Handle DD/MM/YYYY format
        const parts = dateString.split('/');
        if (parts.length === 3) {
            return `${parts[0].padStart(2, '0')}/${parts[1].padStart(2, '0')}/${parts[2]}`;
        }
        return dateString;
    } catch (error) {
        return dateString;
    }
}

// Clear all filters
function clearFilters() {
    document.getElementById('stateFilter').value = '';
    document.getElementById('districtFilter').value = '';
    document.getElementById('commodityFilter').value = '';
    document.getElementById('searchInput').value = '';

    filteredData = [...marketData];
    displayMarketData();
}

// Refresh market data
function refreshMarketData() {
    loadMarketData();
}

// Update last updated time
function updateLastUpdatedTime() {
    const now = new Date();
    const timeString = now.toLocaleString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });

    document.getElementById('updateTime').textContent = timeString;
}

// Show loading state
function showLoadingState() {
    const tableBody = document.getElementById('pricesTableBody');
    tableBody.innerHTML = `
        <tr>
            <td colspan="10" class="loading">
                <i class="fas fa-spinner fa-spin"></i>
                <span data-translate="loadingMarketData">Loading market data...</span>
            </td>
        </tr>
    `;
    hideMessages();
}

// Show error state
function showErrorState(errorMessage) {
    hideMessages();
    document.getElementById('errorMessage').style.display = 'block';
    console.error('Market data error:', errorMessage);
}

// Show no data state
function showNoDataState() {
    hideMessages();
    document.getElementById('noDataMessage').style.display = 'block';
}

// Hide all messages
function hideMessages() {
    document.getElementById('errorMessage').style.display = 'none';
    document.getElementById('noDataMessage').style.display = 'none';
}

// Language change handler
function changeLanguage(languageCode) {
    currentLanguage = languageCode;
    localStorage.setItem('krishiSetuLanguage', languageCode);

    // Apply translations if translation function exists
    if (typeof translate === 'function') {
        translate(languageCode);
    }

    // Reload data to update any translated content
    if (marketData.length > 0) {
        displayMarketData();
    }
}

// Auto-refresh every 5 minutes
setInterval(() => {
    if (document.visibilityState === 'visible') {
        refreshMarketData();
    }
}, 5 * 60 * 1000);
