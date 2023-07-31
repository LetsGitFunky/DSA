function getPotentialOfWinner(potential, k) {
    let max = potential[0];
    let count = 0;

    for (let i = 1; i < potential.length; i++) {
        if (potential[i] > max) {
            max = potential[i];
            count = 1;
        } else {
            count++;
        }
        if (count >= k) {
            break;
        }
    }
    return max;
}
