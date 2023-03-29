// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
// long, medium, short options ... try them

// datefield.innerHTML = `<em>${fulldate}</em>`;
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;

const date = new Date();
const year = date.getFullYear();

document.querySelector("#currentYear").textContent = year;

const lastMod = document.lastModified;
document.querySelector("#lastMod").textContent = lastMod;

// const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
// document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;

 // Add a banner to the page on Mondays and Tuesdays /
const banner = document.querySelector('#banner');
var currentDate = new Date()
var weekday = new Array(7);
    weekday[0]=  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
var dayofweek = weekday[currentDate.getDay()];
if (dayofweek == weekday[1] || dayofweek == weekday [2]) {
    banner.textContent = `Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`
}
else {
    banner.style.display = 'none';
}

// Discover Page Lazy Loading /

var imagesToLoad = document.querySelectorAll('img[data-src]');
var loadImages = function(image) {
	image.setAttribute('src', image.getAttribute('data-src'));
	image.onload = function() {
		image.removeAttribute('data-src');
	};
};
if('IntersectionObserver' in window) {
	var observer = new IntersectionObserver(function(items, observer) {
		items.forEach(function(item) {
			if(item.isIntersecting) {
				loadImages(item.target);
				observer.unobserve(item.target);
			}
		});
	});
	imagesToLoad.forEach(function(img) {
		observer.observe(img);
	});
}
else {
	imagesToLoad.forEach(function(img) {
		loadImages(img);
	});
}

// Days since last visit /
const todayDisplay = document.querySelector(".today");
const visitDisplay = document.querySelector(".visits");
const daysSinceLast = document.querySelector(".since-days");

//Get the stored value in localStorage.
let numVisits = Number(window.localStorage.getItem("visits-ls"));

let lastVisit = Number(window.localStorage.getItem("lastvisit-ls"));


let current = Date.now();
let daysSince = current - lastVisit;

let day = Math.round((daysSince)/ 86400000);


if(numVisits != 0) {
    visitDisplay.textContent = numVisits;
    daysSinceLast.textContent = day;
    
} else {
    visitDisplay.textContent = "This is your first visit";
}

//Increment number of visits.
numVisits ++;

//Store the new number of visits value.
localStorage.setItem("visits-ls", numVisits);

//Store today's date.
localStorage.setItem("lastvisit-ls", Date.now());

//Show today's date.
todayDisplay.textContent=(Date.now());