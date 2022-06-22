import { getParkAreasServices, getParkAreas } from "./database.js";


const parkAreasServices = getParkAreasServices()
const parkAreas = getParkAreas()


// functions responsibility to find what services are in which area of the park
export const findServices = (service) => {
// function needs parkArea and services defined
// define empty string to store where the servcies are in each park area
let ciderFallsPark = ""
// iterate the array value of ParkAreaServices
for (const park of parkAreasServices) {
    if (park.serviceId === service.id) {
        for (const areas of parkAreas) {
            if (park.parkAreasId === areas.id) {
                ciderFallsPark += `${areas.title}, and `
            }
        }
    }
}
    let sliceWork = ciderFallsPark.slice(0, -6)
    return sliceWork
}