/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */



const database = {
    fish: [
        {
            name: "Bart",
            species:"Octopus",
            food: "crustaceans",
            length: 3,
            location: "Florida",
            description:"8 arms, round head, scrappy",
            image:"https://media.istockphoto.com/id/108315796/photo/octopus-dive.jpg?s=2048x2048&w=is&k=20&c=VJR828tpiBZ1kNmNbDO8TB_X6KE94EjfOOmM5ubOL9k=",
        },
        {
            name: "Snuggles",
            species:"Clown Fish",
            food: "Kelp",
            length: 12,
            location: "Maui",
            description:"small",
            image:"https://media.istockphoto.com/id/1212886661/photo/clownfish.jpg?s=2048x2048&w=is&k=20&c=u9PQ901OxwQgaFbZFQ003adBXzSMkEeGq7KhllvJvMA=",
        },
        {
            name: "Jaws",
            species:"Algae Eater",
            food: "Algae",
            length: 6,
            location: "Walmart",
            description:"small, gross",
            image:"https://media.istockphoto.com/id/1461098526/photo/ancistrus-tropical-fish-bristlenose-catfish-on-the-glass.jpg?s=2048x2048&w=is&k=20&c=yQ9d4-IoZ-KtLMq1mRvDzPBpz5H6_CQHhoKv0mWciyI=",
        },

        {
            name: "Beelzabub",
            species:"Angel Fish",
            food: "Angel Food Cake",
            length: 3,
            location: "Parts Unknown",
            description:"Bright",
            image:"https://media.istockphoto.com/id/177095679/photo/bluering-orange-and-blue-angelfish-with-white-tail.jpg?b=1&s=612x612&w=0&k=20&c=MN2sh5b1Cqnn9p2Omf69oXoexpwQ6dlu2XmIX_0KJaA=",
        }

    ]
}
export const getFish = () => {
    return database.fish.map(copyOfSingleFishObject => ({...copyOfSingleFishObject}))
}