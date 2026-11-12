let currentSpeech = null;

export function stopSpeech() {
    currentSpeech = null;
    if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
    }

}

export function speakWord(text, onError) {
    stopSpeech();
    if (!window.speechSynthesis || !window.SpeechSynthesisUtterance) {
        throw new Error("Speech playback is unavailable");
    }

    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = "en-GB";
    currentSpeech = utterance;

    utterance.onerror = () => {
        if (currentSpeech !== utterance) return;
        currentSpeech = null;
        onError();
    };

    utterance.onend = () => {
        if (currentSpeech === utterance) currentSpeech = null;
    };

    try {
        window.speechSynthesis.speak(utterance);
    } catch (error) {
        currentSpeech = null;
        throw error;
    }

}