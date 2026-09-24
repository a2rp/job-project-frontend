import React, { useEffect, useRef, useState } from 'react'

const StatisticalData = ({ wineData, wineDataKeys }) => {
    const getMin = (key) => wineData.reduce((minimum, row) => row[key] < minimum[key] ? row : minimum, wineData[0]);
    const getMax = (key) => wineData.reduce((maximum, row) => row[key] > maximum[key] ? row : maximum, wineData[0]);

    // adding minimum and maximum value in usestate variable
    const [alcohol] = useState({ min: getMin(wineDataKeys[0]), max: getMax(wineDataKeys[0]) });
    const [malicAcid] = useState({ min: getMin(wineDataKeys[1]), max: getMax(wineDataKeys[1]) });
    const [ash] = useState({ min: getMin(wineDataKeys[2]), max: getMax(wineDataKeys[2]) });
    const [alcalinity] = useState({ min: getMin(wineDataKeys[3]), max: getMax(wineDataKeys[3]) });
    const [magnesium] = useState({ min: getMin(wineDataKeys[4]), max: getMax(wineDataKeys[4]) });
    const [totalPhenols] = useState({ min: getMin(wineDataKeys[5]), max: getMax(wineDataKeys[5]) });
    const [flavanoids] = useState({ min: getMin(wineDataKeys[6]), max: getMax(wineDataKeys[6]) });
    const [nonflavanoidPhenols] = useState({ min: getMin(wineDataKeys[7]), max: getMax(wineDataKeys[7]) });
    const [proanthocyanins] = useState({ min: getMin(wineDataKeys[8]), max: getMax(wineDataKeys[8]) });
    const [colorIntensity] = useState({ min: getMin(wineDataKeys[9]), max: getMax(wineDataKeys[9]) });
    const [hue] = useState({ min: getMin(wineDataKeys[10]), max: getMax(wineDataKeys[10]) });
    const [dilutedWines] = useState({ min: getMin(wineDataKeys[11]), max: getMax(wineDataKeys[11]) });
    const [unknown] = useState({ min: getMin(wineDataKeys[12]), max: getMax(wineDataKeys[12]) });

    // calculate mean
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

    const countAll = wineData.length;
    useEffect(() => {
        let alcoholMean = 0, malicAcidMean = 0, ashMean = 0, alcalinityMean = 0, magnesiumMean = 0, totalPhenolsMean = 0, flavanoidsMean = 0, nonFlavanoidPhenolsMean = 0,
            proanthocyaninsMean = 0, colorIntensityMean = 0, hueMean = 0, dilutedWinesMean = 0,
            unknownMean = 0;

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

        alcoholMeanRef.current.innerText = parseFloat(alcoholMean).toFixed(3);
        malicAcidMeanRef.current.innerText = parseFloat(malicAcidMean).toFixed(3);
        ashMeanRef.current.innerText = parseFloat(ashMean).toFixed(3);
        alcalinityMeanRef.current.innerText = parseFloat(alcalinityMean).toFixed(3);
        magnesiumMeanRef.current.innerText = parseFloat(magnesiumMean).toFixed(3);
        totalPhenolsMeanRef.current.innerText = parseFloat(totalPhenolsMean).toFixed(3);
        flavanoidsMeanRef.current.innerText = parseFloat(flavanoidsMean).toFixed(3);
        nonFlavanoidPhenolsMeanRef.current.innerText = parseFloat(nonFlavanoidPhenolsMean).toFixed(3);
        proanthocyaninsMeanRef.current.innerText = parseFloat(proanthocyaninsMean).toFixed(3);
        colorIntensityMeanRef.current.innerText = parseFloat(colorIntensityMean).toFixed(3);
        hueMeanRef.current.innerText = parseFloat(hueMean).toFixed(3);
        dilutedWinesMeanRef.current.innerText = parseFloat(dilutedWinesMean).toFixed(3);
        unknownMeanRef.current.innerText = parseFloat(unknownMean).toFixed(3);
    }, [countAll, wineData, wineDataKeys]);

    // calculate median
    const alcoholMedianRef = useRef(null);
    const malicAcidMedianRef = useRef(null);
    const ashMedianRef = useRef(null);
    const alcalinityMedianRef = useRef(null);
    const magnesiumMedianRef = useRef(null);
    const totalPhenolsMedianRef = useRef(null);
    const flavanoidsMedianRef = useRef(null);
    const nonFlavanoidPhenolsMedianRef = useRef(null);
    const proanthocyaninsMedianRef = useRef(null);
    const colorIntensityMedianRef = useRef(null);
    const hueMedianRef = useRef(null);
    const dilutedWinesMedianRef = useRef(null);
    const unknownMedianRef = useRef(null);
    useEffect(() => {
        const sort = (index) => [...wineData].sort(function (a, b) {
            return a[wineDataKeys[index]] - b[wineDataKeys[index]];
        });
        alcoholMedianRef.current.innerText = (sort(0)[countAll / 2][wineDataKeys[0]]).toFixed(3);
        malicAcidMedianRef.current.innerText = (sort(1)[countAll / 2][wineDataKeys[1]]).toFixed(3);
        ashMedianRef.current.innerText = (sort(2)[countAll / 2][wineDataKeys[2]]).toFixed(3);
        alcalinityMedianRef.current.innerText = (sort(3)[countAll / 2][wineDataKeys[3]]).toFixed(3);
        magnesiumMedianRef.current.innerText = (sort(4)[countAll / 2][wineDataKeys[4]]).toFixed(3);
        totalPhenolsMedianRef.current.innerText = (sort(5)[countAll / 2][wineDataKeys[5]]).toFixed(3);
        flavanoidsMedianRef.current.innerText = (sort(6)[countAll / 2][wineDataKeys[6]]).toFixed(3);
        nonFlavanoidPhenolsMedianRef.current.innerText = (sort(7)[countAll / 2][wineDataKeys[7]]).toFixed(3);
        proanthocyaninsMedianRef.current.innerText = (sort(8)[countAll / 2][wineDataKeys[8]]);
        colorIntensityMedianRef.current.innerText = (sort(9)[countAll / 2][wineDataKeys[9]]).toFixed(3);
        hueMedianRef.current.innerText = (sort(10)[countAll / 2][wineDataKeys[10]]).toFixed(3);
        dilutedWinesMedianRef.current.innerText = (sort(11)[countAll / 2][wineDataKeys[11]]);
        unknownMedianRef.current.innerText = (sort(12)[countAll / 2][wineDataKeys[12]]).toFixed(3);
    }, [countAll, wineData, wineDataKeys]);

    // calculate mode
    const alcoholModeRef = useRef(null);
    const malicAcidModeRef = useRef(null);
    const ashModeRef = useRef(null);
    const alcalinityModeRef = useRef(null);
    const magnesiumModeRef = useRef(null);
    const totalPhenolsModeRef = useRef(null);
    const flavanoidsModeRef = useRef(null);
    const nonFlavanoidPhenolsModeRef = useRef(null);
    const proanthocyaninsModeRef = useRef(null);
    const colorIntensityModeRef = useRef(null);
    const hueModeRef = useRef(null);
    const dilutedWinesModeRef = useRef(null);
    const unknownModeRef = useRef(null);
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
        alcoholModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[0]])).toFixed(3);
        malicAcidModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[1]])).toFixed(3);
        ashModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[2]])).toFixed(3);
        alcalinityModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[3]])).toFixed(3);
        magnesiumModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[4]])).toFixed(3);
        totalPhenolsModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[5]])).toFixed(3);
        flavanoidsModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[6]])).toFixed(3);
        nonFlavanoidPhenolsModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[7]])).toFixed(3);
        proanthocyaninsModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[8]]));
        colorIntensityModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[9]])).toFixed(3);
        hueModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[10]])).toFixed(3);
        dilutedWinesModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[11]]));
        unknownModeRef.current.innerText = mode(wineData.map(item => item[wineDataKeys[12]])).toFixed(3);
    }, [wineData, wineDataKeys]);

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

                <tr>
                    <td>Median</td>
                    <td ref={alcoholMedianRef}></td>
                    <td ref={malicAcidMedianRef}></td>
                    <td ref={ashMedianRef}></td>
                    <td ref={alcalinityMedianRef}></td>
                    <td ref={magnesiumMedianRef}></td>
                    <td ref={totalPhenolsMedianRef}></td>
                    <td ref={flavanoidsMedianRef}></td>
                    <td ref={nonFlavanoidPhenolsMedianRef}></td>
                    <td ref={proanthocyaninsMedianRef}></td>
                    <td ref={colorIntensityMedianRef}></td>
                    <td ref={hueMedianRef}></td>
                    <td ref={dilutedWinesMedianRef}></td>
                    <td ref={unknownMedianRef}></td>
                </tr>

                <tr>
                    <td>Mode</td>
                    <td ref={alcoholModeRef}></td>
                    <td ref={malicAcidModeRef}></td>
                    <td ref={ashModeRef}></td>
                    <td ref={alcalinityModeRef}></td>
                    <td ref={magnesiumModeRef}></td>
                    <td ref={totalPhenolsModeRef}></td>
                    <td ref={flavanoidsModeRef}></td>
                    <td ref={nonFlavanoidPhenolsModeRef}></td>
                    <td ref={proanthocyaninsModeRef}></td>
                    <td ref={colorIntensityModeRef}></td>
                    <td ref={hueModeRef}></td>
                    <td ref={dilutedWinesModeRef}></td>
                    <td ref={unknownModeRef}></td>
                </tr>
            </tbody>
        </table>
    )
}

export default StatisticalData
