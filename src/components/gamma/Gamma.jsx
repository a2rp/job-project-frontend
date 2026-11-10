import { useMemo } from "react";
import { getMean, getMedian, getModes } from "../../utils/statistics";
import styles from "./styles.module.scss";

const formatValue = (value) => (value === null ? "N/A" : value.toFixed(3));

const Gamma = ({ wineData }) => {
    const gamma = useMemo(
        () => wineData.map(({ Ash, Hue, Magnesium }) => (Ash * Hue) / Magnesium),
        [wineData],
    );
    const gammaMean = getMean(gamma);
    const gammaMedian = getMedian(gamma);
    const gammaModes = getModes(gamma);

    return (
        <div className={styles.container}>
            <div>Gamma mean: <strong>{formatValue(gammaMean)}</strong></div>
            <div>Gamma median: <strong>{formatValue(gammaMedian)}</strong></div>
            <div>
                Gamma mode:{" "}
                <strong>
                    {gammaModes.length
                        ? gammaModes.map(formatValue).join(", ")
                        : "No mode"}
                </strong>
            </div>
        </div>
    );
};

export default Gamma;
