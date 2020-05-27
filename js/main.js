/**
 * Morse Code Translator
 * 
 * Use the Letters API built for this interview:
 * https://safetybelt.pythonanywhere.com/letters/<LETTER>
 * 
 *  For example, a GET call to https://safetybelt.pythonanywhere.com/letters/s will return:
 *      {
 *          "code": "..."
 *      }
 * 
 * The API only handles one letter at a time
 *
 * Letters should be broken up with a space.
 * Feel free to use any process for differentiating the space between letters and words
 *     I recommend something like a / or | between words; ie 'dog cat' => '-.. --- --. / -.- .- -'
 *
 * Also feel free to modify this code or the HTML as much as needed.  You do not need to use this structure.
 */

function generateOutput(input) {
    const output = document.getElementById('result-content');

    // translate here

    output.innerHTML = input;
}

document.getElementById('text-input').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = document.getElementById('text-to-convert');
    generateOutput(input.value);
});
