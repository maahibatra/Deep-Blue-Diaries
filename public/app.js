    //Saving Journal Entries.

function saveContent() {
    const editor = document.getElementById('editor');
    const header = document.querySelector('.editor-header').innerHTML.trim();
    const content = document.querySelector('.editor-content').innerHTML.trim();
    const mood = document.querySelector('.mood-select').value;
    const currentDateTime = document.getElementById('currentDateTime').textContent;
    const prompt = document.querySelector('.promptText').textContent;

        //Check if Fields are Filled.

    if (header === "Enter your header..." || header === "") {
        alert("Please add a header before saving!");
        return;
    }

    if (mood === "select-mood") {
        alert("Please select a mood before saving!");
        return;
    }

        //Push to localStorage.

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

    //Message in a Bottle Submission.

function throwContent() {
    const header = document.getElementById('editor-header').innerText.trim();
    const content = document.getElementById('editor-content').innerText.trim();
    const mood = document.querySelector('.mood-select').value;
    const currentDateTime = document.getElementById('currentDateTime').textContent;

        //Check if Fields are Filled.
    
    if (header === "Enter your header..." || header === "") {
        alert("Please add a header before saving!");
        return;
    }

    if (mood === "select-mood") {
        alert("Please select a mood before saving!");
        return;
    }

        //Ask and Verify Date.

    const washUpDate = prompt("When will your bottle hit land? (Please use the format YYYY-MM-DD)");

    if (!washUpDate) {
        alert("Please select a valid date.");
        return;
    }

    const today = new Date();
    const futureDate = new Date(washUpDate);
    if (futureDate <= today) {
        alert("Please select a future date.");
        return;
    }

        //Push to localStorage.
    
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    savedContentList.push({
        header: header,
        content: content,
        mood: mood,
        dateTime: currentDateTime,
        washUpDate: washUpDate
    });

    localStorage.setItem('savedContentList', JSON.stringify(savedContentList));

    document.getElementById('editor-header').innerText = '';
    document.getElementById('editor-content').innerText = '';

    alert("You threw the bottle! It will wash up on: " + washUpDate);
    window.location.href = "index.html";
}

    //Render Entries.

function renderEntries() {
    const logEntriesContainer = document.getElementById('log-entries');
    logEntriesContainer.innerHTML = "";

    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];

    const reversedContentList = [...savedContentList].reverse();

    reversedContentList.forEach((entry, index) => {
        const originalIndex = savedContentList.length - 1 - index;

        const contentSnippet = entry.content.slice(0, 50) + (entry.content.length > 50 ? '...' : '');

        const entryElement = document.createElement('div');
        entryElement.classList.add('entry');

            //Add to Captain's Logs.

        entryElement.innerHTML = `
            <div class="log">
                <div class="bar-2">
                    <div class="log-bar">${entry.mood}</div>
                    <div class="log-bar">${entry.date}</div>
                    <div class="space"></div>
                    <div class="space"></div>
                    <button class="log-bar view-btn" onclick="viewEntry(${originalIndex})">View</button>
                    <button class="log-bar edit-btn" onclick="editEntry(${originalIndex})">Edit</button>
                    <button class="log-bar delete-btn" onclick="deleteEntry(${originalIndex})">Delete</button>
                </div>
                <div class="log-entry">
                    <div class="log-prompt">Prompt: ${entry.prompt}</div>
                    <div class="log-header">${entry.header}</div>
                    <div class="log-content">${contentSnippet}</div>
                </div>
            </div>
        `;

        logEntriesContainer.appendChild(entryElement);
    });
}

    //View Button.

function viewEntry(index) {
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    const entry = savedContentList[index];

    alert(`Viewing entry:\nHeader: ${entry.header || 'No Header'}\nContent: ${entry.content}`);
}

    //Edit Button.

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

    //Delete Button.

function deleteEntry(index) {
    const savedContentList = JSON.parse(localStorage.getItem('savedContentList')) || [];
    savedContentList.splice(index, 1);
    localStorage.setItem('savedContentList', JSON.stringify(savedContentList));
    renderEntries();
}

if (window.location.pathname === '/captains-log.html') {
    window.addEventListener('DOMContentLoaded', renderEntries);
}