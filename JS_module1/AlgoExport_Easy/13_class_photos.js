// O(nlog(n)) time | O(1) space - where n is the number of students

const classPhotos = (redShirtHeights, blueShirtHeights) => {
    redShirtHeights.sort((a, b) => b - a);
    blueShirtHeights.sort((a, b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirtHeights = redShirtHeights[idx];
        const blueShirtHeights = blueShirtHeights[idx];

        if (shirtColorInFirstRow === 'RED') {
            if (redShirtHeights >= blueShirtHeights) return false;
        }
            else if (blueShirtHeights >= redShirtHeights) return false;
    }
    return true;
}