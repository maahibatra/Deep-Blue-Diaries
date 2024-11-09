const shadowPrompts = [
    "What is your biggest fear?",
    "Describe a moment when you felt truly at peace.",
    "What does your perfect day look like?",
    "What would you change about the world if you could?",
    "What is something you've never told anyone?"
];

function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * shadowPrompts.length);
    return shadowPrompts[randomIndex];
}

window.addEventListener('DOMContentLoaded', () => {
    const promptTextElement = document.getElementById('promptText');
    if (promptTextElement) {
        // Only set the prompt on shadow-prompt.html
        if (document.location.pathname.includes('shadow-prompt.html')) {
            promptTextElement.textContent = getRandomPrompt();
        }
    }
});

function applyFormat(command) {
    const editorContent = document.getElementById('editor-content');
    editorContent.focus();

    switch (command) {
        case 'bold':
            document.execCommand('bold', false, null);
            break;
        case 'italic':
            document.execCommand('italic', false, null);
            break;
        case 'underline':
            document.execCommand('underline', false, null); // Apply underline
            break;
        case 'list':
            document.execCommand('insertUnorderedList', false, null);
            break;
    }
}

function updateDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('currentDateTime').textContent = `${year}-${month}-${day} / ${hours}:${minutes}:${seconds}`;
}

setInterval(updateDateTime, 1000);
updateDateTime();

document.addEventListener('DOMContentLoaded', () => {
    const editorHeader = document.getElementById('editor-header');
    const editorContent = document.getElementById('editor-content');
    
    const headerPlaceholderText = "Enter your header...";
    const contentPlaceholderText = "Type your content here...";
    
    const isShadowPrompt = document.querySelector('.shadow-prompt') !== null;

    if (!isShadowPrompt) {
        editorHeader.innerHTML = headerPlaceholderText;
        editorContent.innerHTML = contentPlaceholderText;
    }

    editorHeader.addEventListener('focus', function() {
        if (editorHeader.innerHTML === headerPlaceholderText) {
            editorHeader.innerHTML = '';
        }
    });

    editorHeader.addEventListener('blur', function() {
        if (editorHeader.innerHTML.trim() === '') {
            editorHeader.innerHTML = headerPlaceholderText;
        }
    });

    editorContent.addEventListener('focus', function() {
        if (editorContent.innerHTML === contentPlaceholderText) {
            editorContent.innerHTML = '';
        }
    });

    editorContent.addEventListener('blur', function() {
        if (editorContent.innerHTML.trim() === '') {
            editorContent.innerHTML = contentPlaceholderText;
        }
    });
});