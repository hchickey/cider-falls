import { Areas } from "./ParkAreas.js"
import { Guests } from "./RegisteredGuests.js"
import { Services } from "./services.js"

const mainContainer = document.querySelector("#container")

const applicationHTML = `
<h1>Cider Falls Park</h1>
<article class="details">
    <section class="detail--column list details__parkAreas">
        <h2>Park Areas</h2>
        ${Areas()}
    </section>
    <section class="detail--column list details__guests">
        <h2>Guests</h2>
        ${Guests()}
    </section>
</article>

<article class="services">
    <h2>Services</h2>
    ${Services()}
</article>`

mainContainer.innerHTML = applicationHTML