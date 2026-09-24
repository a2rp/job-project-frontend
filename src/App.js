import { useEffect, useState } from "react";
import data from "./files/wine-data.json";
import styles from "./styles.module.scss";
import StatisticalData from "./components/StatisticalData";
import Gamma from "./components/gamma";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter";
import SiteHeader from "./components/SiteHeader";

function App() {
    const wineData = data;
    const wineDataKeys = Object.keys(wineData[0]);
    const [indexValue, setIndexValue] = useState(0);
    const [keyboardEnabled, setKeyboardEnabled] = useState(false);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!keyboardEnabled) return;

            if (event.key === "ArrowLeft") {
                setIndexValue((previousIndex) => previousIndex <= 0 ? wineData.length - 1 : previousIndex - 1);
            }

            if (event.key === "ArrowRight") {
                setIndexValue((previousIndex) => previousIndex >= wineData.length - 1 ? 0 : previousIndex + 1);
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [keyboardEnabled, wineData.length]);

    return (
        <>
            <SiteHeader />
            <main id="top" className={styles.container}>
                <section className={styles.intro}>
                    <p className={styles.eyebrow}>DATASET EXPLORER</p>
                    <h1 className={styles.projectName}>Statistical measures of the wine dataset</h1>
                    <p className={styles.introText}>
                        Browse the raw records, inspect one entry at a time, and compare the main statistical measures across the dataset.
                    </p>
                    <div className={styles.summary}>
                        <span><strong>{wineData.length}</strong> records</span>
                        <span><strong>{wineDataKeys.length}</strong> measures</span>
                        <span><strong>3</strong> statistical views</span>
                    </div>
                </section>

                <fieldset id="raw-data">
                <legend>Complete Raw Data</legend>
                    <p className={styles.sectionHint}>The original records are kept available for quick inspection.</p>
                    <pre className={styles.rawData}>{JSON.stringify(wineData, null, 2)}</pre>
                </fieldset>

                <fieldset id="single-data">
                    <legend>Single record</legend>
                    <div className={styles.sectionHint}>Move through the dataset with the buttons or enable the left and right arrow keys.</div>
                    <div className={styles.singleData}>
                        <div className={styles.indexNumber}>
                            Record {String(indexValue + 1).padStart(3, "0")} <span>of {wineData.length}</span>
                        </div>

                        <div className={styles.tableScroller}>
                            <table className={styles.singleDataTable}>
                                <thead>
                                    <tr>
                                        {wineDataKeys.map((item) => <th key={item}>{item}</th>)}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        {wineDataKeys.map((item) => <td key={item}>{wineData[indexValue][item]}</td>)}
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <label className={styles.keyboardToggle}>
                            <input type="checkbox" checked={keyboardEnabled} onChange={(event) => setKeyboardEnabled(event.target.checked)} />
                            Use left and right arrow keys
                        </label>

                        <div className={styles.controls}>
                            <button type="button" onClick={() => setIndexValue((previousIndex) => previousIndex <= 0 ? wineData.length - 1 : previousIndex - 1)}>
                                Previous record
                            </button>
                            <button type="button" onClick={() => setIndexValue((previousIndex) => previousIndex >= wineData.length - 1 ? 0 : previousIndex + 1)}>
                                Next record
                            </button>
                        </div>
                    </div>
                </fieldset>

                <fieldset id="statistics">
                    <legend>Statistical data</legend>
                    <p className={styles.sectionHint}>Minimum, maximum, mean, median, and mode for every numeric measure.</p>
                    <div className={styles.statisticalData}>
                        <StatisticalData wineData={wineData} wineDataKeys={wineDataKeys} />
                    </div>
                </fieldset>

                <fieldset id="gamma">
                    <legend>Gamma</legend>
                    <p className={styles.sectionHint}>Calculated from Ash multiplied by Hue, divided by Magnesium.</p>
                    <div className={styles.gamma}>
                        <Gamma wineData={wineData} />
                    </div>
                </fieldset>

            </main>
            <SiteFooter />
            <ScrollToTop />
        </>
    );
}

export default App;
