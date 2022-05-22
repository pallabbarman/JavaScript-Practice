function myFunction(a, b) {
    const c = a * b;
    console.log(c);
    return c;
}

myFunction(5, 2);

// Fahrenheit to Celsius
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

const result = toCelsius(77);
console.log(result);
