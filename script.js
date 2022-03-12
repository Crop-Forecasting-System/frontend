var bchartArea = document.getElementById('bchart').getContext('2d');
var mchartArea = document.getElementById('mchart').getContext('2d');
var ochartArea = document.getElementById('ochart').getContext('2d');
var gchartArea = document.getElementById('gchart').getContext('2d');

var bchart = new Chart(bchartArea, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: [
            {
                label: '최대값',
                data: [1200, 1900, 2200, 1400, 1000, 900],
                backgroundColor: '#e24f31',
                borderColor: '#e24f31',
                borderWidth: 1,
                fill: false
            },
            {
                label: '예측값',
                data: [1000, 1600, 1500, 800, 800, 600],
                backgroundColor: '#60c0ce',
                borderColor: '#60c0ce',
                borderWidth: 1,
                fill: false
            },
            {
                label: '최저값',
                data: [800, 1300, 800, 200, 600, 300],
                backgroundColor: '#18b171',
                borderColor: '#18b171',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: '배추가격'
        },
        legend: {
            position:'bottom',
            labels: {
                boxWidth: 10
            }
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
    }
});

var mchart = new Chart(mchartArea, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: [
            {
                label: '최대값',
                data: [1200, 1900, 2200, 1400, 1000, 900],
                backgroundColor: '#e24f31',
                borderColor: '#e24f31',
                borderWidth: 1,
                fill: false
            },
            {
                label: '예측값',
                data: [1000, 1600, 1500, 800, 800, 600],
                backgroundColor: '#60c0ce',
                borderColor: '#60c0ce',
                borderWidth: 1,
                fill: false
            },
            {
                label: '최저값',
                data: [800, 1300, 800, 200, 600, 300],
                backgroundColor: '#18b171',
                borderColor: '#18b171',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: '무가격'
        },
        legend: {
            position:'bottom',
            labels: {
                boxWidth: 10
            }
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
    }
});

var ochart = new Chart(ochartArea, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: [
            {
                label: '최대값',
                data: [1200, 1900, 2200, 1400, 1000, 900],
                backgroundColor: '#e24f31',
                borderColor: '#e24f31',
                borderWidth: 1,
                fill: false
            },
            {
                label: '예측값',
                data: [1000, 1600, 1500, 800, 800, 600],
                backgroundColor: '#60c0ce',
                borderColor: '#60c0ce',
                borderWidth: 1,
                fill: false
            },
            {
                label: '최저값',
                data: [800, 1300, 800, 200, 600, 300],
                backgroundColor: '#18b171',
                borderColor: '#18b171',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: '양파가격'
        },
        legend: {
            position:'bottom',
            labels: {
                boxWidth: 10
            }
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
    }
});

var gchart = new Chart(gchartArea, {
    type: 'line',
    data: {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월'],
        datasets: [
            {
                label: '최대값',
                data: [1200, 1900, 2200, 1400, 1000, 900],
                backgroundColor: '#e24f31',
                borderColor: '#e24f31',
                borderWidth: 1,
                fill: false
            },
            {
                label: '예측값',
                data: [1000, 1600, 1500, 800, 800, 600],
                backgroundColor: '#60c0ce',
                borderColor: '#60c0ce',
                borderWidth: 1,
                fill: false
            },
            {
                label: '최저값',
                data: [800, 1300, 800, 200, 600, 300],
                backgroundColor: '#18b171',
                borderColor: '#18b171',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
        title: {
            display: true,
            text: '건고추가격'
        },
        legend: {
            position:'bottom',
            labels: {
                boxWidth: 10
            }
        },
        responsive: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        },
    }
});
