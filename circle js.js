function calculateCircumference() {
    const radius = parseFloat(document.getElementById('radius').value);
    const diameter = parseFloat(document.getElementById('diameter').value);
    let circumference = 0;

    if (!isNaN(radius)) {
        circumference = 2 * Math.PI * radius;
    } else if (!isNaN(diameter)) {
        circumference = Math.PI * diameter;
    } else {
        document.getElementById('result').textContent = "Please enter a valid radius or diameter.";
        return;
    }

    document.getElementById('result').textContent = `Circumference: ${circumference.toFixed(2)}`;
}
