window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: ["9월","10월","11월","12월","1월","2월","3월","4월","5월", "6월","7월","8월"],
      datasets: [
        {
          label: '평균값',        
          data: [1500,1300,1500,800,1800,1400,1000,1200,1300,800,1100,1800],
          backgroundColor: '#60c0ce',
          borderColor: '#60c0ce',
          borderWidth: 3,
          pointStyle: 'rectRot',
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: false
        },
        {
          label: '상품값',        
          data: [2000,1700,2200,1200,2300,1800,1200,1900,2000,1200,1300,2100],
          backgroundColor: '#e24f31',
          borderColor: '#e24f31',
          borderWidth: 3,
          pointStyle: 'rectRot',
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: false
        },
        {
          label: '중품값',        
          data: [1000,900,800,400,1300,1000,800,500,600,400,900,1500],
          backgroundColor: '#18b171',
          borderColor: '#18b171',
          borderWidth: 3,
          pointStyle: 'rectRot',
          pointRadius: 5,
          pointHoverRadius: 8,
          fill: false
      
        }
      ]
    },
    options: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
          },
        },
        annotation: {
          annotations: [
            {
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              value: '6월',
              borderWidth: 2,
              borderColor: "#F6BB43",
              label: {
                content: "현월",
                enabled: true,
                position: "top"
              }
            }
          ]
        },
        responsive: false,
        tooltips: {
          mode: 'index',
          intersect: true,
          titleFontSize: 15,
          bodyFontSize: 15
        },
        hover: {
          mode: 'index',
          intersect: true
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true,
              }
          }],
          xAxes: [{
            ticks: {
                  beginAtZero: true,
            }
          }]
        }
      }
  });
};