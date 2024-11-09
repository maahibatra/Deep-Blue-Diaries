const entries = [
    {
        prompt: "This is a prompt.",
        mood: "Reflective",
        clock: "2024-11-08 / 22:11:06",
        header: "header",
        content: "Today, I thought a lot about the vastness of the ocean and how it mirrors life..."
    },
    {
        prompt: "This is also a prompt.",
        mood: "Calm",
        clock: "2024-11-07 / 01:08:16",
        header: "also header",
        content: "The waves were gentle today, much like my thoughts as I journaled..."
    }
];

function renderEntries() {
    const logEntriesContainer = document.getElementById('log-entries');
    logEntriesContainer.innerHTML = "";

    entries.forEach(entry => {
        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');

        entryElement.innerHTML = `
            <div class="log">
                <div class="bar-2">
                    <div class="log-bar">${entry.prompt}</div>
                    <div class="log-bar">${entry.mood}</div>
                    <div class="log-bar">${entry.clock}</div>
                </div>
                <div class ="log-entry">
                    <div class="log-header">${entry.header}</div>
                    <div class="log-content">${entry.content}</div>
                </div>
            </div>
        `;

        logEntriesContainer.appendChild(entryElement);
    });
}

renderEntries();