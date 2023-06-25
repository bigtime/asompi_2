// O(n * m) time | O(m) space - where n is the number of strings, and m is the 
// length of the longest string

const commonCharacters = (strings) => {
    const smallestString = getSmallestString(strings);
    const potentialCommonCharacters = new Set(smallestString);

    for (const string of strings) {
        removeNonexistentCharacters(string, potentialCommonCharacters);
    }

    return Array.from(potentialCommonCharacters);
}

const getSmallestString = (string) => {
    let smallestString = strings[0];
    for (const string of strings) {
        if (string.length < smallestString.length) {
            smallestString = string;
        }
    }
    return smallestString;
}

const removeNonexistentCharacters = (string, potentialCommonCharacters) => {
    const uniqueStringCharacters = new Set(string);

    for (const character of Array.from(potentialCommonCharacters)) {
        if (!uniqueStringCharacters.has(character)) {
            potentialCommonCharacters.delete(character);
        }
    }
}