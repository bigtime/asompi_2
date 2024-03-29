// O(m * (n + m)) time | O(1) space - where n is the number
// of characters and m is the length of the document

const generateDocument = (characters, document) => {
    for (const character of document) {
        const documentFrequency = countCharacterFrequency(character, document);
        const charactersFrequency = countCharacterFrequency(character, characters);
        if (documentFrequency > charactersFrequency) return false;
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