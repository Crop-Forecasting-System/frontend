var chartData = {
    labels: ["9","10","11","12","1","2","3","4","5", "6","7","8"],
    datasets: [{
        label: '평균값',        
        data: [{x: 1, y: 1200}, {x: 2, y: 1300}, {x: 3, y: 1500}, {x: 4, y: 1000}, {x: 5, y: 1800}, {x: 6, y: 1400}, {x: 7, y: 1000}, {x: 8, y: 1200}, {x: 9, y: 1300}, {x: 10, y: 800}, {x: 11, y: 1100}, {x: 12, y: 1000}]
    
    }]
};

var hchartData = {
  labels: ["9","10","11","12","1","2","3","4","5", "6","7","8"],
  datasets: [{
      label: '상품값',        
      data: [{x: 1, y: 1200}, {x: 2, y: 2000}, {x: 3, y: 1500}, {x: 4, y: 1000}, {x: 5, y: 1800}, {x: 6, y: 1400}, {x: 7, y: 1000}, {x: 8, y: 1200}, {x: 9, y: 1300}, {x: 10, y: 800}, {x: 11, y: 1100}, {x: 12, y: 1000}]
  
  }]
};
var mchartData = {
  labels: ["9","10","11","12","1","2","3","4","5", "6","7","8"],
  datasets: [{
      label: '중품값',        
      data: [{x: 1, y: 1200}, {x: 2, y: 700}, {x: 3, y: 1500}, {x: 4, y: 1000}, {x: 5, y: 1800}, {x: 6, y: 1400}, {x: 7, y: 1000}, {x: 8, y: 1200}, {x: 9, y: 1300}, {x: 10, y: 800}, {x: 11, y: 1100}, {x: 12, y: 1000}]
  
  }]
};

window.onload = function() {
  var ctx = document.getElementById("canvas").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: chartData, hchartData, mchartData,
    options: {
        legend: {
          display: false,
        },
        annotation: {
          annotations: [
            {
              drawTime: "afterDatasetsDraw",
              type: "line",
              mode: "vertical",
              scaleID: "x-axis-0",
              value: 10,
              borderWidth: 2,
              borderColor: "#e24f31",
              label: {
                content: "현월",
                enabled: true,
                position: "top"
              }
            }
          ]
        },
        responsive: false,
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