import { speakWord, stopSpeech } from "../../services/audio.js";

export function showEntry(book, index) {
    const entry = book.entries[index];
    const pronunciation = entry.pronunciation || "";

    document.querySelector("#book-name").textContent = book.name;
    document.querySelector("#practice-word").textContent = entry.word;
    document.querySelector("#pronunciation").textContent = pronunciation.trim() || "Pronunciation guide not supplied";
    document.querySelector("#position").textContent = `Item ${index + 1} of ${book.entries.length}`;
}

export function startStudy(book) {
    let index = 0;
    const previous = document.querySelector("#previous");
    const next = document.querySelector("#next");
    const listen = document.querySelector("#listen");
    const status = document.querySelector("#status");

    function render() {
        stopSpeech();
        status.textContent = "";
        showEntry(book, index);
        previous.disabled = index === 0;
        next.disabled = index === book.entries.length - 1;
    }

    function showAuditError() {
        status.textContent =
            "Audio could not play. You can still use Previous and Next.";
    }

    previous.addEventListener("click", () => {
        if (index > 0) {
            index -= 1;
            render();
        }
    });

    next.addEventListener("click", () => {
        if (index < book.entries.length - 1) {
            index += 1;
            render();
        }
    });

    listen.addEventListener("click", () => {
        status.textContent = "";
        try {
            speakWord(book.entries[index].word, showAuditError);
        } catch (error) {
            showAuditError();
            console.error(error);
        }
    });

    listen.disabled = false;
    render();
}