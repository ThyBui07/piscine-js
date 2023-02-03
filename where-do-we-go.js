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
    //console.log('window scroll y: ', window.scrollY)
    scroll > window.scrollY
        ? (document.querySelector(".direction").innerHTML = "N")
        : (document.querySelector(".direction").innerHTML = "S");
    scroll = window.scrollY;
});

export const explore = () => {
//    let placesSorted =  sortCoordinates(places)
//     console.log(placesSorted)
   for (let i = 0; i < sortedPlaces.length; i++) {
        let section = document.createElement("section")
        section.style.background = "url(./where-do-we-go_images/" + sortedPlaces[i].name.split(',')[0].toLowerCase().split(' ').join('-') + ".jpg)"
        section.style.backgroundSize = "cover"
        section.style.backgroundPosition = "center"
        section.style.backgroundRepeat = "no-repeat"
        section.style.width = window.innerWidth
        section.style.height = window.innerHeight
        // section.style.position= "relative"
        // section.style.color = placesSorted[i].color
        //https://maps.google.com/?q=<lat>,<lng>
        // section.href = encodeURI()
        //30°39'16.55\"N 48°39'14.14\"E
        //30%C2%B039%2716.55%22N%2C48%C2%B039%2714.14%22E
        
        document.body.appendChild(section)
    }

    let compass = document.createElement("div")
    compass.className = "direction"
    compass.innerHTML = ''
    document.body.appendChild(compass)

    // const test =document.querySelectorAll(".location")
    // test.forEach(t => {
    //     console.log(t.textContent)
    //     console.log(t.style.color)
    // })
    
}

// function sortCoordinates(places) {
//     let northCountries = [];
//     let southCountries = [];

//    places.forEach(element => {
//     let obj = { 
//     lat: {
//         gr1: '',
//         gr2: '',
//         gr3: '',
//         gr4: ''
//     }, 
//     lng: {
//         gr1: '',
//         gr2: '',
//         gr3: '',
//         gr4: ''
//     }
//     }
//     const lat = element.coordinates.split(" ")[0]
//     const lng = element.coordinates.split(" ")[1]
//     const latsplitBySymbol = lat.split(/\W+/)
//     const lngsplitBySymbol = lng.split(/\W+/)

//     // console.log(splitBySymbol)
    
//     obj.lat.gr1 = latsplitBySymbol[0]
//     obj.lat.gr2 = latsplitBySymbol[1]
//     obj.lat.gr3 = latsplitBySymbol[2] + "." + latsplitBySymbol[3]
//     obj.lat.gr4 = latsplitBySymbol[4]

//     obj.lng.gr1 = lngsplitBySymbol[0]
//     obj.lng.gr2 = lngsplitBySymbol[1]
//     obj.lng.gr3 = lngsplitBySymbol[2] + "." + lngsplitBySymbol[3]
//     obj.lng.gr4 = lngsplitBySymbol[4]

//     element['locale'] = obj
//     if ( obj.lat.gr4 === 'N') {
//         northCountries.push(element)
//     } else {
//         southCountries.push(element)
//     }
//    });

//     // s =>> small to big
//    southCountries.sort((obj1,obj2) => {
//     let gr1 = compare(obj1.locale.lat.gr1, obj2.locale.lat.gr1)
//     if (gr1 == 0) {
//         //console.log('same 1')
//         let gr2 = compare(obj1.locale.lat.gr2, obj2.locale.lat.gr2)
//         if (gr2 == 0) {
//             //console.log('same 2')
//             let gr3 = compare(obj1.locale.lat.gr3, obj2.locale.lat.gr3)
//             return gr3
//         } else {
//             return gr2
//         }
//     } else {
//         return gr1
//     }
//    })
//     // n =>> big to small
//    northCountries.sort((obj1,obj2) => {
//         let gr1 = compare(obj2.locale.lat.gr1, obj1.locale.lat.gr1)
//         if (gr1 == 0) {
//             console.log('same 1')
//             let gr2 = compare(obj2.locale.lat.gr2, obj1.locale.lat.gr2)
//             if (gr2 == 0) {
//                 //console.log('same 2')
//                 let gr3 = compare(obj2.locale.lat.gr3, obj1.locale.lat.gr3)
//                 return gr3
//             } else {
//                 return gr2
//             }
//         } else {
//             return gr1
//         }
//    })
  

//    let arr = northCountries.concat(southCountries)
//    return arr
// }

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
    //console.log(place)
        link.className = "location"
        link.style.color = place.color
     
        link.style.top =  "50%"
        link.style.left = "50%"
        link.style.fontSize = "80px"
        link.style.transform = "translate(-50%, -50%)"
        link.style.zIndex = "2"
        link.textContent = place.name + '\n' + place.coordinates
        console.log(place.coordinates)
        link.href = urlEncodeCoordinates(place.coordinates)
        console.log(link.href)
        link.target = "_blank"
        link.rel = "noopener noreferrer"
        const convertedUrl = link.href
        .split('%C2%B0')
        .join('°')
        .split('%22')
        .join('"')
        .split('%20')
        .join(' ')

        console.log(convertedUrl)

        const isValidCoordinates = convertedUrl.includes(link.textContent.split('\n')[1])

        console.log(isValidCoordinates)
}

function urlEncodeCoordinates(coordinates) {
    const ggMURL = 'https://www.google.com/maps/place/'
    // const degree = '%C2%B0'
    // const singleQ = '\''
    // const doubleQ = '%22'
    // const comma = '%2C'
    //37°53'17.43\"N 4°46'45.78\"W
    const replceCoor = coordinates
    .replaceAll(" ", "%20")
    .replaceAll("°", "%C2%B0")
    .replaceAll('"', "%22");
    const res = ggMURL+replceCoor
    return res
}
