// Temperature Converter: Celsius to Fahrenheit and Fahrenheit to Celsius

/**
 * Converts Celsius to Fahrenheit.
 * @param {number} celsius - Temperature in Celsius.
 * @returns {number} - Temperature in Fahrenheit.
 */
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

/**
 * Converts Fahrenheit to Celsius.
 * @param {number} fahrenheit - Temperature in Fahrenheit.
 * @returns {number} - Temperature in Celsius.
 */
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Example usage:
const tempCelsius = 25;
const tempFahrenheit = 77;

console.log(`${tempCelsius}°C is equal to ${celsiusToFahrenheit(tempCelsius)}°F`);
console.log(`${tempFahrenheit}°F is equal to ${fahrenheitToCelsius(tempFahrenheit)}°C`);