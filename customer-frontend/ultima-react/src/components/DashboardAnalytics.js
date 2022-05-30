import React, { useContext, useEffect, useRef, useState } from 'react';
import { classNames } from 'primereact/utils';
import { Menu } from 'primereact/menu';
import { ProgressBar } from 'primereact/progressbar';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { ProductService } from '../service/ProductService';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { RTLContext } from '../App';

const storeAData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [55, 3, 45, 6, 44, 58, 84, 68, 64],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true,
        tension: .4
    }]
};

const storeBData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [81, 75, 63, 100, 69, 79, 38, 37, 76],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true,
        tension: .4
    }]
};

const storeCData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [99, 55, 22, 72, 24, 79, 35, 91, 48],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true,
        tension: .4
    }]
};

const storeDData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
        data: [5, 51, 68, 82, 28, 21, 29, 45, 44],
        borderColor: [
            '#4DD0E1',
        ],
        backgroundColor: [
            'rgba(77, 208, 225, 0.8)',
        ],
        borderWidth: 2,
        fill: true,
        tension: .4
    }]
};

const storeOptions = {
    maintainAspectRatio: false,
    aspectRatio: 4,
    plugins: {
        legend: {
            display: false
        }
    },
    scales: {
        y: {
            display: false
        },
        x: {
            display: false
        },
    },
    tooltips: {
        enabled: false
    },
    elements: {
        point: {
            radius: 0
        }
    },
    animation: {
        duration: 0
    }
};

const getColors = (colorMode) => {
    const isLight = colorMode === 'light';
    return {
        pinkColor: isLight ? '#EC407A' : '#F48FB1',
        purpleColor: isLight ? '#AB47BC' : '#CE93D8',
        deeppurpleColor: isLight ? '#7E57C2' : '#B39DDB',
        indigoColor: isLight ? '#5C6BC0' : '#9FA8DA',
        blueColor: isLight ? '#42A5F5' : '#90CAF9',
        lightblueColor: isLight ? '#29B6F6' : '#81D4FA',
        cyanColor: isLight ? '#00ACC1' : '#4DD0E1',
        tealColor: isLight ? '#26A69A' : '#80CBC4',
        greenColor: isLight ? '#66BB6A' : '#A5D6A7',
        lightgreenColor: isLight ? '#9CCC65' : '#C5E1A5',
        limeColor: isLight ? '#D4E157' : '#E6EE9C',
        yellowColor: isLight ? 'FFEE58' : '#FFF59D',
        amberColor: isLight ? '#FFCA28' : '#FFE082',
        orangeColor: isLight ? '#FFA726' : '#FFCC80',
        deeporangeColor: isLight ? '#FF7043' : '#FFAB91',
        brownColor: isLight ? '#8D6E63' : '#BCAAA4'
    }
}

const getPieData = (colorMode) => {
    const { limeColor, blueColor, tealColor } = getColors(colorMode);
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
    return {
        labels: ['O', 'D', 'R'],
        datasets: [
            {
                data: [300, 50, 100],
                backgroundColor: [
                    blueColor,
                    tealColor,
                    limeColor
                ],
                borderColor
            }
        ]
    }
}

const getPieOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        aspectRatio: 1,
        legend: {
            position: 'top',
            labels: {
                fontFamily,
                color: textColor
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    };
}

const getChartData = (colorMode) => {
    const { limeColor, amberColor, orangeColor, blueColor, lightblueColor,
        cyanColor, tealColor, greenColor, lightgreenColor } = getColors(colorMode);

    return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: '2012',
                data: [6, 25, 97, 12, 7, 70, 42],
                borderColor: blueColor,
                backgroundColor: blueColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2013',
                data: [81, 3, 5, 11, 59, 47, 99],
                borderColor: lightblueColor,
                backgroundColor: lightblueColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2014',
                data: [68, 47, 46, 46, 61, 70, 94],
                borderColor: cyanColor,
                backgroundColor: cyanColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2015',
                data: [31, 9, 18, 76, 6, 11, 79],
                borderColor: tealColor,
                backgroundColor: tealColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2016',
                data: [85, 37, 47, 29, 2, 10, 54],
                borderColor: greenColor,
                backgroundColor: greenColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2017',
                data: [28, 48, 40, 19, 86, 27, 90],
                borderColor: lightgreenColor,
                backgroundColor: lightgreenColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2018',
                data: [89, 18, 95, 18, 97, 61, 54],
                borderColor: limeColor,
                backgroundColor: limeColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2019',
                data: [18, 36, 39, 58, 41, 50, 72],
                borderColor: amberColor,
                backgroundColor: amberColor,
                borderWidth: 2,
                fill: true
            },
            {
                label: '2020',
                data: [31, 4, 35, 74, 47, 35, 46],
                borderColor: orangeColor,
                backgroundColor: orangeColor,
                borderWidth: 2,
                fill: true
            }
        ]
    };
}

const getChartOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const gridLinesColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        maintainAspectRatio: false,
        aspectRatio: .8,
        plugins: {
            legend: {
                display: true,
                labels: {
                    fontFamily,
                    color: textColor
                }
            }
        },
        scales: {
            y: {
                ticks: {
                    fontFamily,
                    color: textColor
                },
                grid: {
                    color: gridLinesColor
                }
            },
            x: {
                categoryPercentage: .9,
                barPercentage: .8,
                ticks: {
                    fontFamily,
                    color: textColor
                },
                grid: {
                    color: gridLinesColor
                }
            }
        },
        animation: {
            animateScale: true,
            animateRotate: true
        }
    }
}

const getDoughnutData = (colorMode) => {
    const { blueColor, lightblueColor, cyanColor, tealColor, greenColor,
        lightgreenColor, orangeColor } = getColors(colorMode);
    const borderColor = getComputedStyle(document.body).getPropertyValue('--divider-color') || 'rgba(160, 167, 181, .3)';

    return {
        labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
            {
                data: [11, 29, 71, 33, 28, 95, 6],
                backgroundColor: [blueColor, lightblueColor, cyanColor, tealColor, greenColor, lightgreenColor, orangeColor],
                borderColor
            }
        ]
    };
}

const getDoughnutOptions = () => {
    const textColor = getComputedStyle(document.body).getPropertyValue('--text-color') || 'rgba(0, 0, 0, 0.87)';
    const fontFamily = getComputedStyle(document.body).getPropertyValue('--font-family');
    return {
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    fontFamily,
                    color: textColor
                }
            },
        },
        cutout: '50%'
    };
}

let chartMonthlyData;
let chartMonthlyOptions;
let doughnutData;
let doughnutOptions;
let pieData;
let pieOptions;

