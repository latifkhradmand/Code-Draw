const ctx = document.getElementById("myChart");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "Jun",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Learning",
        data: [87, 69, 34, 47, 50, 68, 57, 98, 76, 80, 59, 95],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(201, 203, 207, 0.5)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderWidth: 2,
      },
      {
        label: "Practice",
        data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
        backgroundColor: [
          "rgba(201, 203, 207, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(255, 205, 86, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
        ],
        borderColor: [
          "rgb(201, 203, 207)",
          "rgb(153, 102, 255)",
          "rgb(54, 162, 235)",
          "rgb(75, 192, 192)",
          "rgb(255, 205, 86)",
          "rgb(255, 159, 64)",
          "rgb(255, 99, 132)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});


const circleChart = document.getElementById("circleChart");

new Chart(circleChart, {
  type: "doughnut",
  data: {
    labels: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
      "Java",
      "C++",
    ],
    datasets: [
      {
        label: "Learning",
        data: [87, 69, 34, 47, 50, 68, 57],
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(201, 203, 207, 1)",
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  
});
