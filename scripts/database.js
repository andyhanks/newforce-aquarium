/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */

const img = document.querySelector("img"); // this should look for fishPics
img.src = "";

const database = {
    fish: [
        {
            fishName: "Bart",
            species:"Octopus",
            food: "crustaceans",
            size: 3,
            home: "Florida",
            description:"8 arms, round head, scrappy",
            fishPic: img,
        },
        {
            fishName: "Snuggles",
            species:"Clown Fish",
            food: "Kelp",
            size: 12,
            home: "Maui",
            description:"small",
            fishPic: img,
        },
        {
            fishName: "Jaws",
            species:"Algae Eater",
            food: "Algae",
            size: 6,
            home: "Walmart",
            description:"small, gross",
            fishPic: img,
        },

        {
            fishName: "Beelzabub",
            species:"Angel Fish",
            food: "Angel Food Cake",
            size: 3,
            home: "Parts Unknown",
            description:"Bright",
            fishPic: img,
        }

    ]
}
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}