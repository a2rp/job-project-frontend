import React, { useEffect } from 'react'
import styles from "./styles.module.scss";

const Flavanoids = ({ wineData, wineDataKeys }) => {
    useEffect(() => {
        console.log(wineData);

        const result = wineData.map(({ Flavanoids }) => ({ Flavanoids }));
        console.log(result);
    }, []);

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

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Flavanoids
