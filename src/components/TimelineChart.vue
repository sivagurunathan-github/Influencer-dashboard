<template>
    <div class="dashboard p-4 flex items-center justify-center">
        <div class=" w-full max-w-6xl bg-slate-800/50 p-5 card-component">
            <div class="chart-container">
                <h1 class="text-xl text-white mb-6">PERFORMANCE TIMELINE</h1>
                <canvas ref="chartRef"></canvas>
            </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  const chartRef = ref(null);
  const chart = ref(null);
  
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [{
      label: 'Followers',
      data: [
        { x: 'January', y: 50000000 },
        { x: 'February', y: 99905210 },
        { x: 'March', y: 23905210 },
        { x: 'April', y: 150000000 },
        { x: 'May', y: 199905210 },
        { x: 'June', y: 180000000 }
      ],
      borderColor: 'rgb(147, 197, 253)',
      backgroundColor: 'rgba(147, 197, 253, 0.1)',
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointBackgroundColor: '#fff',
      pointBorderColor: 'rgb(147, 197, 253)',
      pointBorderWidth: 2,
      pointHitRadius: 10,
    }]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        intersect: false,
        mode: 'index',
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          backgroundColor: 'rgba(17, 24, 39, 0.8)',
          titleColor: '#fff',
          bodyColor: '#fff',
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (context) => {
              return context[0].raw.y.toLocaleString() + ' Followers';
            },
            label: (context) => {
              return 'on ' + context.raw.x + ' 10, 2024';
            }
          }
        }
      },
      scales: {
        x: {
          grid: {
            display: true,
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.5)',
            font: {
              size: 12
            }
          }
        },
        y: {
          grid: {
            display: true,
            color: 'rgba(255, 255, 255, 0.1)',
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.5)',
            font: {
              size: 12
            },
            callback: (value) => {
              return (value / 1000000).toFixed(0) + 'M';
            }
          }
        }
      }
    }
  };
  
  onMounted(() => {
    const ctx = chartRef.value.getContext('2d');
    chart.value = new Chart(ctx, config);
  });
  </script>
  
  <style scoped>
  .chart-container {
    position: relative;
    height: 400px;
    width: 100%;
    background-color: rgb(17, 24, 39);
    padding: 20px;
    border-radius: 8px;
  }
  </style>