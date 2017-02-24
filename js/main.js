/**
 * Morse Code Translator
 *
 * Letters should be broken up with a space.
 * Feel free to use any process for differentiating the space between letters and words
 *     I recommend something like a / or | between words; ie 'DOG CAT' => '-.. --- --. / -.- .- -'
 */

function translate(text) {
    return text;
}

function setOutput() {
    var input = document.getElementById("text-to-convert");
    var output = document.getElementById("result-content");

    output.innerHTML = translate(input.value);
}

var el = document.getElementById("submit-button");
el.addEventListener("click", setOutput);
