const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    
    displayProphets(data.prophets);
      
// note that we reference the prophet array of the data object given the structure of the json file
}

getProphetData();
  
const displayProphets = (prophets) => {
    const cards = document.querySelector("div.cards"); // select the output container element

    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let h2 = document.createElement("h2");
        let bDate = document.createElement("p");
        let bPlace = document.createElement("p");
        let portrait = document.createElement("img");

        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        bDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        bPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", "Portrait of ${prophet.name} ${prophet.lastname}");
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
    

        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(bDate);
        card.appendChild(bPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    })
}
