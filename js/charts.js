$(function () {

    function createChart(labelText, unit, minRefValue, maxRefValue, data) {
        var minRefLabel = 'ref min ' + minRefValue
        var maxRefLabel = 'ref max ' + maxRefValue
        var subtitle = 'Unit: ' + unit + ' | reference min: ' + minRefValue + ' | reference max: ' + maxRefValue

        return new Highcharts.Chart({
            chart: {
                renderTo: labelText.toLowerCase(),
                type: 'line',
                borderColor: '#c0c0c0',
                borderWidth: 1,
                borderRadius: 3                
            },
            title: {
                text: labelText
            },
            subtitle: {
                text: subtitle
            },
            xAxis: {
                min: -1,
                max: 68,
                tickInterval: 1,
                plotLines: [{
                    value: 2,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 5,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 9,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                },{
                    label: {
                        text: 'CT',
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        }
                    },
                    value: 12,
                    zIndex: 3,
                    width: 1,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 13,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 18,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 23,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 28,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 32,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 38,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 40,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 43,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    label: {
                        text: 'PET-CT',
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        }
                    },
                    value: 46,
                    zIndex: 3,
                    width: 1,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 52,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    value: 56,
                    width: 1,
                    zIndex: 3,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    label: {
                        text: 'CT - 1st check-up',
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        }
                    },
                    value: 59,
                    zIndex: 3,
                    width: 1,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    label: {
                        text: 'CT - 2nd check-up',
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        }
                    },
                    value: 64,
                    zIndex: 3,
                    width: 1,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }, {
                    label: {
                        text: 'CT - 3rd check-up',
                        style: {
                            color: 'green',
                            fontWeight: 'bold'
                        }
                    },
                    value: 67,
                    zIndex: 3,
                    width: 1,
                    dashStyle: 'longdashdot',
                    color: 'rgba(0, 0, 0, 0.7)'
                }],
                plotBands: [{
                    label: {
                        text: '1st cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 2, // Start of the plot band
                    to: 5 // End of the plot band
                }, {
                    label: {
                        text: '2nd cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 5, // Start of the plot band
                    to: 9 // End of the plot band
                }, {
                    label: {
                        text: '3rd cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 9, // Start of the plot band
                    to: 13 // End of the plot band
                }, {
                    label: {
                        text: '4th cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 13, // Start of the plot band
                    to: 18 // End of the plot band
                }, {
                    label: {
                        text: '5th cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 18, // Start of the plot band
                    to: 23 // End of the plot band
                }, {
                    label: {
                        text: '6th cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 23, // Start of the plot band
                    to: 28 // End of the plot band
                }, {
                    label: {
                        text: '7th cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 28, // Start of the plot band
                    to: 32 // End of the plot band
                }, {
                    label: {
                        text: '8th cycle'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 32, // Start of the plot band
                    to: 38 // End of the plot band
                }, {
                    label: {
                        text: 'Mono1'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 40, // Start of the plot band
                    to: 43 // End of the plot band
                }, {
                    label: {
                        text: 'Mono 2'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 43, // Start of the plot band
                    to: 46 // End of the plot band
                }, {
                    label: {
                        text: 'slight cold'
                    },
                    zIndex: 3,
                    color: 'rgba(211, 211, 211, 0.3)', // Color value
                    from: 52, // Start of the plot band
                    to: 56 // End of the plot band
                }]
                //categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                labels: {
                    enabled: false // deactivates the value labels on the left
                },
                title: {
                    text: null // deactivates the title on the left
                },                
                plotLines: [{
                    label: {
                        text: minRefLabel
                    },
                    zIndex: 2,
                    value: minRefValue,
                    width: 2,
                    dashStyle: 'longdashdot',
                    color: 'rgba(69, 139, 116, 1)'
                }, {
                    value: maxRefValue,
                    zIndex: 3,
                    color: 'rgba(69, 139, 116, 1)',   
                    dashStyle: 'longdashdot',
                    width: 2,
                    label: {
                        text: maxRefLabel
                    }
                }],
                plotBands: [{
                    color: 'rgba(69, 139, 116, 0.3)',
                    from: minRefValue,
                    to: maxRefValue
                }]
            },
            plotOptions: {
                line: {
                    dataLabels: {
                        enabled: true
                    },
                    enableMouseTracking: false
                }
            },  
            series: [{
                name: labelText,
                //type: 'spline',
                dashStyle: 'shortdot',
                color: 'red',
                data: data
            }]
        });        
    }

    createChart('Leukozyten', 'x10^3 uL', 4.5, 10.5, [
        3.4,3.5,3.6,8.8,8,14.1,1.3,1.8,5.8,8.2,2.5,2.8,7.5,13.4,2,7,4.6,3.1,3.7,3.6,1.6,15.5,7.3,7.5,3.2,2.1,4.5,1.4,10,4.4,2.3
        ,2,13.5,5.7,1.1,0.8,0.7,3.4,12.1,7,3.3,3.1,2.4,3.6,2.7,2.3,3.8,2.6,2,1.9,2.7,2.2,1.8,1.7,1.2,2.3,3.3,3.1,3.3,3.6,3.4,3.5,
        4.4,4.4,4.1,3.2,5.5,4.4
    ]);

    createChart('Granulozyten', 'x10^3 uL', 1.4, 6.5, [
        2.3,2.7,2.9,8.3,7.1,12.5,1.1,1.6,4.5,6.8,1.9,2.5,5.8,11.7,1.7,5.3,2.8,2.5,2.8,3.3,0.9,13.7,6.5,6.8,3,1.8,3.9,1.2,9.5,2.9
        ,2,1.8,11.4,5.5,0.7,0.5,0.4,2.1,10.4,6.1,2.6,2.2,1.9,3,2.1,1.7,3.1,2,1.3,1,1.9,1.4,0.9,1,0.4,0.8,2.4,2.1,2.3,2.5,2.4,2.4,
        3.1,3,3.1,2.4,4.1,3
    ]);

    createChart('Haemoglobin', 'g/dL', 13.5, 17.5, [
        13.9,13,12,11.7,11,9.9,9.1,9.4,10.3,10.5,9.5,9.3,9.2,9.4,8.1,9.5,10,10.5,10.6,9.3,9,9.5,10.2,10.3,8.5,8,11.7,9.9,9.1,10,
        10.7,9.1,9.3,9.2,9.1,8.2,7.7,10.3,10.1,11.5,11.2,12.2,12.1,12.8,13.4,12.1,13.4,12.9,13,13.2,13.7,14,14.2,14,13.6,13.7,
        14.6,13.8,14.2,13.8,14,13.7,13.9,13.8,13.6,14.3,13.9,14.7
    ]);

    createChart('Thrombozyten', 'x10^3 uL', 150, 450, [
        328,372,319,310,91,117,203,163,94,125,220,269,174,104,112,78,131,194,303,125,71,143,186,199,120,74,145,136,101,162,221,
        236,151,109,105,76,56,64,150,242,177,215,115,117,134,169,195,161,197,197,178,175,173,167,154,218,197,207,175,171,162,
        171,178,200,169,215,150,198
    ]);

    createChart('LDH', 'U/l', 87, 241, [
        [2, 263],[4, 320],[5, 263],[6, 136],[7, 142],[9, 243],[11, 123],[13, 280],[14, 136],[18, 164],
        [19, 136],[21, 241],[23, 196],[24, 129],[25, 151],[26, 201],[27, 130],[28, 212],[30, 197],[43, 177],
        [44, 136],[47, 150],[48, 123],[53, 170],[59, 134],[67, 125]
    ]);              
});
