var chartData = {
  labels: ["9","10","11","12","1","2","3","4","5", "6","7","8"],
  datasets: [
    {
      label: '평균값',        
      data: [{x: 1, y: 1500}, {x: 2, y: 1300}, {x: 3, y: 1500}, {x: 4, y: 800}, {x: 5, y: 1800}, {x: 6, y: 1400}, {x: 7, y: 1000}, {x: 8, y: 1200}, {x: 9, y: 1300}, {x: 10, y: 800}, {x: 11, y: 1100}, {x: 12, y: 1800}],
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
      data: [{x: 1, y: 2000}, {x: 2, y: 1700}, {x: 3, y: 2200}, {x: 4, y: 1200}, {x: 5, y: 2300}, {x: 6, y: 1800}, {x: 7, y: 1200}, {x: 8, y: 1900}, {x: 9, y: 2000}, {x: 10, y: 1200}, {x: 11, y: 1300}, {x: 12, y: 2100}],
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
      data: [{x: 1, y: 1000}, {x: 2, y: 900}, {x: 3, y: 800}, {x: 4, y: 400}, {x: 5, y: 1300}, {x: 6, y: 1000}, {x: 7, y: 800}, {x: 8, y: 500}, {x: 9, y: 600}, {x: 10, y: 400}, {x: 11, y: 900}, {x: 12, y: 1500}],
      backgroundColor: '#18b171',
      borderColor: '#18b171',
      borderWidth: 3,
      pointStyle: 'rectRot',
      pointRadius: 5,
      pointHoverRadius: 8,
      fill: false
  
    }
  ]

};


window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: chartData,
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
              value: 10,
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
          intersect: true
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
            type: 'linear',
            ticks: {
                  stepSize: 1,
                  callback: function(value, index, values) {
                      return chartData.labels[index];
                  }
            }
          }]
        }
      }
  });
};