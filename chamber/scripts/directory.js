const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

if (gridbutton) {
    gridbutton.addEventListener("click", () => {
        display.classList.add("grid");
        display.classList.remove("list");
    });

    listbutton.addEventListener("click", showList);

    function showList() {
        display.classList.add("list");
        display.classList.remove("grid");
    }
}

const url = "json/data.json";

async function getSeasideData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.seaside);
    displaySeaside (data.seaside);
    
}

getSeasideData()
  
const displaySeaside = (seaside) => {
    const cards = document.querySelector("section.cards"); // select the output container element

    seaside.forEach((seaside) => {
        // Create elements to add to the div.cards element
        let card = document.createElement("section");
        let logo = document.createElement("img");
        let company = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let web = document.createElement("a");
        

        // Build the h2 content out to show the prophet's full name - finish the template string
        company.textContent = `${seaside.company}`;
        address.textContent = `${seaside.address}`;
        phone.textContent = `${seaside.phone}`;
        
        // Build the image portrait by setting all the relevant attributes
        web.setAttribute("href", `${seaside.web}`);
        web.textContent = `${seaside.curl}`;

        logo.setAttribute("src", seaside.logo);
        logo.setAttribute("alt", "Business Logo");
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "250");
    

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(web);
        
        cards.appendChild(card);
    })

}
