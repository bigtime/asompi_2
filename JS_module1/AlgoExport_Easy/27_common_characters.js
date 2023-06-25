// O(n * m) time | O(c) space - where n is the number of strings, 
// m is the length of the longest string, 
// and c is the number of unique characters across all strings


const commonCharacters = (strings) => {
    const characterCounts = {};
    for (const string of strings) {
        const uniqueStringCharacters = new Set(string);
        for (const character of uniqueStringCharacters) {
            if (!(character in characterCounts)) {
                characterCounts[character] = 0;
            }
            characterCounts[character]++;
        }
    }

    const finalCharacters = [];
    for (const [character, count] of Object.entries(characterCounts)) {
        if (count === strings.length) {
            finalCharacters.push(character);
        }
    }
    return finalCharacters;
}