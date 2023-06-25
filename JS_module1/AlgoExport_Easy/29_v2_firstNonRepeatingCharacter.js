// O(n) time | O(1) space - where n is the length of the input string
// the constant space is because the input string only has lowercase 
// English-alphabet letters; thus, our hash table will never have more
// than 26 character frequencies.

const firstNonRepeatingCharacter = (string) => {
    const characterFrequencies = {};

    for (const character of string) {
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0;
        characterFrequencies[character]++;
    }

    for (let idx = 0; idx < string.length; idx++) {
        const character = string[idx];
        if (characterFrequencies[character] === 1) return idx;
    }

    return -1;
}