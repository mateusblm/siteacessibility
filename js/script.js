document.addEventListener("DOMContentLoaded", () => {
    const loadSettings = () => {
        if (localStorage.getItem("daltonismo") === "true") document.body.classList.add("daltonismo");
        if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");
        if (localStorage.getItem("highContrast") === "true") document.body.classList.add("high-contrast");
        if (localStorage.getItem("spacing") === "true") document.body.classList.add("spacing");
        if (localStorage.getItem("fontSize")) document.body.style.fontSize = `${localStorage.getItem("fontSize")}px`;


        if (localStorage.getItem("tts") === "true") {
            document.body.addEventListener("mouseover", (e) => {
                if (e.target.innerText) {
                    const utterance = new SpeechSynthesisUtterance(e.target.innerText);
                    speechSynthesis.speak(utterance);
                }
            });
        }
        if (localStorage.getItem("largeCursor") === "true") document.body.classList.add("large-cursor");

        if (localStorage.getItem("keyboardNavigation") === "true") document.body.classList.add("keyboard-navigation");
    };

    const saveSettings = () => {
        const daltonismoMode = document.getElementById("daltonismoMode")?.checked || false;
        const darkMode = document.getElementById("darkMode")?.checked || false;
        const highContrast = document.getElementById("highContrast")?.checked || false;
        const spacing = document.getElementById("spacing")?.checked || false;
        const feedback = document.getElementById("feedback")?.checked || false;
        const fontSize = document.getElementById("fontSize")?.value || "16";
        const tts = document.getElementById("tts")?.checked || false;
        const simplifiedReading = document.getElementById("simplifiedReading")?.checked || false;
        const textToSpeech = document.getElementById("textToSpeech")?.checked || false;
        const largeCursor = document.getElementById("largeCursor")?.checked || false;
        const autoSubtitles = document.getElementById("autoSubtitles")?.checked || false;
        const keyboardNavigation = document.getElementById("keyboardNavigation")?.checked || false;

        document.body.classList.toggle("daltonismo", daltonismoMode);
        document.body.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("high-contrast", highContrast);
        document.body.classList.toggle("spacing", spacing);
        document.body.style.fontSize = `${fontSize}px`;

        document.body.classList.toggle("simplified-reading", simplifiedReading);
        document.body.classList.toggle("large-cursor", largeCursor);
        document.body.classList.toggle("keyboard-navigation", keyboardNavigation);

        localStorage.setItem("daltonismo", daltonismoMode);
        localStorage.setItem("darkMode", darkMode);
        localStorage.setItem("highContrast", highContrast);
        localStorage.setItem("spacing", spacing);
        localStorage.setItem("feedback", feedback);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("tts", tts);

        localStorage.setItem("simplifiedReading", simplifiedReading);
        localStorage.setItem("textToSpeech", textToSpeech);
        localStorage.setItem("largeCursor", largeCursor);
        localStorage.setItem("autoSubtitles", autoSubtitles);
        localStorage.setItem("keyboardNavigation", keyboardNavigation);
    };

    const applySettingsButton = document.getElementById("applySettings");
    if (applySettingsButton) {
        applySettingsButton.addEventListener("click", saveSettings);
    }

    loadSettings();
});