// O(n * m) time | O(n * m) space - where n is the number of words and
// m is the length of the longest word

const semordnilap = (words) => {
    const wordsSet = new Set(words);
    const semordnilapPairs = [];

    for (const word of words) {
        const reverse = word.split('').reverse().join('');
        if (wordsSet.has(reverse) && reverse !== word) {
            semordnilapPairs.push([word, reverse]);
            wordsSet.delete(word);
            wordsSet.delete(reverse);
        }
    }
    return semordnilapPairs;
}