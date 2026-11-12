export async function loadBook(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Workbook request faild (${response.status})`);
    }

    const book = await response.json();
    if (!book || typeof book.name !== "string" ||
    !book.name.trim() ||
    !Array.isArray(book.entries) ||
    book.entries.length === 0) {
        throw new Error("The wordbook needs a name and at least one entries are required");
    }

    for (const entry of book.entries) {
        if (!entry || typeof entry.word !== "string" ||
        !entry.word.trim()) {
            throw new Error("The wordbook needs a word or phrase is required.");
        }
        if (entry.pronunciation != null &&
        typeof entry.pronunciation !== "string" ) {
            throw new Error("A pronunciation guide must be text when supplied");
        }
    }

    return book;
}