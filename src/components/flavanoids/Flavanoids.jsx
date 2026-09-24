import React from 'react'
import styles from "./styles.module.scss";

const Flavanoids = ({ wineData, wineDataKeys }) => {
    const flavanoidValues = wineData.map(({ Flavanoids }) => Flavanoids);
    const flavanoidMean = flavanoidValues.reduce((total, value) => total + value, 0) / flavanoidValues.length;

    return (
        <div className={styles.container}>
            <table className={styles.flavanoidsTable}>
                <thead>
                    <tr>
                        <th>Flavanoids Measure</th>
                        {wineDataKeys.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mean</td>
                        <td colSpan={wineDataKeys.length}>{flavanoidMean.toFixed(3)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Flavanoids
