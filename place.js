// 1. Define variables for temperature and wind speed
const temperature = -5; // Replace with actual temperature
const windSpeed = 10; // Replace with actual wind speed

// 2. Write the calculateWindChill function
function calculateWindChill(temp, windSpeed) {
  // Use the formula to calculate windchill based on the units
  const windChill = 35.74 + 0.6215 * temp - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temp * Math.pow(windSpeed, 0.16); 
  return windChill;
}

// 3. Check if the conditions are met to call calculateWindChill
if (temperature <= 10 && windSpeed > 4.8) {
  // Call the function and display the windchill
  const windchill = calculateWindChill(temperature, windSpeed);
  console.log("The windchill is: " + windchill);
} else {
  // Display "N/A" if conditions are not met
  console.log("windchill");
}





document.addEventListener('DOMContentLoaded', () => {
    // Get the current year and set it to the span with id 'currentYear'
    const currentYearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    if (currentYearSpan) {
        currentYearSpan.textContent = currentYear;
        // console.log(Current Year: ${currentYear});
    } else {
        console.error('Element with id "currentYear" not found.');
    }

    // Get the last modification date and set it to the span with id 'modify'
    const modifySpan = document.getElementById('modify');
    const lastModified = new Date(document.lastModified);
    const formattedLastModified = lastModified.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
    if (modifySpan) {
        modifySpan.textContent = formattedLastModified;
        // console.log(Last Modified: ${formattedLastModified});
    } else {
        console.error('Element with id "modify" not found.');
    }
});