// O(n) time | O(n) space
const caesarCipherEncryptor = (string, key) => {
    const newLetters = [];
    const newKey = key % 26;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    for (const letter of string) {
        newLetters.push(getNewLetter(letter, newKey, alphabet));
    }
    return newLetters.join('');
}

const getNewLetter = (letter, key, alphabet) => {
    const newLetterCode = alphabet.indexOf(letter) + key;
    return alphabet[newLetterCode % 26]
}