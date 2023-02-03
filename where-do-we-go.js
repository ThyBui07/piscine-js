// Where will you go on your next holiday?

// Let's make a page to index your options, so that next time you ask yourself that question, you'll be ready with some ideas.

// Create a function named explore, which creates a page displaying the list of places provided in the data file below.

// Sort the places from north to south, so that the northern-most place is first.
// Display a fullscreen-size <section> for each place. Use the pics hosted in the ./where-do-we-go_images folder below. Set the background attribute with the corresponding image URL. The URL has to be formatted like so: ./where-do-we-go_images/name-of-the-place.jpg.
// Display a location indicator as an <a> tag in the middle of the screen. It should:
// have the class location
// display the name and coordinates of the current place, as text strings separated by \n
// set the text color as color
// update the name, coordinates and color on scroll, at the point when the next image reaches the middle of the screen height


// make the href attribute open a new tab redirecting to a Google Maps URL with the coordinates of the place currently displayed


// Display a compass as a div tag, indicating the latitude direction which:
// has the class direction
// displays N for North if the user is scrolling up
// displays S for South if he's scrolling down

import { places } from './where-do-we-go.data.js'

let link = document.createElement('a')
document.body.appendChild(link)
const sortedPlaces = sortCoordinates()
document.addEventListener("scroll", () => {
    selectPlace();
    
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    scroll = window.scrollY;
});

export const explore = () => {
//    let placesSorted =  sortCoordinates(places)

   for (let i = 0; i < sortedPlaces.length; i++) {
        let section = document.createElement("section")
        section.style.background = "url(./where-do-we-go_images/" + sortedPlaces[i].name.split(',')[0].toLowerCase().split(' ').join('-') + ".jpg)"
        section.style.backgroundSize = "cover"
        section.style.backgroundPosition = "center"
        section.style.backgroundRepeat = "no-repeat"
        section.style.width = window.innerWidth
        section.style.height = window.innerHeight
        
        document.body.appendChild(section)
    }

    let compass = document.createElement("div")
    compass.className = "direction"
    compass.innerHTML = ''
    document.body.appendChild(compass)

}


function sortCoordinates () {
    const northPlaces = places.filter(place => place.coordinates.includes("N"))
    const southPlaces = places.filter(place => place.coordinates.includes("S"))
    northPlaces.sort((a, b) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1   
    })
    southPlaces.sort((b, a) => {
        if (a.coordinates > b.coordinates) return -1
        if (b.coordinates > a.coordinates) return 1   
    })
    const res = northPlaces.concat(southPlaces)
    return res
}

function selectPlace() {
    const sectionHeight = window.innerHeight;
    //middle of the screen height
    const scroll = window.scrollY + sectionHeight / 2;
    const sectionIndex =  Math.round(window.scrollY / window.innerHeight)
    const place = sortedPlaces[sectionIndex];
        link.className = "location"
        link.style.color = place.color
     
        link.style.top =  "50%"
        link.style.left = "50%"
        link.style.fontSize = "80px"
        link.style.transform = "translate(-50%, -50%)"
        link.style.zIndex = "2"
        link.textContent = place.name + '\n' + place.coordinates
     
        link.href = urlEncodeCoordinates(place.coordinates)
    
        link.target = "_blank"
        link.rel = "noopener noreferrer"
        const convertedUrl = link.href
        .split('%C2%B0')
        .join('°')
        .split('%22')
        .join('"')
        .split('%20')
        .join(' ')
        const isValidCoordinates = convertedUrl.includes(link.textContent.split('\n')[1])
}

function urlEncodeCoordinates(coordinates) {
    const ggMURL = 'https://www.google.com/maps/place/'
    const replceCoor = coordinates
    .replaceAll(" ", "%20")
    .replaceAll("°", "%C2%B0")
    .replaceAll('"', "%22");
    const res = ggMURL+replceCoor
    return res
}
