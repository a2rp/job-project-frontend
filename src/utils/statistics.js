const getMean = (values) => values.length
    ? values.reduce((total, value) => total + value, 0) / values.length
    : null;

const getMedian = (values) => {
    if (!values.length) return null;

    const sortedValues = [...values].sort((first, second) => first - second);
    const middle = Math.floor(sortedValues.length / 2);

    return sortedValues.length % 2 === 0
        ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
        : sortedValues[middle];
};

const getModes = (values) => {
    if (!values.length) return [];

    const counts = new Map();
    values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
    const highestCount = Math.max(...counts.values());

    if (highestCount === 1) return [];

    return [...counts.entries()]
        .filter(([, count]) => count === highestCount)
        .map(([value]) => value)
        .sort((first, second) => first - second);
};

export { getMean, getMedian, getModes };
