document.addEventListener('DOMContentLoaded', function () {
    // Define your transliteration dictionary
    const transliterationDict = {
        'A': 'А', 'a': 'а',
        'I': 'И', 'i': 'и',
        'Í': 'Ы', 'í': 'ы',
        'U': 'У', 'u': 'у',
        'E': 'Е', 'e': 'е',
        'À': 'Э', 'à': 'э',
        'Ë': 'Ё', 'ë': 'ё',
        'O': 'О', 'o': 'о',
        'Ö': 'О̄', 'ö': 'о̄',
        'J': 'Й', 'j': 'й',
        'L': 'Л', 'l': 'л',
        'R': 'Р', 'r': 'р',
        'M': 'М', 'm': 'м',
        'N': 'Н', 'n': 'н',
        'P': 'П', 'p': 'п',
        'T': 'Т', 't': 'т',
        'K': 'К', 'k': 'к',
        'C': 'Ц', 'c': 'ц',
        '´D': 'Җ', '´d': 'җ',
        '´T': 'Ѳ', '´t': 'ѳ',
        'D': 'Д', 'd': 'д',
        'S': 'С', 's': 'с',
        'Z': 'З', 'z': 'з',
        '´S': 'Ш', '´s': 'ш',
        '`Z': 'Ж', '`z': 'ж',
        '`S': 'Щ', '`s': 'щ',
        '´Z': 'З́', '´z': 'з́',
        'X': 'Х', 'x': 'х',
        'H': 'Ҳ', 'h': 'ҳ',
        '´J': 'Я', '´j': 'я',
        '`J': 'Ю', '`j': 'ю',
        'Ý': 'Ү', 'ý': 'ү',
        'G': 'Г', 'g': 'г'
    };

    const inputBox = document.getElementById('inputBox');
    const outputBox = document.getElementById('outputBox');
    let currentDeadkey = '';

    inputBox.addEventListener('input', function () {
        const inputText = inputBox.value;
        let outputText = '';

        for (let i = 0; i < inputText.length; i++) {
            const char = inputText[i];
            if (char === '´' || char === '`') {
                // If it's a deadkey, store it for later use
                currentDeadkey = char;
            } else {
                const key = currentDeadkey + char;
                const translatedChar = transliterationDict[key] || transliterationDict[char] || key;
                outputText += translatedChar;
                currentDeadkey = ''; // Reset the deadkey
            }
        }

        outputBox.textContent = outputText;
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const translitContainer = document.getElementById('translitContainer');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        // Toggle the "hidden" class on the translitContainer
        translitContainer.classList.toggle('hidden');
    });

    // Your transliteration code (as previously provided) goes here
});

    /*
<button id="toggleButton">Toggle Translitbox</button>
    <div id="translitContainer" class="translitbox">
        <input type="text" id="inputBox" placeholder="Type here...">
        <p id="outputBox"></p>
    </div>

    <div class="live-translitbox"><button id="toggleButton">Toggle Transliteration Box</button></div>

    */
    