const facts = [
    {
        preview: "We know more about the surface of the moon than the ocean floor;",
        fullSentence: "more than 80% of the ocean remains unexplored... what do you think is down there?!",
    },
    {
        preview: "Underwater waterfalls exist;",
        fullSentence: "in certain areas, cold, dense water cascades down into the depths, creating an underwater waterfall effect.",
    },
    {
        preview: "A single drop of ocean water can hold millions of bacteria and viruses;",
        fullSentence: "oceans are full of microbial life, many of which are essential to nutrient cycling and marine ecosystems... that's why it's always important to drink filtered water.",
    },
    {
        preview: "Marine mammals like whales can communicate over huge distances;",
        fullSentence: "sound travels faster and further in water than in air, letting whales and other marine creatures talk from miles apart.",
    },
    {
        preview: "Octopuses have three hearts;",
        fullSentence: "two pump blood to their gills, while the third pumps it to the rest of their body.",
    },
    {
        preview: "Rogue waves are real;",
        fullSentence: "these sudden, towering waves can reach up to 100 feet and were once thought to be mythical.",
    },
    {
        preview: "Sharks are older than trees;",
        fullSentence: "sharks have been around for 400 million years, predating the earliest known trees, which appeared about 350 million years ago.",
    },
    {
        preview: "Jellyfish predate dinosaurs;",
        fullSentence: "jellyfish have been around for 500 million years and have been drifting in oceans since before dinosaurs... even before the continents we know today were formed!",
    },
    {
        preview: "Some fish can change gender;",
        fullSentence: "species like clownfish can switch from male to female or vice-versa as needed, often due to social dynamics in their groups.",
    },
    {
        preview: "Coral reefs are home to 25% of marine species;",
        fullSentence: "despite covering less than 1% of the ocean floor, coral reefs support a quarter of all marine life, making them essential to coean biodiversity.",
    },
    {
        preview: "The largest migration on Earth happens in the ocean;",
        fullSentence: "every night, billions of tiny sea creatures called zooplankton migrate from deep waters to the surface, creating thelargest known migration in terms of biomass.",
    },
    {
        preview: "Seahorses are the only fish with a prehensile tail;",
        fullSentence: "unlike most fish, seahorses can use their tails to grab objects, like seaweed, to stay anchored in the current.",
    },
    {
        preview: "Seagrass is the only underwater plant capable of producing flowers;",
        fullSentence: "unlike algae, seagrasses are true flowering plants that can reproduce underwater, providing essential habitats for marine life... i wonder if they smell nice, might make a perfume",
    },
    {
        preview: "Dolphins have unique names for each other;",
        fullSentence: "dolphins use signature whistles to identify and call each other, acting much like human names do in comunication.",
    },
    {
        preview: "Tsunamis can travel at speeds over 500 miles per hour;",
        fullSentence: "in deep water, tsunami waves are nearly imperceptible but can grow to immense heights as they approach shore.",
    },
    {
        preview: "Some fish can \"walk\" on land;",
        fullSentence: "the mudskipper is a fish that can spend time on land, using its pectoral fins to propel itself and has the ability to breathe through its skin.",
    },
    {
        preview: "Most of the Earth's volcanic activity happens underwater;",
        fullSentence: "about 75% of volcanic eruptions occur on the ocean floor, contributing significantly to ocean floor formation and development of marine ecosystems.",
    },
    {
        preview: "Starfish can regenerate lost arms;",
        fullSentence: "if a starfish loses an arm, it can grow back... and in some cases, the lost arm can develop into a new starfish.",
    },
    {
        preview: "Oysters can filter water;",
        fullSentence: "oysters can filter up to 50 gallons of water a day, helping to maintain healthy water conditions in their environments... give it up for oysters!",
    },
    {
        preview: "The ocean is a major carbon sink;",
        fullSentence: "the ocean absorbs about 30% of the carbon dioxide produced by humans, helping to mitigate climate change effects... however, due to certain human activities, they barely absorbed any last year! Go talk to Marine Conservation Whale to know more.",
    },
    {
        preview: "The largest volcano in the world is underwater;",
        fullSentence: "Mauna Kea in Hawaii rises over 33,500 feet from base to summit, when measuring base on the ocean floor, making it the tallest volcano in the world.",
    },
    {
        preview: "Many fish can see UV light;",
        fullSentence: "many fish have eyes that can perceive UV light to help them see better in murky water and find food.",
    },
    {
        preview: "Whales have unique songs;",
        fullSentence: "humpback whales sing complex songs that can last up to 20 minutes, with each population having distinct variations... sing us a song, marine conservation whale!",
    }
];

    //Ouch. Anyways, Facts Over.

const conservation = [
    "I'm the Marine Conservation Whale!",
    "Click on me to know how to help our oceans.",
    "*Silly whale noises*",
    "Do you want to know some fun facts of the ocean? Talk to Fun Fact Shark!",
    "Marine life and oceans are so important!",
    "Do you like the oceans?!"
];

function getFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function getConservation() {
    const randomIndex = Math.floor(Math.random() * conservation.length);
    return conservation[randomIndex];
}

    //Give FF Shark and MC Whale their Lines.

window.onload = function() {
    document.getElementById('conservation').textContent = getConservation();
    const fact = getFact();
    const funFactElement = document.getElementById('fun-fact');
    funFactElement.textContent = fact.preview;
    
    funFactElement.onclick = function(event) {
        event.stopPropagation();
    
        if (funFactElement.textContent === fact.preview) {
            funFactElement.textContent = fact.fullSentence;
        } else {
            funFactElement.textContent = fact.preview;
        }
    };   
    document.onclick = function() {
        funFactElement.textContent = fact.preview;
    };
};

    //Check if any Bottles have Washed up.

function checkWashUpDate() {
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    const today = new Date();
    
    savedContentList.forEach((entry, index) => {
        const washUpDate = new Date(entry.washUpDate);

        if (
            washUpDate.getFullYear() === today.getFullYear() &&
            washUpDate.getMonth() === today.getMonth() &&
            washUpDate.getDate() === today.getDate()
        ) {
            alert(`Your message in a bottle has washed up! It was supposed to reappear today.`);
    
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('washed-up-message');
    
            messageDiv.innerHTML = `
                <div class="message">
                    <div class="bar-3">
                        <div class="message-bar">${entry.mood}</div>
                        <div class="message-bar">${entry.dateTime}</div>
                    </div>
                    <div class="messages">
                        <div class="message-header">${entry.header}</div>
                        <div class="message-content">${entry.content}</div>
                    </div>
                </div>
            `;
    
            document.body.appendChild(messageDiv);
    
            savedContentList.splice(index, 1);
            localStorage.setItem('savedContentList', JSON.stringify(savedContentList));
        }
    });
}
    

document.addEventListener('DOMContentLoaded', checkWashUpDate);