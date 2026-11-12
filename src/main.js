import { loadBook } from "./services/books.js";
import { startStudy } from "./features/vocabulary/study.js";

const status = document.querySelector("#status");

async function start() {
    status.textContent = "Loading wordbook...";

    try {
        const book = await loadBook("/data/rs-wfd.json");
        startStudy(book);
        status.textContent = "";
    } catch (error) {
        document.querySelector("#practice-word").textContent
        = "Wordbook unavailable";
        document.querySelector("#pronunciation").textContent = "";
        document.querySelector("#position").textContent = "";
        status.textContent = "The wordbook could not be loaded";
        console.error(error);
    }
}

start();