import { getServices } from "./database.js";
import { findServices } from "./ParkAreasServices.js";

const services = getServices()

export const Services = () => {
    let servicesHTML = "<ul>"

    for (const service of services) {
        servicesHTML += `<li id="service--${service.id}">${service.title}</li>`
    }

    servicesHTML += "</ul>"

    return servicesHTML
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("service")) {
            const [,serviceId] = itemClicked.id.split("--")

            for (const service of services) {
                if (service.id === parseInt(serviceId)) {
                window.alert(`${service.title} is available in ${findServices(service)}`)
                }
            }
        }
    }
)