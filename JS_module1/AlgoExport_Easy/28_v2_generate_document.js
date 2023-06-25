// O(c * (n + m)) time | O(c) space - where n is the number of characters, m is 
// the length of the document, and c is the number of unique characters in the document

const generateDocument = (characters, document) => {
    const alreadyCounted = new Set();

    for (const character of document) {
        if (character in alreadyCounted) continue;

        const documentFrequency = countCharacterFrequency(character, document);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;

        alreadyCounted.add(character);
    }

    return true;
}

const countCharacterFrequency = (character, target) => {
    let frequency = 0;
    for (const char of target) {
        if (char === character) frequency++;
    }
    return frequency;
}