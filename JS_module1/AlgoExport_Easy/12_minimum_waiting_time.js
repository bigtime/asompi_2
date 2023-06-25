// O(nlogn) time | O(1) space - where n is the number of queries

const minimumWaitingTime = (queries) => {
    queries.sort((a,b) => a - b);

    let totalWaitingTime = 0;
    for (let idx = 0; idx < queries.length; idx++){
        const duration = queries[idx];
        const queriesLeft = queries.length - (idx + 1);
        totalWaitingTime += duration * queriesLeft;
    }
    return totalWaitingTime;
}