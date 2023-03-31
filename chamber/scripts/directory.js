const url = "json/directory.json";

async function getSeasideData() {
    const response = await fetch(url);
    const data = await response.json();
    
    displaySeaside (data.seaside);
      
// note that we reference the prophet array of the data object given the structure of the json file
}

getSeasideData();
  
const displaySeaside = (seaside) => {
    const cards = document.querySelector("div.cards"); // select the output container element

    seaside.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");
        

        // Build the h2 content out to show the prophet's full name - finish the template string
        address.textContent = `${seaside.address}`;
        phone.textContent = `${seaside.phone}`;
        
        // Build the image portrait by setting all the relevant attributes
        web.setAttribute("href", seaside.web);
        logo.setAttribute("src", seaside.logo);
        logo.setAttribute("alt", "Business Logo");
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "340");
    

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        
        cards.appendChild(card);
    })
}
