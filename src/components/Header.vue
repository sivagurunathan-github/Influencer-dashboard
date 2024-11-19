<template>
    <header class="bg-slate-900 text-white px-4 py-3">
      <nav class="container mx-auto flex justify-between items-center">
        <!-- Left section -->
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">PROFILES</a>
          <span class="text-gray-600">/</span>
          <a href="#" class="text-white hover:text-gray-200">LISA</a>
        </div>
  
        <!-- Right section -->
        <div class="flex items-center space-x-6">
          <!-- Social Media Icons -->
          <div class="hidden md:flex items-center space-x-4">
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-400 hover:text-white">
              <i class="fab fa-youtube"></i>
            </a>
          </div>
  
          <!-- Currency Selector -->
          <div class="relative">
            <select 
              class="bg-transparent text-gray-400 hover:text-white cursor-pointer appearance-none pr-8 focus:outline-none"
              v-model="selectedCurrency"
            >
              <option value="EUR">CURRENCY: EUR</option>
              <option value="USD">CURRENCY: USD</option>
              <option value="GBP">CURRENCY: GBP</option>
            </select>
            <span class="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i class="fas fa-chevron-down text-xs text-gray-400"></i>
            </span>
          </div>
  
          <!-- Mobile Menu Button -->
          <button 
            class="md:hidden text-gray-400 hover:text-white"
            @click="toggleMobileMenu"
          >
            <i class="fas fa-bars"></i>
          </button>
        </div>
      </nav>
  
      <!-- Mobile Menu -->
      <div 
        v-if="isMobileMenuOpen" 
        class="md:hidden mt-2 py-4 border-t border-gray-700"
      >
        <div class="flex justify-center space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <i class="fab fa-youtube"></i>
          </a>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const selectedCurrency = ref('EUR')
  const isMobileMenuOpen = ref(false)
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  </script>
  
  <style scoped>
  select option {
    background-color: #1a1a1a;
    color: white;
  }
  </style>