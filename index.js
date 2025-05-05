const textInput = document.getElementById('textInput');
        const speakButton = document.getElementById('speakButton');

        speakButton.addEventListener('click', () => {
            const text = textInput.value;
            const utterance = new SpeechSynthesisUtterance(text);
            speechSynthesis.speak(utterance);
        });