// O(n^2) time | O(1) space - where n is the length of the input string 

const firstNonRepeatingCharacter = (string) => {
    for (let idx = 0; idx < string.length;idx++) {
        let foundDuplicate = false;
        for (let idx2 = 0; idx2 < string.length; idx2++) {
            if (string[idx] == string[idx2] && idx !== idx2) foundDuplicate = true;
        }
        if (!foundDuplicate) return idx;
    }
    return -1
}