const DashboardAnalytics = (props) => {

    const [products, setProducts] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const isRTL = useContext(RTLContext)
    const bar = useRef(null);
    const doughnut = useRef(null);
    const storeA = useRef(null);
    const storeB = useRef(null);
    const storeC = useRef(null);
    const storeD = useRef(null);
    const pie = useRef(null);
    const menu11 = useRef(null);
    const menu12 = useRef(null);
    const menu13 = useRef(null);

    const [storeATotalValue, setStoreATotalValue] = useState(100);
    const [storeADiff, setStoreADiff] = useState(0);

    const [storeBTotalValue, setStoreBTotalValue] = useState(120);
    const [storeBDiff, setStoreBDiff] = useState(0);

    const [storeCTotalValue, setStoreCTotalValue] = useState(150);
    const [storeCDiff, setStoreCDiff] = useState(0);

    const [storeDTotalValue, setStoreDTotalValue] = useState(80);
    const [storeDDiff, setStoreDDiff] = useState(0);

    const calculateStore = (storeData, totalValue) => {
        let randomNumber = +((Math.random() * 500).toFixed(2));
        let data = storeData.datasets[0].data;
        let length = data.length;
        data.push(randomNumber);
        data.shift();

        let diff = +((data[length - 1] - data[length - 2]).toFixed(2));
        let status = diff === 0 ? 0 : (diff > 0 ? 1 : -1);
        totalValue = +((totalValue + diff).toFixed(2));

        storeA.current.chart.update();
        storeB.current.chart.update();
        storeC.current.chart.update();
        storeD.current.chart.update();

        return { diff, totalValue, status };
    }


    useEffect(() => {
        const productService = new ProductService();
        productService.getProducts().then(data => setProducts(data));

        chartMonthlyData = getChartData(props.colorMode);
        chartMonthlyOptions = getChartOptions();
        doughnutData = getDoughnutData(props.colorMode);
        doughnutOptions = getDoughnutOptions();
        pieData = getPieData(props.colorMode);
        pieOptions = getPieOptions();

        let storeInterval = setInterval(() => {
            let { diff: _storeADiff, totalValue: _storeATotalValue } = calculateStore(storeAData, storeATotalValue);
            setStoreADiff(_storeADiff);
            setStoreATotalValue(_storeATotalValue);
            storeA.current.chart.update();

            let { diff: _storeBDiff, totalValue: _storeBTotalValue } = calculateStore(storeBData, storeBTotalValue);
            setStoreBDiff(_storeBDiff);
            setStoreBTotalValue(_storeBTotalValue);
            storeB.current.chart.update();

            let { diff: _storeCDiff, totalValue: _storeCTotalValue } = calculateStore(storeCData, storeCTotalValue);
            setStoreCDiff(_storeCDiff)
            setStoreCTotalValue(_storeCTotalValue);
            storeC.current.chart.update();

            let { diff: _storeDDiff, totalValue: _storeDTotalValue } = calculateStore(storeDData, storeDTotalValue);
            setStoreDDiff(_storeDDiff);
            setStoreDTotalValue(_storeDTotalValue);
            storeD.current.chart.update();
        }, 2000)

        return () => {
            clearInterval(storeInterval);
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    useEffect(() => {
        if (props.isNewThemeLoaded) {
            chartMonthlyData = getChartData(props.colorMode);
            chartMonthlyOptions = getChartOptions();
            doughnutData = getDoughnutData(props.colorMode);
            doughnutOptions = getDoughnutOptions();
            pieData = getPieData(props.colorMode);
            pieOptions = getPieOptions();
            props.onNewThemeChange(false);
        }
    }, [props.isNewThemeLoaded, props.onNewThemeChange]); // eslint-disable-line react-hooks/exhaustive-deps

    const imageTemplate = (rowData, column) => {
        var src = "assets/demo/images/product/" + rowData.image;
        return <img src={src} alt={rowData.brand} width="50px" className="shadow-4" />;
    }

    const formatCurrency = (value) => {
        return value.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    };

    const actionTemplate = (rowData, column) => {
        return (
            <>
                <span className="p-column-title">View</span>
                <Button icon="pi pi-search" type="button" className={classNames('p-button-rounded p-button-text mb-1', { 'mr-2': !isRTL, 'ml-2': isRTL })}></Button>
            </>
        )
    }

    const priceBodyTemplate = (data) => {
        return (
            <>
                <span className="p-column-title">Price</span>
                {formatCurrency(data.price)}
            </>
        );
    };

    const bodyTemplate = (data, props) => {
        return (
            <>
                <span className="p-column-title">{props.header}</span>
                {data[props.field]}
            </>
        );
    };

    const changeMonthlyDataView = () => {
        if (bar.current.chart.options.scales.x.stacked) {
            bar.current.chart.options.scales.x.stacked = false;
            bar.current.chart.options.scales.y.stacked = false;
        }
        else {
            bar.current.chart.options.scales.x.stacked = true;
            bar.current.chart.options.scales.y.stacked = true;
        }

        bar.current.chart.update();
    }

    const changeDoughnutDataView = () => {
        if (doughnut.current.chart.options.cutout) {
            doughnut.current.chart.options.cutout = 0;
        }
        else {
            doughnut.current.chart.options.cutout = '50%';
        }

        doughnut.current.chart.update();
    }

    const togglePieDoughnut = () => {
        pie.current.chart.options.cutout = pie.current.chart.options.cutout ? 0 : 50;
        pie.current.chart.update();
    }

    const changePieDoughnutDataView = () => {
        if (pie.current.chart.options.circumference === 180) {
            pie.current.chart.options.circumference = 2 * 180;
            pie.current.chart.options.rotation = -90 / 2;
        } else {
            pie.current.chart.options.circumference = 180;
            pie.current.chart.options.rotation = -90;
        }

        pie.current.chart.update();
    }

    return (
        <div className="grid dashboard">
            <div className="col-12 md:col-8">
                <div className="card height-100">
                    <div className="card-header">
                        <h5>Monthly Comparison</h5>
                        <Button type="button" label="Vertical/Stacked Data" className={classNames('p-button-text', { 'ml-auto': !isRTL, 'mr-auto': isRTL })} onClick={changeMonthlyDataView}></Button>
                    </div>

                    <Chart ref={bar} type="bar" data={chartMonthlyData} options={chartMonthlyOptions} height="400px"></Chart>
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card widget-insights height-100">
                    <div className="card-header mb-2">
                        <h5>Insights</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu11.current.toggle(event)}></Button>
                            <Menu ref={menu11} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="card-subheader mb-2 flex align-items-center">
                        <span>November 22 - November 29</span>
                        <Button type="button" label="Semi/Full Data" className={classNames('p-button-text', { 'ml-auto': !isRTL, 'mr-auto': isRTL })} onClick={changeDoughnutDataView}></Button>
                    </div>
                    <div className="flex justify-content-center">
                        <Chart ref={doughnut} type="pie" data={doughnutData} options={doughnutOptions}></Chart>
                    </div>
                    <div className="flex flex-column justify-content-center">
                        <div className="flex flex-row align-items-center mt-4 px-3">
                            <i className="pi pi-thumbs-up p-3 rounded-circle lightgreen-bgcolor solid-surface-text-color"></i>
                            <div className={classNames('flex flex-column', { 'ml-3': !isRTL, 'mr-3': isRTL })}>
                                <span>Best Day of the Week</span>
                                <small>Friday</small>
                            </div>
                            <span className={classNames('indigo-color', { 'ml-auto': !isRTL, 'mr-auto': isRTL })}>95</span>
                        </div>
                        <div className="flex flex-row align-items-center my-4 px-3">
                            <i className="pi pi-thumbs-down rounded-circle p-3 orange-bgcolor solid-surface-text-color"></i>
                            <div className={classNames('flex flex-column', { 'ml-3': !isRTL, 'mr-3': isRTL })}>
                                <span>Worst Day of the Week</span>
                                <small>Saturday</small>
                            </div>
                            <span className={classNames('indigo-color', { 'ml-auto': !isRTL, 'mr-auto': isRTL })}> 6</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card widget-social">
                    <div className="flex justify-content-between align-items-center p-3">
                        <div className="social-icon">
                            <i className="pi pi-twitter blue-color fs-xxlarge"></i>
                        </div>
                        <div className="info flex flex-column">
                            <span className="value">44.995</span>
                            <span className="subtext mt-2">Retweets</span>
                        </div>
                    </div>

                    <div className="stats flex justify-content-between mt-3">
                        <div className="left flex flex-column">
                            <span className="title">Target</span>
                            <span className="value mb-2">10.000</span>
                            <ProgressBar value="50" showValue={false}></ProgressBar>
                        </div>
                        <div className="right flex flex-column">
                            <span className="title">All Time Record</span>
                            <span className="value mb-2">50.702</span>
                            <ProgressBar value="24" showValue={false}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card widget-social">
                    <div className="flex justify-content-between align-items-center p-3">
                        <div className="social-icon">
                            <i className="pi pi-facebook indigo-color fs-xxlarge"></i>
                        </div>
                        <div className="info flex flex-column">
                            <span className="value">44.995</span>
                            <span className="subtext mt-2">Facebook Interactions</span>
                        </div>
                    </div>

                    <div className="stats flex justify-content-between mt-3">
                        <div className="left flex flex-column">
                            <span className="title">Target</span>
                            <span className="value mb-2">10.000</span>
                            <ProgressBar value="23" showValue={false}></ProgressBar>
                        </div>
                        <div className="right flex flex-column">
                            <span className="title">All Time Record</span>
                            <span className="value mb-2">99.028</span>
                            <ProgressBar value="38" showValue={false}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card widget-social">
                    <div className="flex justify-content-between align-items-center p-3">
                        <div className="social-icon">
                            <i className="pi pi-github text-color fs-xxlarge"></i>
                        </div>
                        <div className="info flex flex-column">
                            <span className="value">81.002</span>
                            <span className="subtext mt-2">Star</span>
                        </div>
                    </div>

                    <div className="stats flex justify-content-between mt-3">
                        <div className="left flex flex-column ">
                            <span className="title">Target</span>
                            <span className="value mb-2">10.000</span>
                            <ProgressBar value="62" showValue={false}></ProgressBar>
                        </div>
                        <div className="right flex flex-column">
                            <span className="title">All Time Record</span>
                            <span className="value mb-2">162.550</span>
                            <ProgressBar value="14" showValue={false}></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-12">
                <div className="card grid grid-nogutter widget-sales block sm:flex">
                    <div className="lg:col-3 md:col-6 sm:col-12 p-0">
                        <div className="sales-info flex flex-column p-4">
                            <span className="muted-text">Store A Sales</span>
                            <span className="fs-large mt-2">
                                {storeADiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeADiff > 0, 'pi-arrow-down pink-color': storeADiff < 0 })}></i>}
                            ${storeATotalValue}
                                {storeADiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeADiff > 0, 'pink-color': storeADiff < 0 })}>
                                    {storeADiff > 0 ? '+' : ''}{storeADiff}
                                </span>}
                            </span>
                        </div>
                        <div className="px-4">
                            <Chart ref={storeA} type="line" data={storeAData} options={storeOptions}></Chart>
                        </div>
                    </div>
                    <div className="lg:col-3 md:col-6 sm:col-12 p-0">
                        <div className="sales-info flex flex-column p-4">
                            <span className="muted-text">Store B Sales</span>
                            <span className="fs-large mt-2">
                                {storeBDiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeBDiff > 0, 'pi-arrow-down pink-color': storeBDiff < 0 })}></i>}
                            ${storeBTotalValue}
                                {storeBDiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeBDiff > 0, 'pink-color': storeBDiff < 0 })}>
                                    {storeBDiff > 0 ? '+' : ''}{storeBDiff}
                                </span>}
                            </span>
                        </div>
                        <div className="px-4">
                            <Chart ref={storeB} type="line" data={storeBData} options={storeOptions}></Chart>
                        </div>
                    </div>
                    <div className="lg:col-3 md:col-6 sm:col-12 p-0">
                        <div className="sales-info flex flex-column p-4">
                            <span className="muted-text">Store C Sales</span>
                            <span className="fs-large mt-2">
                                {storeCDiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeCDiff > 0, 'pi-arrow-down pink-color': storeCDiff < 0 })}></i>}
                            ${storeCTotalValue}
                                {storeCDiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeCDiff > 0, 'pink-color': storeCDiff < 0 })}>
                                    {storeCDiff > 0 ? '+' : ''}{storeCDiff}
                                </span>}
                            </span>
                        </div>
                        <div className="px-4">
                            <Chart ref={storeC} type="line" data={storeCData} options={storeOptions}></Chart>
                        </div>
                    </div>
                    <div className="lg:col-3 md:col-6 sm:col-12 p-0">
                        <div className="sales-info flex flex-column p-4">
                            <span className="muted-text">Store D Sales</span>
                            <span className="fs-large mt-2">
                                {storeDDiff !== 0 && <i className={classNames('fw-700 fs-large pi', { 'pr-1': !isRTL, 'pl-1': isRTL, 'pi-arrow-up green-color': storeDDiff > 0, 'pi-arrow-down pink-color': storeDDiff < 0 })}></i>}
                            ${storeDTotalValue}
                                {storeDDiff !== 0 && <span className={classNames('fw-500 fs-normal', { 'ml-1': !isRTL, 'mr-1': isRTL, 'green-color': storeDDiff > 0, 'pink-color': storeDDiff < 0 })}>
                                    {storeDDiff > 0 ? '+' : ''}{storeDDiff}
                                </span>}
                            </span>
                        </div>
                        <div className="px-4">
                            <Chart ref={storeD} type="line" data={storeDData} options={storeOptions}></Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card height-100 widget-topsearchs">
                    <div className="card-header">
                        <h5>Top Searchs</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu12.current.toggle(event)}></Button>
                            <Menu ref={menu12} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="flex justify-content-between item">
                        <span>Mat Orange Case</span>
                        <span className="value type-green">82% CONV RATE</span>
                    </div>
                    <div className="flex justify-content-between item">
                        <span>Space T-Shirt</span>
                        <span className="value type-green">78% CONV RATE</span>
                    </div>
                    <div className="flex justify-content-between item">
                        <span>Orange Black Hoodie</span>
                        <span className="value type-green">61% CONV RATE</span>
                    </div>
                    <div className="flex justify-content-between item">
                        <span>Wonders Notebook</span>
                        <span className="value type-yellow">48 CONV RATE</span>
                    </div>
                    <div className="flex justify-content-between item">
                        <span>Robots T-Shirt</span>
                        <span className="value type-yellow">34% CONV RATE</span>
                    </div>
                    <div className="flex justify-content-between item">
                        <span>Green Portal Sticker</span>
                        <span className="value type-pink">11% CONV RATE</span>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-6">
                <div className="card">
                    <DataTable value={products} className="p-datatable-products" paginator={true} rows={4}
                        selection={selectedProduct} onSelectionChange={(e) => setSelectedProduct(e.value)}>
                        <Column header="Image" body={imageTemplate} style={{ width: '5rem' }} />
                        <Column field="name" body={bodyTemplate} header="Name" sortable />
                        <Column field="category" body={bodyTemplate} header="Category" sortable />
                        <Column field="price" header="Price" sortable body={priceBodyTemplate} />
                        <Column header="View" body={actionTemplate} style={{ width: '4rem' }} />
                    </DataTable>
                </div>
            </div>

            <div className="col-12 md:col-4">
                <div className="card widget-expenses">
                    <div className="card-header">
                        <h5>Expenses</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-h" className="p-button-rounded p-button-text p-button-plain" onClick={(event) => menu13.current.toggle(event)}></Button>
                            <Menu ref={menu13} popup={true} model={[{ label: 'Update', icon: 'pi pi-fw pi-refresh' }, { label: 'Edit', icon: 'pi pi-fw pi-pencil' }]}></Menu>
                        </div>
                    </div>
                    <div className="card-subheader mb-2 pb-3">
                        November 22 - November 29
                </div>

                    <div className="flex justify-content-between align-items-center my-2 item">
                        <div className="flex flex-column">
                            <i className="pi pi-cloud type mb-2"></i>
                            <span className="value mb-1">$30.247</span>
                            <span className="subtext">Cloud Infrastructure</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                    <div className="flex justify-content-between align-items-center my-2 item">
                        <div className="flex flex-column">
                            <i className="pi pi-tag type mb-2"></i>
                            <span className="value mb-1">$29.550</span>
                            <span className="subtext">General Goods</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                    <div className="flex justify-content-between align-items-center my-2 item">
                        <div className="flex flex-column">
                            <i className="pi pi-desktop type mb-2"></i>
                            <span className="value mb-1">$16.660</span>
                            <span className="subtext">Consumer Electronics</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                    <div className="flex justify-content-between align-items-center my-2 item">
                        <div className="flex flex-column">
                            <i className="pi pi-compass type mb-2"></i>
                            <span className="value mb-1">$5.801</span>
                            <span className="subtext">Incalculables</span>
                        </div>
                        <span className="item-button"><button className="p-link"><i className="pi pi-chevron-right"></i></button></span>
                    </div>
                </div>
            </div>

            <div className="col-12 md:col-8">
                <div className="card widget-traffic height-100">
                    <div className="card-header">
                        <h5>All Traffic Channels</h5>
                        <Button type="button" label="Pie/Doughnut Data" className={classNames('p-button-text', { 'ml-auto': !isRTL, 'mr-auto': isRTL })} onClick={() => togglePieDoughnut()}></Button>
                        <Button type="button" label="Semi/Full Data" className="p-button-text mx-2" onClick={changePieDoughnutDataView}></Button>
                    </div>
                    <div className="flex grid">
                        <div className="col-12 md:col-6 left flex flex-column justify-content-evenly">
                            <div className="total flex flex-column">
                                <span className="title mb-2">Total</span>
                                <span className="value mb-5">66.761</span>
                            </div>

                            <div className="info flex justify-content-between">
                                <div className="organic flex flex-column">
                                    <span className="title mb-1">Organic</span>
                                    <span className="value">51.596</span>
                                </div>
                                <div className="direct flex flex-column">
                                    <span className="title mb-1">Direct</span>
                                    <span className="value">11.421</span>
                                </div>
                                <div className="referral flex flex-column">
                                    <span className="title mb-1">Referral</span>
                                    <span className="value">3.862</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 md:col-6 right flex justify-content-center">
                            <Chart ref={pie} type="pie" data={pieData} options={pieOptions}></Chart>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const comparisonFn = function (prevProps, nextProps) {
    return (prevProps.location.pathname === nextProps.location.pathname) && (prevProps.colorMode === nextProps.colorMode) && (prevProps.isNewThemeLoaded === nextProps.isNewThemeLoaded) && (prevProps.onNewThemeChange === nextProps.onNewThemeChange);
};

export default React.memo(DashboardAnalytics, comparisonFn);
