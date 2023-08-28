import React, { useEffect, useRef, useState } from 'react'

const StatisticalData = ({ wineData, wineDataKeys }) => {
    // statistical data
    Array.prototype.hasMin = function (attrib) {
        const checker = (o, i) => typeof (o) === 'object' && o[i]
        return (this.length && this.reduce(function (prev, curr) {
            const prevOk = checker(prev, attrib);
            const currOk = checker(curr, attrib);
            if (!prevOk && !currOk) return {};
            if (!prevOk) return curr;
            if (!currOk) return prev;
            return prev[attrib] < curr[attrib] ? prev : curr;
        })) || null;
    }
    Array.prototype.hasMax = function (attrib) {
        const checker = (o, i) => typeof (o) === 'object' && o[i]
        return (this.length && this.reduce(function (prev, curr) {
            const prevOk = checker(prev, attrib);
            const currOk = checker(curr, attrib);
            if (!prevOk && !currOk) return {};
            if (!prevOk) return curr;
            if (!currOk) return prev;
            return prev[attrib] > curr[attrib] ? prev : curr;
        })) || null;
    }

    const [alcohol, setAlcohol] = useState({
        min: wineData.hasMin(wineDataKeys[0]),
        max: wineData.hasMax(wineDataKeys[0])
    });
    const [malicAcid, setMalicAcid] = useState({ min: wineData.hasMin(wineDataKeys[1]), max: wineData.hasMax(wineDataKeys[1]) });
    const [ash, setAsh] = useState({ min: wineData.hasMin(wineDataKeys[2]), max: wineData.hasMax(wineDataKeys[2]) });
    const [alcalinity, setAlcalinity] = useState({ min: wineData.hasMin(wineDataKeys[3]), max: wineData.hasMax(wineDataKeys[3]) });
    const [magnesium, setMagnesium] = useState({ min: wineData.hasMin(wineDataKeys[4]), max: wineData.hasMax(wineDataKeys[4]) });
    const [totalPhenols, setTotalPhenols] = useState({ min: wineData.hasMin(wineDataKeys[5]), max: wineData.hasMax(wineDataKeys[5]) });
    const [flavanoids, setFlavanoids] = useState({ min: wineData.hasMin(wineDataKeys[6]), max: wineData.hasMax(wineDataKeys[6]) });
    const [nonflavanoidPhenols, setNonflavanoidPhenols] = useState({ min: wineData.hasMin(wineDataKeys[7]), max: wineData.hasMax(wineDataKeys[7]) });
    const [proanthocyanins, setProanthocyanins] = useState({ min: wineData.hasMin(wineDataKeys[8]), max: wineData.hasMax(wineDataKeys[8]) });
    const [colorIntensity, setColorIntensity] = useState({ min: wineData.hasMin(wineDataKeys[9]), max: wineData.hasMax(wineDataKeys[9]) });
    const [hue, setHue] = useState({ min: wineData.hasMin(wineDataKeys[10]), max: wineData.hasMax(wineDataKeys[10]) });
    const [dilutedWines, setDilutedWines] = useState({ min: wineData.hasMin(wineDataKeys[11]), max: wineData.hasMax(wineDataKeys[11]) });
    const [unknown, setUnknown] = useState({ min: wineData.hasMin(wineDataKeys[12]), max: wineData.hasMax(wineDataKeys[12]) });

    const alcoholMeanRef = useRef(null);
    const malicAcidMeanRef = useRef(null);
    const ashMeanRef = useRef(null);
    const alcalinityMeanRef = useRef(null);
    const magnesiumMeanRef = useRef(null);
    const totalPhenolsMeanRef = useRef(null);
    const flavanoidsMeanRef = useRef(null);
    const nonFlavanoidPhenolsMeanRef = useRef(null);
    const proanthocyaninsMeanRef = useRef(null);
    const colorIntensityMeanRef = useRef(null);
    const hueMeanRef = useRef(null);
    const dilutedWinesMeanRef = useRef(null);
    const unknownMeanRef = useRef(null);
    useEffect(() => {
        let alcoholMean = 0, malicAcidMean = 0, ashMean = 0, alcalinityMean = 0, magnesiumMean = 0, totalPhenolsMean = 0, flavanoidsMean = 0, nonFlavanoidPhenolsMean = 0,
            proanthocyaninsMean = 0, colorIntensityMean = 0, hueMean = 0, dilutedWinesMean = 0,
            unknownMean = 0;
        let countAll = 0;

        wineData.forEach(item => {
            alcoholMean += item[wineDataKeys[0]];
            malicAcidMean += item[wineDataKeys[1]];
            ashMean += item[wineDataKeys[2]];
            alcalinityMean += item[wineDataKeys[3]];
            magnesiumMean += item[wineDataKeys[4]];
            totalPhenolsMean += item[wineDataKeys[5]];
            flavanoidsMean += item[wineDataKeys[6]];
            nonFlavanoidPhenolsMean += item[wineDataKeys[7]];
            proanthocyaninsMean += item[wineDataKeys[8]];
            colorIntensityMean += item[wineDataKeys[9]];
            hueMean += item[wineDataKeys[10]];
            dilutedWinesMean += item[wineDataKeys[11]];
            unknownMean += item[wineDataKeys[12]];

            ++countAll;
        });
        alcoholMean = parseFloat(alcoholMean) / countAll;
        malicAcidMean = parseFloat(malicAcidMean) / countAll;
        ashMean = parseFloat(ashMean) / countAll;
        alcalinityMean = parseFloat(alcalinityMean) / countAll;
        magnesiumMean = parseFloat(magnesiumMean) / countAll;
        totalPhenolsMean = parseFloat(totalPhenolsMean) / countAll;
        flavanoidsMean = parseFloat(flavanoidsMean) / countAll;
        nonFlavanoidPhenolsMean = parseFloat(nonFlavanoidPhenolsMean) / countAll;
        proanthocyaninsMean = parseFloat(proanthocyaninsMean) / countAll;
        colorIntensityMean = parseFloat(colorIntensityMean) / countAll;
        hueMean = parseFloat(hueMean) / countAll;
        dilutedWinesMean = parseFloat(dilutedWinesMean) / countAll;
        unknownMean = parseFloat(unknownMean) / countAll;

        alcoholMeanRef.current.innerText = parseFloat(alcoholMean).toFixed(2);
        malicAcidMeanRef.current.innerText = parseFloat(malicAcidMean).toFixed(2);
        ashMeanRef.current.innerText = parseFloat(ashMean).toFixed(2);
        alcalinityMeanRef.current.innerText = parseFloat(alcalinityMean).toFixed(2);
        magnesiumMeanRef.current.innerText = parseFloat(magnesiumMean).toFixed(2);
        totalPhenolsMeanRef.current.innerText = parseFloat(totalPhenolsMean).toFixed(2);
        flavanoidsMeanRef.current.innerText = parseFloat(flavanoidsMean).toFixed(2);
        nonFlavanoidPhenolsMeanRef.current.innerText = parseFloat(nonFlavanoidPhenolsMean).toFixed(2);
        proanthocyaninsMeanRef.current.innerText = parseFloat(proanthocyaninsMean).toFixed(2);
        colorIntensityMeanRef.current.innerText = parseFloat(colorIntensityMean).toFixed(2);
        hueMeanRef.current.innerText = parseFloat(hueMean).toFixed(2);
        dilutedWinesMeanRef.current.innerText = parseFloat(dilutedWinesMean).toFixed(2);
        unknownMeanRef.current.innerText = parseFloat(unknownMean).toFixed(2);
    });

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    {wineDataKeys.map((item, index) => (
                        <th key={index}>{item}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Min.</td>
                    <td>{alcohol.min[wineDataKeys["0"]]}</td>
                    <td>{malicAcid.min[wineDataKeys["1"]]}</td>
                    <td>{ash.min[wineDataKeys["2"]]}</td>
                    <td>{alcalinity.min[wineDataKeys["3"]]}</td>
                    <td>{magnesium.min[wineDataKeys["4"]]}</td>
                    <td>{totalPhenols.min[wineDataKeys["5"]]}</td>
                    <td>{flavanoids.min[wineDataKeys["6"]]}</td>
                    <td>{nonflavanoidPhenols.min[wineDataKeys["7"]]}</td>
                    <td>{proanthocyanins.min[wineDataKeys["8"]]}</td>
                    <td>{colorIntensity.min[wineDataKeys["9"]]}</td>
                    <td>{hue.min[wineDataKeys["10"]]}</td>
                    <td>{dilutedWines.min[wineDataKeys["11"]]}</td>
                    <td>{unknown.min[wineDataKeys["12"]]}</td>
                </tr>

                <tr>
                    <td>Max.</td>
                    <td>{alcohol.max[wineDataKeys["0"]]}</td>
                    <td>{malicAcid.max[wineDataKeys["1"]]}</td>
                    <td>{ash.max[wineDataKeys["2"]]}</td>
                    <td>{alcalinity.max[wineDataKeys["3"]]}</td>
                    <td>{magnesium.max[wineDataKeys["4"]]}</td>
                    <td>{totalPhenols.max[wineDataKeys["5"]]}</td>
                    <td>{flavanoids.max[wineDataKeys["6"]]}</td>
                    <td>{nonflavanoidPhenols.max[wineDataKeys["7"]]}</td>
                    <td>{proanthocyanins.max[wineDataKeys["8"]]}</td>
                    <td>{colorIntensity.max[wineDataKeys["9"]]}</td>
                    <td>{hue.max[wineDataKeys["10"]]}</td>
                    <td>{dilutedWines.max[wineDataKeys["11"]]}</td>
                    <td>{unknown.max[wineDataKeys["12"]]}</td>
                </tr>

                <tr>
                    <td>Mean</td>
                    <td ref={alcoholMeanRef}></td>
                    <td ref={malicAcidMeanRef}></td>
                    <td ref={ashMeanRef}></td>
                    <td ref={alcalinityMeanRef}></td>
                    <td ref={magnesiumMeanRef}></td>
                    <td ref={totalPhenolsMeanRef}></td>
                    <td ref={flavanoidsMeanRef}></td>
                    <td ref={nonFlavanoidPhenolsMeanRef}></td>
                    <td ref={proanthocyaninsMeanRef}></td>
                    <td ref={colorIntensityMeanRef}></td>
                    <td ref={hueMeanRef}></td>
                    <td ref={dilutedWinesMeanRef}></td>
                    <td ref={unknownMeanRef}></td>
                </tr>
            </tbody>
        </table>
    )
}

export default StatisticalData
