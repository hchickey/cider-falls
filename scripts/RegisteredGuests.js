import { getGuests } from "./database.js";

const parkGuests = getGuests()


// function responsibility is to rep all the guests name in HTML format

export const Guests = () => {
    let guestHTML = "<ul>"

    for (const guest of parkGuests) {
        guestHTML += `<li>${guest.firstName} ${guest.lastName}</li>`
    }

    guestHTML += "</ul>"

    return guestHTML
}

// function whose responsibility is to find which park area the guest has been to
