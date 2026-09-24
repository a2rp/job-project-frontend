import React, { useMemo } from "react";
import styles from "./styles.module.scss";

const getMedian = (values) => {
    const sortedValues = [...values].sort((a, b) => a - b);
    const middle = Math.floor(sortedValues.length / 2);
    return sortedValues.length % 2 === 0
        ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
        : sortedValues[middle];
};

const getMode = (values) => {
    const counts = new Map();
    values.forEach((value) => counts.set(value, (counts.get(value) || 0) + 1));
    return values.reduce((mode, value) => counts.get(value) > counts.get(mode) ? value : mode, values[0]);
};

const Gamma = ({ wineData }) => {
    const gamma = useMemo(() => wineData.map(({ Ash, Hue, Magnesium }) => (Ash * Hue) / Magnesium), [wineData]);
    const gammaMean = gamma.reduce((total, value) => total + value, 0) / gamma.length;
    const gammaMedian = getMedian(gamma);
    const gammaMode = getMode(gamma);

    return (
        <div className={styles.container}>
            <div>Gamma mean: <strong>{gammaMean.toFixed(3)}</strong></div>
            <div>Gamma median: <strong>{gammaMedian.toFixed(3)}</strong></div>
            <div>Gamma mode: <strong>{gammaMode.toFixed(3)}</strong></div>
        </div>
    );
};

export default Gamma;
