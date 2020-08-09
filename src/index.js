const { parseAndSync, parseAndClean } = require('./parse');

const UNIQUE_KEY = 'asdasdasa1-short-cuttext1232131dasdaasdsada';

document.addEventListener('DOMContentLoaded', () => {
    let shortcutsText;

    function loadEventHandlers() {
        shortcutsText = document.getElementById("shortcuts-text");
        document.getElementById("save-links").addEventListener('click', onSaveLinksClick);
        document.getElementById("reset-links").addEventListener('click', onResetLinksClick);
    }

    function onSaveLinksClick(e) {
        const txt = shortcutsText.value;
        localStorage.setItem(UNIQUE_KEY, txt);
        parseAndSync(txt);
    }

    function onResetLinksClick(e) {
        const txt = shortcutsText.value;
        parseAndClean(txt);
        localStorage.setItem(UNIQUE_KEY, '');
    }

    function loadData() {
        const txt = localStorage.getItem(UNIQUE_KEY).trim();
        if (txt.length > 0) {
            shortcutsText.value = txt;
        }
    }

    loadEventHandlers();
    loadData();
});

/**
     * How to use Event Listeners:
     * 
     * It requires 2 steps:
     * 1) We fetch the object. We need to retrieve the object from the DOM by using a document retriever. 
     * 
     * These methods are: 
     * document.getElementById()
     * document.querySelector() -- Similar to jQuery
     * document.querySelectorAll()
     * document.getElementsByClassName()
     * document.getElementsByName()
     * document.getElementsByTagName()
     * document.getElementsByTagNameNS()
     * 
     * There are more advance uses of these "retrievers", but let's keep it simple. 
     * 
     * 2) We attach the event listener:
     * We need to store the retrieved element in a variable (recommended).
     * 
     * const element = document.querySelector('button');
     * 
     * Then we attach the event listener:
     * element.addEventListener('click', myFunction);
     * 
     * Whereas myFunction is the function (without parenthesis!! Otherwise it executes it!!) that
     * you want to call. 
     * 
     * See this as the equivalent of:
     * <button click="myFunction()">My Button</button>
     * 
     * You can see the event listener list in the panel at the left in MDN:
     * https://developer.mozilla.org/en-US/docs/Web/API/EventListener
     * 
     */
