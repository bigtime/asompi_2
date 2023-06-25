// O(n + m) time | O(c) space - where n is the number of characters, m is
// the length of the document, and c is the number of unique characters in the characters string

const generateDocument = (characters, document) => {
    const characterCounts = {};

    for (const character of characters) {
        if (!(character in characterCounts)) characterCounts[character] = 0;
        characterCounts[character]++;
    }

    for (const character of document) {
        if (!(character in characterCounts) || characterCounts[character] === 0) return false;

        characterCounts[character]--;
    }
    return true;
}