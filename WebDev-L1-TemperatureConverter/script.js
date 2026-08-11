document.addEventListener('DOMContentLoaded', () => {
    const tempInput = document.getElementById('tempInput');
    const fromUnit = document.getElementById('fromUnit');
    const toUnit = document.getElementById('toUnit');
    const convertBtn = document.getElementById('convertBtn');
    const swapBtn = document.getElementById('swapBtn');
    const errorMsg = document.getElementById('errorMsg');
    const errorText = document.getElementById('errorText');
    const resultCard = document.getElementById('resultCard');
    const resultVal = document.getElementById('resultVal');
    const resultSymbol = document.getElementById('resultSymbol');
    const stateBadge = document.getElementById('stateBadge');
    const stateIcon = document.getElementById('stateIcon');
    const stateText = document.getElementById('stateText');
    const gaugeRing = document.querySelector('.gauge-ring-bg');

    // Event Listeners
    convertBtn.addEventListener('click', processConversion);
    swapBtn.addEventListener('click', swapUnits);
    tempInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') processConversion();
    });

    function swapUnits() {
        const temp = fromUnit.value;
        fromUnit.value = toUnit.value;
        toUnit.value = temp;
        if (tempInput.value.trim() !== '') processConversion();
    }

    window.applyPreset = function(val, unit) {
        tempInput.value = val;
        fromUnit.value = unit;
        processConversion();
    };

    function processConversion() {
        const raw = tempInput.value.trim();
        errorMsg.classList.add('hide');
        resultCard.classList.add('hide');

        if (raw === '' || isNaN(raw)) {
            showError('Please enter a valid numeric temperature!');
            return;
        }

        const inputVal = parseFloat(raw);
        const from = fromUnit.value;
        const to = toUnit.value;

        // Base Conversion to Celsius
        let celsius;
        if (from === 'celsius') celsius = inputVal;
        else if (from === 'fahrenheit') celsius = (inputVal - 32) * 5 / 9;
        else if (from === 'kelvin') celsius = inputVal - 273.15;

        // Absolute Zero Check
        if (celsius < -273.15) {
            showError('Invalid: Value cannot fall below Absolute Zero (-273.15°C / 0 K)!');
            return;
        }

        // Targeted Output Calculation
        let outputVal;
        let symbolText = '';

        if (to === 'celsius') {
            outputVal = celsius;
            symbolText = '°C';
        } else if (to === 'fahrenheit') {
            outputVal = (celsius * 9 / 5) + 32;
            symbolText = '°F';
        } else if (to === 'kelvin') {
            outputVal = celsius + 273.15;
            symbolText = 'K';
        }

        // Output Display
        resultVal.textContent = outputVal.toFixed(2);
        resultSymbol.textContent = symbolText;

        // Thermal State Badging
        updateThermalBadge(celsius);

        resultCard.classList.remove('hide');
    }

    function updateThermalBadge(celsius) {
        let stateMsg, iconClass;

        if (celsius <= 0) {
            stateMsg = 'Freezing Cold';
            iconClass = 'fa-solid fa-snowflake';
        } else if (celsius > 0 && celsius <= 40) {
            stateMsg = 'Comfort / Ambient';
            iconClass = 'fa-solid fa-leaf';
        } else {
            stateMsg = 'Extreme Heat';
            iconClass = 'fa-solid fa-fire-flame-curved';
        }

        stateText.textContent = stateMsg;
        stateIcon.className = iconClass;
    }

    function showError(msg) {
        errorText.textContent = msg;
        errorMsg.classList.remove('hide');
    }
});