let isContentChanged = false;

const editor = document.getElementById('editor');
editor.addEventListener('input', () => {
    isContentChanged = true;
});

window.addEventListener('beforeunload', (event) => {
    if (isContentChanged) {
        const message = "You have unsaved content. Are you sure you want to leave without saving?";
        
        event.returnValue = message;
        
        return message;
    }
});

function saveContent() {
    const editor = document.getElementById('editor');
    const header = document.querySelector('.editor-header').innerHTML.trim();
    const content = document.querySelector('.editor-content').innerHTML.trim();
    const mood = document.querySelector('.mood-select').value;
    const currentDateTime = document.getElementById('currentDateTime').textContent;
    const prompt = document.querySelector('.prompt-select') ? document.querySelector('.prompt-select').value : "No prompt.";

    if (content === "Type your text here...") {
        alert("Please write something before saving!");
        return;
    }

    if (mood === "select-mood") {
        alert("Please select a mood before saving!");
        return;
    }

    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    savedContentList.push({
        header: header,
        content: content, 
        mood: mood, 
        date: currentDateTime,
        prompt: prompt
    });

    localStorage.setItem('savedContentList', JSON.stringify(savedContentList));
    editor.innerHTML = "Type your text here...";
    document.querySelector('.mood-select').value = "select-mood";

    window.location.href = "index.html";
    isContentChanged = false;
}

function renderEntries() {
    const logEntriesContainer = document.getElementById('log-entries');
    logEntriesContainer.innerHTML = "";

    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];

    const reversedContentList = [...savedContentList].reverse();

    reversedContentList.forEach((entry, index) => {
        const originalIndex = savedContentList.length - 1 - index;

        const contentSnippet = entry.content.slice(0, 150) + (entry.content.length > 150 ? '...' : '');

        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');

        entryElement.innerHTML = `
            <div class="log">
                <div class="bar-2">
                    <div class="log-bar">${entry.prompt}</div>
                    <div class="log-bar">${entry.mood}</div>
                    <div class="log-bar">${entry.dateTime}</div>
                </div>
                <div class="log-entry">
                    <div class="log-header">${entry.header || 'No Header'}</div>
                    <div class="log-content">${contentSnippet}</div>
                    <div class="entry-actions">
                        <button class="view-btn" onclick="viewEntry(${originalIndex})">View</button>
                        <button class="edit-btn" onclick="editEntry(${originalIndex})">Edit</button>
                        <button class="delete-btn" onclick="deleteEntry(${originalIndex})">Delete</button>
                    </div>
                </div>
            </div>
        `;

        logEntriesContainer.appendChild(entryElement);
    });
}

function viewEntry(index) {
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    const entry = savedContentList[index];

    alert(`Viewing entry:\nHeader: ${entry.header || 'No Header'}\nContent: ${entry.content}`);
}

function editEntry(index) {
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    const entry = savedContentList[index];

    const newContent = prompt("Edit your entry:", entry.content);
    if (newContent !== null && newContent !== "") {
        savedContentList[index].content = newContent;
        localStorage.setItem('savedContentList', JSON.stringify(savedContentList));
        renderEntries();
    }
}

function deleteEntry(index) {
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    savedContentList.splice(index, 1);
    localStorage.setItem('savedContentList', JSON.stringify(savedContentList));
    renderEntries();
}

window.addEventListener('DOMContentLoaded', renderEntries);

window.addEventListener('DOMContentLoaded', renderEntries);