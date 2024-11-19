<template>
    <div class="min-h-screen p-4 flex items-center justify-center mt-6">
      <div class=" overflow-hidden w-full max-w-6xl">
        <div class="flex flex-col md:flex-row flex=wrap">
          <!-- Left side - Profile Image -->
          <div class="w-full md:w-1/2 profile-img">
            <img 
              src="https://picsum.photos/id/1/200/300"
              alt="Profile Image"
              class="w-full h-full object-cover"
            />
          </div>
  
          <!-- Right side - Profile Info -->
          <div class="w-full md:w-1/2 p-3 pt-0 space-y-6">
            <div class="card-container flex space-between ">
                <div class="left-section">
                    <div class="profile-card card-design bg-slate-800/50">
                        <!-- Header with Name and Followers -->
                        <div class="flex justify-between items-start top-section">
                        <div>
                            <div class="flex items-center gap-2">
                            <h1 class="text-2xl font-bold text-white">LISA</h1>
                            <svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293l-4-4a1 1 0 00-1.414 0l-4 4a1 1 0 101.414 1.414L9 7.414V15a1 1 0 102 0V7.414l3.293 3.293a1 1 0 001.414-1.414z"/>
                            </svg>
                            </div>
                            <p class="text-gray-400">@lalalalisa_m</p>
                        </div>
                        <div class="text-right">
                            <div class="flex items-center gap-1">
                            <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                            </svg>
                            <span class="text-xl font-bold text-white">104.0M</span>
                            </div>
                            <p class="text-gray-400 text-sm">Followers</p>
                        </div>
                        </div>
            
                        <!-- Profile Details -->
                        <div class="flex justify-between items-start profile-list-section">
                            <div>
                                <div class="flex items-center gap-3 text-gray-300 mb-2.5">
                                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"/>
                                    </svg>
                                    <span>Influencer</span>
                                </div>
                                <div class="flex items-center gap-3 text-gray-300 mb-2.5">
                                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                                    </svg>
                                    <span>Beauty, Fashion, Lifestyle</span>
                                </div>
                                <div class="flex items-center gap-3 text-gray-300 mb-2.5">
                                    
                                    <span>#  Dior, Celine, Fashion</span>
                                </div>
                            </div>
                            <div class="text-right">
                                <div class="flex items-center gap-3 text-gray-300 mb-2.5">
                                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Thailand</span>
                                </div>
                                <div class="flex items-center gap-3 text-gray-300 mb-2.5">
                                    <svg class="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                                    </svg>
                                    <span>Female</span>
                                </div>
                            </div>
                        
                        
                        </div>
            
                        <div class="flex justify-between items-center mt-4">
                        <!-- Social Links -->
                        <div class="flex gap-4 text-gray-400">
                        <a href="#" class="hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                            </svg>
                        </a>
                        <a href="#" class="hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                            </svg>
                        </a>
                        <a href="#" class="hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </a>
                        </div>
            
                        <div class="text-xs text-gray-400">Added on Sep 5, 2018</div>
                    </div>
                    </div>
                    <!-- Quality Score Section -->
                     
                        <div class="card-design bg-slate-800/50">
                            <h3 class="text-gray-400 text-sm font-medium mb-4">QUALITY SCORE</h3>
                            <div class="flex items-center justify-between">
                                <div>
                                <div class="flex items-center gap-1">
                                    <span class="text-yellow-400 text-4xl font-bold">54</span>
                                    <span class="text-gray-400 text-sm">/100</span>
                                </div>
                                <p class="text-yellow-400 text-xs">Average</p>
                                </div>
                                <div class="w-48 h-48">
                                <canvas ref="radarChart"></canvas>
                                </div>
                            </div>
                        </div>
                    
                </div>
                
                <!-- Stats Grid -->
                <div class="right-section flex flex-col">
                <!-- Engagement Rate -->
                <div class="bg-slate-800/50  p-4 card-design">
                    <h3 class="text-gray-400 text-xs font-medium mb-12">ENGAGEMENT RATE</h3>
                    <div class="flex items-center gap-1 mt-1">
                    <span class="text-green-400 text-2xl font-bold">6.72%</span>
                    <svg class="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                    </div>
                    <p class="text-green-400 text-xs mt-1">Excellent</p>
                </div>
    
                <!-- Active Followers -->
                <div class="bg-slate-800/50  p-4 card-design">
                    <h3 class="text-gray-400 text-xs font-medium mb-12">ACTIVE FOLLOWERS</h3>
                    <div class="flex items-center gap-1 mt-1">
                    <span class="text-yellow-400 text-2xl font-bold">77.75%</span>
                    <svg class="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                    </div>
                    <p class="text-yellow-400 text-xs mt-1">Average</p>
                </div>
                <!-- Active Followers -->
                <div class="bg-slate-800/50  p-4 card-design">
                    <h3 class="text-gray-400 text-xs font-medium mb-12">EMV</h3>
                    <div class="flex items-center gap-1 mt-1">
                    <span class="text-red-400 text-2xl font-bold">5.2ME</span>
                    <svg class="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
                    </svg>
                    </div>
                    <p class="text-red-400 text-xs mt-1">Bad</p>
                </div>
                </div>

                
                </div>
    
                
            </div>
          </div>
        </div>
      </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import Chart from 'chart.js/auto'
  
  const radarChart = ref(null)
  
  onMounted(() => {
    const ctx = radarChart.value.getContext('2d')
    
    new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Growth', 'Engagement', 'Reach', 'Impact', 'Trust'],
        datasets: [{
          data: [80, 60, 40, 50, 40],
          backgroundColor: 'rgba(255, 191, 0, 0.1)',
          borderColor: 'rgba(255, 191, 0, 0.6)',
          pointBackgroundColor: 'rgba(255, 191, 0, 1)',
          borderWidth: 1,
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255, 191, 0, 1)'
        }]
      },
      options: {
        scales: {
          r: {
            beginAtZero: true,
            max: 100,
            ticks: {
              display: false
            },
            grid: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            angleLines: {
              color: 'rgba(255, 255, 255, 0.1)',
            },
            pointLabels: {
              color: 'rgba(255, 255, 255, 0.6)',
              font: {
                size: 10
              }
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    })
  })
  </script>

<style scoped>
.top-section{
    border-bottom: 1px solid #1a1f37;
    padding-bottom: 20px;
    margin-bottom: 20px;
}
.left-section{
    width: 70%;
    margin-right: 10px;
}
.right-section{
    width: 30%
}
.card-design{
    border: 1px solid #35394d;
    padding: 20px;
    margin-bottom: 10px;
}
.profile-img{
    max-height: 560px;
}
.profile-card {
    
}
</style>