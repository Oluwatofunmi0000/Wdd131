document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('.hamburger');
    const nav = document.querySelector('nav');
    const logo = document.querySelector('.logo');
});

    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
        logo.classList.toggle('hidden');
    });

// Add an event listener to the navigation menu links
navMenu.addEventListener('click', (event) => {
// If a link is clicked, close the navigation menu
if (event.target.tagName === 'X') {
  nav.classList.remove('active');
  hamburger.classList.remove('active');
}
});

 // Display temples based on filters
 const main = document.querySelector("main");

 function createTempleCard(temple) {
     const templeCard = document.createElement("div");
     templeCard.classList.add("temple-card");

     templeCard.innerHTML = `
         <h2>${temple.templeName}</h2>
         <p><strong>Location:</strong> ${temple.location}</p>
         <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
         <p><strong>Area:</strong> ${temple.area} sq ft</p>
         <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
     `;

     main.appendChild(templeCard);
 }

 function displayTemples(filteredTemples) {
     main.innerHTML = "";
     filteredTemples.forEach(createTempleCard);
 }

 const temples = [
     {
         templeName: "Aba Nigeria",
         location: "Aba, Nigeria",
         dedicated: "2005, August, 7",
         area: 11500,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
     },
     {
         templeName: "Manti Utah",
         location: "Manti, Utah, United States",
         dedicated: "1888, May, 21",
         area: 74792,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
     },
     {
         templeName: "Payson Utah",
         location: "Payson, Utah, United States",
         dedicated: "2015, June, 7",
         area: 96630,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
     },
     {
         templeName: "Yigo Guam",
         location: "Yigo, Guam",
         dedicated: "2020, May, 2",
         area: 6861,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
     },
     {
         templeName: "Washington D.C.",
         location: "Kensington, Maryland, United States",
         dedicated: "1974, November, 19",
         area: 156558,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
     },
     {
         templeName: "Lima Perú",
         location: "Lima, Perú",
         dedicated: "1986, January, 10",
         area: 9600,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
     },
     {
         templeName: "Mexico City Mexico",
         location: "Mexico City, Mexico",
         dedicated: "1983, December, 2",
         area: 116642,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
     },
     {
         templeName: "Accra Ghana",
         location: "Accra, Ghana",
         dedicated: "2004, January, 11",
         area: 17000,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/800x800/accra-ghana-temple-759299-wallpaper.jpg"
     },
     {
         templeName: "São Paulo Brazil",
         location: "São Paulo, Brazil",
         dedicated: "1978, October, 30",
         area: 12100,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/800x500/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
     },
     {
         templeName: "Brisbane Australia",
         location: "Brisbane, Australia",
         dedicated: "2003, June, 15",
         area: 18300,
         imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/brisbane-australia/800x500/brisbane-australia-temple-lds-901526-wallpaper.jpg"
     }
 ];

 document.querySelector("home").addEventListener("click", () => {
     displayTemples(temples);
 });

 document.querySelector("old").addEventListener("click", () => {
     displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900));
 });

 document.querySelector("new").addEventListener("click", () => {
     displayTemples(temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000));
 });

 document.querySelector("large").addEventListener("click", () => {
     displayTemples(temples.filter(temple => temple.area > 90000));
 });

 document.querySelector("small").addEventListener("click", () => {
     displayTemples(temples.filter(temple => temple.area < 10000));
 });

 // Display all temples initially
 displayTemples(temples);



//footer 
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








// const temples = [
//     {
//       templeName: "Aba Nigeria",
//       location: "Aba, Nigeria",
//       dedicated: "2005, August, 7",
//       area: 11500,
//       imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
//     },
//     {
//       templeName: "Manti Utah",
//       location: "Manti, Utah, United States",
//       dedicated: "1888, May, 21",
//       area: 74792,
//       imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
//     },
//     {
//       templeName: "Payson Utah",
//       location: "Payson, Utah, United States",
//       dedicated: "2015, June, 7",
//       area: 96630,
//       imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
//     },
//     {
//       templeName: "Yigo Guam",
//       location: "Yigo, Guam",
//       dedicated: "2020, May, 2",
//       area: 6861,
//       imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
//     },
//     {
//       templeName: "Washington D.C.",
//       location: "Kensington, Maryland, United States",
//       dedicated: "1974, November, 19",
//       area: 156558,
//       imageUrl:
//       "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
//     },
//      {
//       templeName: "Lima Perú",
//       location: "Lima, Perú",
//       dedicated: "1986, January, 10",
//       area: 9600,
//       imageUrl:
//     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
//   },
//   {
//     templeName: "Mexico City Mexico",
//     location: "Mexico City, Mexico",
//     dedicated: "1983, December, 2",
//     area: 116642,
//     imageUrl:
//     "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
//   },
// ];

// createTempleCard();

// function createTempleCard() {
//   temples.forEach(temple => {
//     let card = document.createElement("section")
//     let name = document.createElement("h3")
//     let location = document.createElement("p")
//     let dediction = document.createElement("p")
//     let area = document.createElement("p")
//     let img = document.createElement("img")

//     name.textContent = temple.templeName;
//     location.innerHTML = '<span class="label">Location:</span> ${temple.location}'; 
//     dedication.innerHTML = '<span class="label">Dedicated:</span> ${temple.dedicated}'; 
//     area.innerHTML = '<span class="label">Size:</span> ${temple.area} sq  ft'; 
//     img.setAttribute("src", temple.imageUrl);
//     img.setAttribute("alt", '${temple.templeName}Temple');
//     img.setAttribute("loading", "lazy");

//     card.appendChild(name);
//     card.appendChild(location);
//     card.appendChild(dedicated);
//     card.appendChild(area);
//     card.appendChild(img);
    
//     document.querySelector(".temples").appendChild(card);






//   })
// }; 

  