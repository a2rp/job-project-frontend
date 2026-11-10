import { useMemo } from "react";
import { getMean, getMedian, getModes } from "../utils/statistics";

const formatValue = (value) => (value === null ? "N/A" : value.toFixed(3));

const StatisticalData = ({ wineData, wineDataKeys }) => {
    const statistics = useMemo(() => wineDataKeys.map((key) => {
        const values = wineData
            .map((record) => Number(record[key]))
            .filter(Number.isFinite);

        return {
            key,
            minimum: values.length ? Math.min(...values) : null,
            maximum: values.length ? Math.max(...values) : null,
            mean: getMean(values),
            median: getMedian(values),
            modes: getModes(values),
        };
    }), [wineData, wineDataKeys]);

    const rows = [
        ["Minimum", (measure) => formatValue(measure.minimum)],
        ["Maximum", (measure) => formatValue(measure.maximum)],
        ["Mean", (measure) => formatValue(measure.mean)],
        ["Median", (measure) => formatValue(measure.median)],
        ["Mode", (measure) => measure.modes.length
            ? measure.modes.map(formatValue).join(", ")
            : "No mode"],
    ];

    return (
        <table aria-label="Summary statistics for the wine dataset">
            <thead>
                <tr>
                    <th scope="col">Statistic</th>
                    {statistics.map(({ key }) => (
                        <th key={key} scope="col">{key}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map(([label, getValue]) => (
                    <tr key={label}>
                        <th scope="row">{label}</th>
                        {statistics.map((measure) => (
                            <td key={measure.key}>{getValue(measure)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default StatisticalData;
