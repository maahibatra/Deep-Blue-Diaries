const facts = [
    "Hello, I am a speaking image!",
    "This is the random line number 2.",
    "What is your favorite color?",
    "The image is speaking again!",
    "Do you like the weather today?",
    "Here comes another random line!"
]

const conservation = [
    "Hello, I am a speaking image!",
    "This is the random line number 2.",
    "What is your favorite color?",
    "The image is speaking again!",
    "Do you like the weather today?",
    "Here comes another random line!"
];

function getFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function getConservation() {
    const randomIndex = Math.floor(Math.random() * conservation.length);
    return conservation[randomIndex];
}

window.onload = function() {
    document.getElementById('conservation').textContent = getConservation();
    document.getElementById('fun-fact').textContent = getFact();
};

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

            savedContentList.splice(index, 1);

            localStorage.setItem('savedContentList', JSON.stringify(savedContentList));
        }
    });
}

document.addEventListener('DOMContentLoaded', checkWashUpDate);