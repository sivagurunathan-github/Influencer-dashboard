<template>
    <div class="dashboard min-h-screen p-4 flex items-center justify-center">
        <div class="overflow-hidden w-full max-w-6xl bg-slate-800/50 p-5 card-component">
      <h1 class="text-xl text-white mb-6">AUDIENCE DEMOGRAPHICS</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Gender Distribution -->
        <div class="bg-slate-800 p-4 rounded-lg">
          <h2 class="text-white mb-4">GENDER</h2>
          <div class="relative h-64">
            <Doughnut :data="genderData" :options="genderOptions" />
            <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div class="text-2xl text-emerald-400">75.42%</div>
              <div class="text-sm text-gray-400">Female</div>
            </div>
          </div>
        </div>
  
        <!-- Age Distribution -->
        <div class="bg-slate-800 p-4 rounded-lg age-range">
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-white">AGE RANGE</h2>
            <span class="text-gray-400 text-sm">Show by Gender</span>
          </div>
          <Bar :data="ageData" :options="ageOptions" />
        </div>
  
        <!-- Top Countries -->
        <div class="bg-slate-800 p-4 rounded-lg">
          <h2 class="text-white mb-4">TOP COUNTRIES</h2>
          <div class="space-y-4">
            <div v-for="(country, index) in countries" :key="index" class="space-y-1">
              <div class="flex justify-between text-gray-400 text-sm">
                <span>{{ country.name }}</span>
                <span>{{ country.value }}M</span>
              </div>
              <div class="w-full bg-gray-700 rounded-full h-2">
                <div
                  class="h-2 rounded-full"
                  :class="country.color"
                  :style="{ width: `${(country.value / 20) * 100}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Ethnicities -->
        <div class="bg-slate-800 p-4 rounded-lg">
          <h2 class="text-white mb-4">TOP ETHNICITIES</h2>
          <div class="relative h-64">
            <Scatter :data="ethnicityData" :options="ethnicityOptions" />
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Bar, Doughnut, Scatter } from 'vue-chartjs'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  )
  
  // Gender Data
  const genderData = {
    labels: ['Female', 'Male'],
    datasets: [{
      data: [75.42, 24.58],
      backgroundColor: ['#10B981', '#6366F1'],
      borderWidth: 0,
      cutout: '75%'
    }]
  }
  
  const genderOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    }
  }
  
  // Age Data
  const ageData = {
    labels: ['13-17', '18-24', '25-34', '35-44', '45-64', '65+'],
    datasets: [{
      label: 'Female',
      data: [15, 35, 25, 10, 5, 2],
      backgroundColor: '#10B981'
    },
    {
      label: 'Male',
      data: [10, 20, 30, 8, 3, 1],
      backgroundColor: '#6366F1'
    }]
  }
  
  const ageOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#1F2937'
        },
        ticks: {
          color: '#9CA3AF'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#9CA3AF'
        }
      }
    },
    plugins: {
      legend: {
        display: false
      }
    }
  }
  
  // Countries Data
  const countries = ref([
    { name: 'Indonesia', value: 18.8, color: 'bg-emerald-400' },
    { name: 'Thailand', value: 13.8, color: 'bg-indigo-400' },
    { name: 'Philippines', value: 9.0, color: 'bg-indigo-400' },
    { name: 'Brazil', value: 5.5, color: 'bg-indigo-400' }
  ])
  
  // Ethnicity Data
  const ethnicityData = {
    datasets: [{
      label: 'Ethnicities',
      data: [
        { x: 0, y: 0, r: 20, label: 'Asian' },
        { x: -1, y: -1, r: 15, label: 'White/Caucasian' },
        { x: 1, y: -1, r: 10, label: 'Hispanic' },
        { x: 0, y: -2, r: 8, label: 'African American' }
      ],
      backgroundColor: ['#10B981', '#6366F1', '#6366F1', '#6366F1']
    }]
  }
  
  const ethnicityOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      }
    },
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: (context) => context.raw.label
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .dashboard {
    font-family: system-ui, -apple-system, sans-serif;
  }
  .age-range{
    max-height: 500px;
  }
  </style>