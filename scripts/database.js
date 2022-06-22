// this modules holds all of the data
// the functions for all the database objects are for allowing other modules to get info from each object

const database = {
    parkAreas: [{
        id: 1,
        title: "Chamfort River"
    }, {
        id: 2,
        title: "Lost Wolf Hiking Trail"
    }, {
        id: 3,
        title: "Lodge"
    }, {
        id: 4,
        title: "Gander River"
    }, {
        id: 5,
        title: "Campgrounds"
    }, {
        id: 6, 
        title: "Pine Bluffs Trails"
    }],
    guests: [{
        id: 1,
        firstName: "George",
        lastName: "Strait",
        parkAreasId: 6
    }, {
        id: 2,
        firstName: "Tim",
        lastName: "McGraw",
        parkAreasId: 6
    }, {
        id: 3,
        firstName: "Garth",
        lastName: "Brooks",
        parkAreasId: 2
    }, {
        id: 4,
        firstName: "Carrie",
        lastName: "Underwood",
        parkAreasId: 5
    }, {
        id: 5,
        firstName: "Luke",
        lastName: "Bryan",
        parkAreasId: 2
    }, {
        id: 6,
        firstName: "Blake",
        lastName: "Shelton",
        parkAreasId: 4
    }, {
        id: 7,
        firstName: "Johnny",
        lastName: "Cash",
        parkAreasId: 6
    }, {
        id: 8,
        firstName: "Keith",
        lastName: "Urban",
        parkAreasId: 5
    }, {
        id: 9,
        firstName: "Chris",
        lastName: "Stapleton",
        parkAreasId: 1
    }, {
        id: 10,
        firstName: "Luke",
        lastName: "Combs",
        parkAreasId: 3
    }, {
        id: 11,
        firstName: "Dolly",
        lastName: "Parton",
        parkAreasId: 6
    }, {
        id: 12,
        firstName: "Willie",
        lastName: "Nelson",
        parkAreasId: 5
    }, {
        id: 13,
        firstName: "Alan",
        lastName: "Jackson",
        parkAreasId: 3
    }, {
        id: 14,
        firstName: "Brad",
        lastName: "Paisley",
        parkAreasId: 1
    }, {
        id: 15,
        firstName: "Miranda",
        lastName: "Lambert",
        parkAreasId: 4
    }],
    services: [{
        id: 1,
        title: "Rafting"
    }, {
        id: 2,
        title: "Canoeing"
    }, {
        id: 3,
        title: "Fishing"
    }, {
        id: 4,
        title: "Hiking"
    }, {
        id: 5,
        title: "Picnicking"
    }, {
        id: 6,
        title: "Rock Climbing"
    }, {
        id: 7,
        title: "Lodging"
    }, {
        id: 8,
        title: "Parking"
    }, {
        id: 9,
        title: "Information"
    }, {
        id: 10,
        title: "Zip-Lines"
    }],
    parkAreasServices: [
        { id: 1, parkAreasId: 1, serviceId: 1 },
        { id: 2, parkAreasId: 1, serviceId: 2 },
        { id: 3, parkAreasId: 1, serviceId: 3 },
        { id: 4, parkAreasId: 2, serviceId: 4 },
        { id: 5, parkAreasId: 2, serviceId: 5 },
        { id: 6, parkAreasId: 2, serviceId: 6 },
        { id: 7, parkAreasId: 3, serviceId: 7 },
        { id: 8, parkAreasId: 3, serviceId: 8 },
        { id: 9, parkAreasId: 3, serviceId: 9 },
        { id: 10, parkAreasId: 3, serviceId: 5 },
        { id: 11, parkAreasId: 4, serviceId: 3 },
        { id: 12, parkAreasId: 4, serviceId: 4 },
        { id: 13, parkAreasId: 5, serviceId: 9 },
        { id: 14, parkAreasId: 5, serviceId: 8 },
        { id: 15, parkAreasId: 5, serviceId: 7 },
        { id: 16, parkAreasId: 6, serviceId: 4 },
        { id: 17, parkAreasId: 6, serviceId: 5 },
        { id: 18, parkAreasId: 6, serviceId: 10 },
    ],
    amenities: [
        { id: 1, title: "Hotel" },
        { id: 2, title: "Restaurant" },
        { id: 3, title: "Office Park" },
        { id: 4, title: "Children's Play Area" }
    ]
}

export const getParkAreas = () => {
    return database.parkAreas.map(area =>({...area}))
}

export const getGuests = () => {
    return database.guests.map(guest =>({...guest}))
}

export const getServices = () => {
    return database.services.map(service =>({...service}))
}

export const getParkAreasServices = () => {
    return database.parkAreasServices.map(areaServices =>({...areaServices}))
}

export const getAmenities = () => {
    return database.amenities.map(amenity =>({...amenity}))
}




