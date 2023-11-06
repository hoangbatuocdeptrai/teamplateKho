//[Dashboard Javascript]

//Project:	Deposito Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

    'use strict';


    var options = {
        series: [{
            data: [48, 31, 42, 17, 41, 25, 54, 20]
        }],
        chart: {
            type: 'area',
            height: 250,
            toolbar: {
                show: false,
            }
        },
        stroke: {
            curve: 'stepline'
        },

        grid: {
            show: true,
        },
        dataLabels: {
            enabled: false
        },
        colors: ['#a45ff8'],
        xaxis: {
            categories: ['Khu vực 1', 'Khu vực 2', 'Khu vực 3', 'Khu vực 4', 'Khu vực 5', 'Khu vực 6', 'Khu vực 7', 'Khu vực 8'],
            labels: {
                show: true,
            },
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: true,
            },
        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "%"
                }
            },
            marker: {
                show: false,
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#topcities"), options);
    chart.render();

    var options = {
        series: [{
            name: 'Nhập',
            data: [76, 85, 101, 98, 87, 45, 96, 55]
        }, {
            name: 'Tồn',
            data: [54, 45, 67, 76, 31, 32, 67, 45]
        }, {
            name: 'Xuất',
            data: [30, 25, 47, 56, 21, 22, 31, 41]
        }],
        chart: {
            type: 'bar',
            foreColor: "#bac0c7",
            stacked: false,
            height: 273,
            toolbar: {
                show: false,
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 5,
                horizontal: false,
                columnWidth: '80%',
            },
        },
        dataLabels: {
            enabled: false,
        },
        grid: {
            show: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        colors: ['#5b33c9', '#8865f8', '#6cbbfa'],
        xaxis: {
            categories: ['TKM01', 'TKM02', 'TKM03', 'TKM04', 'TKM05', 'TKM06', 'TKM07', 'TKM08'],

        },
        yaxis: {
            labels: {
                show: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'center',
            fontSize: '18px',
            fontFamily: 'Rubik, sans-serif',
            fontWeight: 400,
        },
        fill: {
            opacity: 1
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            },
            marker: {
                show: false,
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#recent_trend"), options);
    chart.render();


    var bar = new ProgressBar.Circle(progressbar1, {
        color: '#ffffff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 5,
        trailColor: '#6b9dfc',
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#ffffff', width: 5 },
        to: { color: '#ffffff', width: 5 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 150);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.78);



    var bar = new ProgressBar.Circle(progressbar2, {
        color: '#ffffff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 5,
        trailColor: '#6b9dfc',
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#ffffff', width: 5 },
        to: { color: '#ffffff', width: 5 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 150);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.60);



    var bar = new ProgressBar.Circle(progressbar3, {
        color: '#ffffff',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 5,
        trailColor: '#6b9dfc',
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#ffffff', width: 5 },
        to: { color: '#ffffff', width: 5 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 150);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.40);



    var bar = new ProgressBar.Circle(progressbar4, {
        color: '#ffb550',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 10,
        trailWidth: 2,
        trailColor: '#73bda4',
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#ffb550', width: 5 },
        to: { color: '#ffb550', width: 5 },
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 150);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(0.80);


    $('.inner-user-div3').slimScroll({
        height: '506px'
    });



    // Apex  start
    if ($('#apexChart2').length) {
        var options2 = {
            chart: {
                type: "bar",
                height: 73,
                width: 100,
                sparkline: {
                    enabled: !0
                }
            },
            plotOptions: {
                bar: {
                    columnWidth: "20%"
                }
            },
            colors: ["#ffffff"],
            series: [{
                data: [36, 77, 52, 90, 74, 35, 55, 23]
            }],
            xaxis: {
                crosshairs: {
                    width: 5
                }
            },
            tooltip: {
                fixed: {
                    enabled: !1
                },
                x: {
                    show: !1
                },
                y: {
                    title: {
                        formatter: function (e) {
                            return ""
                        }
                    }
                },
                marker: {
                    show: !1
                }
            }
        };
        new ApexCharts(document.querySelector("#apexChart2"), options2).render();
    }
    // Apex  end


    var options = {
        series: [
            {
                name: "Amazon",
                data: [12, 42, 14, 28, 13, 40, 21]
            },
            {
                name: "Flipkart",
                data: [28, 10, 23, 40, 25, 15, 41]
            },
            {
                name: "Alibaba",
                data: [14, 28, 42, 18, 40, 30, 12]
            },
        ],
        chart: {
            height: 305,
            type: 'line',
            dropShadow: {
                enabled: true,
                color: '#000',
                top: 18,
                left: 7,
                blur: 10,
                opacity: 0.2
            },
            toolbar: {
                show: false
            }
        },
        colors: ['#2e72ff', '#fb5ea8', '#00875a'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: 'smooth',
            width: 3,
        },
        grid: {
            borderColor: '#e7e7e7',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        },
        legend: {
            show: false,
        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return "Total" + val + " Inventory"
                }
            },
            marker: {
                show: true,
            },
        }
    };

    var chart = new ApexCharts(document.querySelector("#overview_trend"), options);
    chart.render();


}); // End of use strict