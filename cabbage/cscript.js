// 팝업창시작

const open = () => {
document.querySelector(".modal").classList.remove("hidden");
}

const close = () => {
document.querySelector(".modal").classList.add("hidden");
}

document.querySelector(".openBtn").addEventListener("click", open);
document.querySelector(".closeBtn").addEventListener("click", close);
document.querySelector(".bg").addEventListener("click", close);

//팝업창끝

var sschartArea = document.getElementById('cchart').getContext('2d');

var cchart = new Chart(sschartArea, {
    type: 'line',
    data: {
        labels: ['전월', '현월', '다음월'],
        datasets: [
            {
                label: '최대값',
                data: [1200, 1900, 2200],
                backgroundColor: '#e24f31',
                borderColor: '#e24f31',
                borderWidth: 1,
                fill: false
            },
            {
                label: '예측값',
                data: [1000, 1600, 1500],
                backgroundColor: '#60c0ce',
                borderColor: '#60c0ce',
                borderWidth: 1,
                fill: false
            },
            {
                label: '최저값',
                data: [800, 1300, 800],
                backgroundColor: '#18b171',
                borderColor: '#18b171',
                borderWidth: 1,
                fill: false
            }
        ]
    },
    options: {
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