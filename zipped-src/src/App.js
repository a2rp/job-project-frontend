import { useEffect, useState } from "react";
import data from "./files/wine-data.json";
import styles from "./styles.module.scss";
import StatisticalData from "./components/StatisticalData";

function App() {
    // complete data
    const [wineData, setWineData] = useState(data);
    // console.log(wineData.length);

    // single data
    const [wineDataKeys] = useState(Object.keys(wineData[0]));
    const [indexValue, setIndexValue] = useState(0);
    useEffect(() => {
        // console.log(indexValue);
    }, [indexValue]);
    useEffect(() => {
        document.addEventListener("keydown", (event) => {
            // console.log(event.key);
            if (document.querySelector(".singleDataCheckBox").checked) {
                if (event.key === "ArrowLeft") {//left arrow
                    // console.log(event.key);
                    document.querySelector(".previous").click();
                } else if (event.key === "ArrowRight") {//right arrow
                    // console.log(event.key);
                    document.querySelector(".next").click();
                }
            }
        });
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.projectName}>Statistical Measures Of The Wine Data Set</h1>

            <fieldset>
                <legend>Complete Raw Data</legend>
                <pre className={styles.rawData}>{JSON.stringify(wineData, null, 2)}</pre>
            </fieldset>

            <fieldset>
                <legend>Single Data</legend>
                <div className={styles.singleData}>
                    <div className={styles.indexNumber}>Data Index Number: {indexValue + 1 < 10 ? "00" + (indexValue + 1) : indexValue + 1 < 100 ? "0" + (indexValue + 1) : indexValue + 1}/{wineData.length}</div>

                    <table className={styles.singleDataTable}>
                        <thead>
                            <tr>
                                {wineDataKeys.map((item, index) => (
                                    <th key={index}>{item}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                {Object.values(wineData[indexValue]).map((item, index) => (
                                    <td key={index}>{item}</td>
                                ))}
                            </tr>
                            <tr>
                                <td style={{ color: "orangered" }} colSpan={Object.keys(wineData[0]).length}>
                                    <input type="checkbox" className={`${styles.singleDataCheckBox} singleDataCheckBox`} /> Check this box to use left/right arrow key
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={`${styles.previous} previous`} onClick={(event) => setIndexValue(prev => prev <= 0 ? wineData.length - 1 : prev - 1)}>
                        PREVIOUS [left arrow key]
                    </div>
                    <div className={`${styles.next} next`} onClick={(event) => setIndexValue(prev => prev >= wineData.length - 1 ? 0 : prev + 1)}>NEXT [right arrow key]</div>
                </div>
            </fieldset >

            <fieldset>
                <legend>Statistical Data</legend>
                <div className={styles.statisticalData}>
                    <StatisticalData wineData={wineData} wineDataKeys={wineDataKeys} />
                </div>
            </fieldset>
        </div >
    );
}

export default App;
