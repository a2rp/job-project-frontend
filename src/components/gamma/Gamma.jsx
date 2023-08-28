import React, { useEffect, useRef, useState } from 'react'
import styles from "./styles.module.scss";

const Gamma = ({ wineData, wineDataKeys }) => {
    // console.log(wineData);
    wineDataKeys.push("gamma");

    const [gamma, setGamma] = useState([]);

    // gamma calculation
    useEffect(() => {
        const gammaData = [];
        wineData.map(data => {
            const gammaValue = (data.Ash * data.Hue) / data.Magnesium;
            data.gamma = gammaValue;
            gammaData.push(gammaValue);
        });
        // console.log(gammaData);
        // console.log(wineData);
        setGamma(prev => [...gammaData]);
    }, []);
    useEffect(() => {
        // console.log("gamma");
        // console.log(gamma);
    }, [gamma]);

    // calculate mean
    const gammaMeanRef = useRef(null);
    const gammaMedianRef = useRef(null);
    const gammaModeRef = useRef(null);

    let countAll = 0;
    useEffect(() => {
        let gammaMean = 0;
        wineData.forEach(item => {
            gammaMean += item[wineDataKeys[13]];
            ++countAll;
        });
        gammaMeanRef.current.innerText = (parseFloat(gammaMean) / countAll).toFixed(3);
    });

    // calculate median
    useEffect(() => {
        const median = arr => {
            const mid = Math.floor(arr.length / 2),
                nums = [...arr].sort((a, b) => a - b);
            return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
        };
        gammaMedianRef.current.innerText = median(gamma).toFixed(3);
    }, [gamma]);

    // calculate mode
    useEffect(() => {
        const mode = a =>
            Object.values(
                a.reduce((count, e) => {
                    if (!(e in count)) {
                        count[e] = [0, e];
                    }

                    count[e][0]++;
                    return count;
                }, {})
            ).reduce((a, v) => v[0] < a[0] ? a : v, [0, null])[1];
        ;
        gammaModeRef.current.innerText = parseFloat(mode(gamma)).toFixed(3);
    }, [gamma]);



    return (
        <div className={styles.container}>
            <div>Gamma Mean: <span ref={gammaMeanRef}></span></div>
            <div>Gamma Median: <span ref={gammaMedianRef}></span></div>
            <div>Gamma Mode: <span ref={gammaModeRef}></span></div>
        </div>
    )
}

export default Gamma
