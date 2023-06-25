// O(n) time | O(n) space

const isPalindrome = (string) => {
    const reversedChars = [];
    for (let i = string.length - 1; i >= 0; i--) {
        reversedChars.push(string[i]);
    }
    return string === reversedChars.join('');
}