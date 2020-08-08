document.addEventListener('DOMContentLoaded', () => {
    let enableCheckboxes;
    let linkInputs;
    let descInputs;
    let modeRadio;
    let count;

    function loadEventHandlers() {
        enableCheckboxes = document.getElementsByName("link-enabled");
        linkInputs = document.getElementsByName("link-url");
        descInputs = document.getElementsByName("link-desc");
        modeRadio = document.getElementsByName("mode");
        count = enableCheckboxes.length;

        const resetButtons = document.getElementsByName("link-reset");
        for(let idx = 0; idx < count; idx++) {
            resetButtons[idx].addEventListener('click', onResetRowClick);
            linkInputs[idx].addEventListener('blur', onURLChange);
        }

        document.getElementById("save-links").addEventListener('click', onSaveLinksClick);
        document.getElementById("reset-links").addEventListener('click', onResetLinksClick);
        document.getElementById("save-settings").addEventListener('click', onSaveSettings);
    }

    function loadData() {
        for(let idx = 0; idx < count; idx++) {
            loadRow(idx);
        }
    };

    function loadRow(idx) {
        const value = localStorage.getItem('row-' + idx);
        const valueObj = value ? JSON.parse(value) : { enabled: false, url: '', desc: '' };
        enableCheckboxes[idx].checked = valueObj.enabled;
        linkInputs[idx].value = valueObj.url;
        descInputs[idx].value = valueObj.desc;
    }

    function saveData() {
        for(let idx = 0; idx < count; idx++) {
            saveRow(idx);
        }
        localStorage.setItem('count', count);
    }

    function saveRow(idx) {
        const valueObj = {
            enabled: enableCheckboxes[idx].checked,
            url: linkInputs[idx].value,
            desc: descInputs[idx].value
        };
        localStorage.setItem('row-' + idx, JSON.stringify(valueObj));
    }

    function getRowNum(e) {
        return e.target.getAttribute('num');
    }

    function onResetRowClick(e) {
        const idx = getRowNum(e);
        enableCheckboxes[idx].checked = false;
        linkInputs[idx].value = '';
        descInputs[idx].value = '';
    };

    function onSaveLinksClick(e) {
        saveData();
        hideSaveWarning();
    }

    function onResetLinksClick(e) {
        for(let idx = 0; idx < count; idx++) {
            localStorage.setItem('row-' + idx, undefined);
        }
        loadData();
    }

    function onURLChange(e) {
        const row = getRowNum(e);
        if (e.target.value) {
            enableCheckboxes[row].checked = true;
        } else {
            enableCheckboxes[row].checked = false;
        }
    }

    function loadSettings() {
        const mode = localStorage.getItem("mode");
        let idx = 0; // list
        switch(mode) {
            case 'random':
                idx = 1;
                break;
            case 'increment':
                idx = 2;
                break;
        }
        modeRadio[idx].checked = true;
    }

    function onSaveSettings(e) {
        for (let i = 0; i < 3; i++) {
            if (modeRadio[i].checked) {
                localStorage.setItem('mode', modeRadio[0].value)
            }
        }
    }

    loadEventHandlers();
    loadData();
    loadSettings();
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
