const shadowPrompts = [
    "Reflect on a recent period of change in your life. How did you adapt to the “waves” that came your way? What did you learn about yourself through this transition?",
    "The ocean holds hidden treasures. Reflect on a challenging experience that, in hindsight, turned out to be valuable. What “treasure” did you find?",
    "Just as much of the ocean is still unexplored, there are parts of ourselves we may not fully understand. What's one mystery about yourself you'd like to explore? How can you be more curious and accepting of your unknown sides?",
    "The ocean often reflects the sky above it. What aspects of your environment or relationships reflect your current state of mind? How might you change your surroundings to reflect your aspirations?",
    "Just as the ocean has tides, life has cycles of highs and lows. Reflect on a recent “low tide” and what it taught you about resilience or patience. How did it prepare you for the “high tide” that followed?",
    "Like the deep ocean, which remains calm despite surface storms, consider a time when you found inner calm in the face of chaos. How did you achieve it, and what helped you stay grounded?",
    "At this moment, do you feel like you're drifting aimlessly or anchored with purpose? What are some things that give you a sense of direction and stability?",
    "Reflect on a time when you felt “pulled” in a particular direction by life's circumstances. Did you resist or go with the flow? How did it impact your journey?",
    "Think about something you keep hidden, like a secret reef or a deep sea trench. Why do you keep it buried? How would sharing or exploring it change things?",
    "The ocean is vast and directionless without a compass. What internal “compass” guides your decisions? When have you relied on it, and where has it taken you?",
    "Reflect on a chapter of your life that you've left behind, like departing a familiar shore. What did you learn there, and how did it prepare you for what lay ahead?",
    "The ocean speaks in many ways, from crashing waves to quiet depths. What part of yourself do you keep quiet, like the ocean's depths? How can you give it a voice?",
    "Waves can feel overwhelming, but they also lift you if you learn to ride them. What's a recent wave of emotion or challenge you've faced, and how did it change you?",
    "Even the smallest pebble makes ripples in the water. Think of a recent small action or decision you made. What ripples did it create in your life or in others' lives?",
    "Think about a time when you took a risk or stepped into unfamiliar territory. What did you discover? How has it shaped your perspective on uncertainty and personal growth?"
];

    //Ouch, again. Shadow Prompts Over.

function getRandomPrompt() {
    const randomIndex = Math.floor(Math.random() * shadowPrompts.length);
    return shadowPrompts[randomIndex];
}

    //Give Prompt Area a Prompt.

window.addEventListener('DOMContentLoaded', () => {
    const promptTextElement = document.getElementById('promptText');
    if (promptTextElement) {
        if (document.location.pathname.includes('shadow-prompt.html')) {
            promptTextElement.textContent = getRandomPrompt();
        }
    }
});

    //Formatting for Editor.

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

    //Clock.

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

    //Placeholder for Editor.

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