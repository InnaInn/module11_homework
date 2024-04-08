function getPercents(percent, number) {
    if (percent < 0) {
        throw new Error("Percent should not be negative");
    }
    return ((percent * number) / 100);
}

module.exports = getPercents;