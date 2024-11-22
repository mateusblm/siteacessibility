document.addEventListener("DOMContentLoaded", () => {
    const loadSettings = () => {
        if (localStorage.getItem("daltonismo") === "true") document.body.classList.add("daltonismo");
        if (localStorage.getItem("darkMode") === "true") document.body.classList.add("dark-mode");
        if (localStorage.getItem("highContrast") === "true") document.body.classList.add("high-contrast");
        if (localStorage.getItem("spacing") === "true") document.body.classList.add("spacing");
        if (localStorage.getItem("fontSize")) document.body.style.fontSize = `${localStorage.getItem("fontSize")}px`;
        if (localStorage.getItem("largeCursor") === "true") document.body.classList.add("large-cursor");
        if (localStorage.getItem("keyboardNavigation") === "true") document.body.classList.add("keyboard-navigation");
 
        // Carregar o estado do checkbox TTS
        const ttsCheckbox = document.getElementById("tts");
        if (ttsCheckbox) {
            ttsCheckbox.checked = localStorage.getItem("tts") === "true";
        }
    };

    const handleMouseOver = (e) => {
        if (e.target.innerText) {
            const utterance = new SpeechSynthesisUtterance(e.target.innerText);
            speechSynthesis.speak(utterance);
        }
    };

    const saveSettings = () => {
        const daltonismoMode = document.getElementById("daltonismoMode")?.checked || false;
        const darkMode = document.getElementById("darkMode")?.checked || false;
        const highContrast = document.getElementById("highContrast")?.checked || false;
        const spacing = document.getElementById("spacing")?.checked || false;
        const fontSize = document.getElementById("fontSize")?.value || "16";
        const tts = document.getElementById("tts")?.checked || false;
        const largeCursor = document.getElementById("largeCursor")?.checked || false;
        const autoSubtitles = document.getElementById("autoSubtitles")?.checked || false;
        const keyboardNavigation = document.getElementById("keyboardNavigation")?.checked || false;

        document.body.classList.toggle("daltonismo", daltonismoMode);
        document.body.classList.toggle("dark-mode", darkMode);
        document.body.classList.toggle("high-contrast", highContrast);
        document.body.classList.toggle("spacing", spacing);
        document.body.style.fontSize = `${fontSize}px`;

        document.body.classList.toggle("large-cursor", largeCursor);
        document.body.classList.toggle("keyboard-navigation", keyboardNavigation);

        localStorage.setItem("daltonismo", daltonismoMode);
        localStorage.setItem("darkMode", darkMode);
        localStorage.setItem("highContrast", highContrast);
        localStorage.setItem("spacing", spacing);
        localStorage.setItem("fontSize", fontSize);
        localStorage.setItem("tts", tts);
        localStorage.setItem("largeCursor", largeCursor);
        localStorage.setItem("autoSubtitles", autoSubtitles);
        localStorage.setItem("keyboardNavigation", keyboardNavigation);

        // Ativar ou desativar TTS
        if (tts) {
            document.body.addEventListener("mouseover", handleMouseOver);
        } else {
            // Parar qualquer fala em andamento e remover o evento
            speechSynthesis.cancel();
            document.body.removeEventListener("mouseover", handleMouseOver);
        }
    };

    const applySettingsButton = document.getElementById("applySettings");
    if (applySettingsButton) {
        applySettingsButton.addEventListener("click", saveSettings);
    }

    loadSettings();
});
