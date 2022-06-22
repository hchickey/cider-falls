import { getGuests, getParkAreas } from "./database.js";


const parkAreas = getParkAreas()
const guests = getGuests()
// functions responsibility is to represent a list of all the park areas in HTML
export const Areas = () => {
    let parkAreasHTML = "<ul>"

    for (const area of parkAreas) {
        parkAreasHTML += `<li id="park--${area.id}">${area.title}</li>`
    }

    parkAreasHTML += "</ul>"

    return parkAreasHTML
}

//click event purpose is to show the number of guests in each park area

document.addEventListener(
    "click", (event) => {
        const itemClicked = event.target
    if (itemClicked.id.startsWith("park")) {
        const [,areaId] = itemClicked.id.split("--")

        for (const area of parkAreas) {
            if (area.id === parseInt(areaId)) {
                window.alert(`There are ${guestNumInPark(area)} guests in this area`)
            }
        }
    }
    }
)

// finding how many guest are in each area

const guestNumInPark = (area) => {
    const totalGuests = []

    for (const guest of guests) {
        if (guest.parkAreasId === area.id) {
            totalGuests.push(guest)
        }
    }
    let numGuests = totalGuests.length
    return numGuests
}