<template>
    <div class="min-h-[300px] p-4 flex items-center justify-center">
        <div class="overflow-hidden w-full max-w-6xl bg-slate-800/50 p-5 card-component">
      
        <h1 class="text-white text-xl font-semibold mb-6">CONTENT SCANNER</h1>
        <div class="max-w-3xl mx-auto p-10">
        <!-- Search Input -->
        <div class="relative mb-6">
          <input 
            type="text" 
            v-model="searchQuery"
            placeholder="Type anything to search..."
            class="w-full bg-slate-800/50 text-white placeholder-gray-400 px-4 py-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            @input="handleSearch"
          />
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
          </span>
        </div>
  
        <!-- Popular Searches -->
        <div class="flex flex-wrap items-center gap-2">
          <span class="text-gray-400 text-sm">Popular searches:</span>
          <div class="flex flex-wrap gap-2">
            <button 
              v-for="category in categories" 
              :key="category.id"
              @click="selectCategory(category)"
              :class="[
                'px-3 py-1 rounded-full text-sm transition-all',
                'hover:bg-blue-600',
                searchQuery === category.name 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-slate-800 text-gray-300'
              ]"
            >
              {{ category.name }}
            </button>
          </div>
        </div>
  
        <!-- Search Results -->
        <div v-if="filteredResults.length > 0 && searchQuery" class="mt-6 bg-slate-800 rounded-lg p-4">
          <ul class="space-y-2">
            <li 
              v-for="result in filteredResults" 
              :key="result.id"
              class="p-3 hover:bg-slate-700 rounded-lg transition-colors"
            >
              <h3 class="text-white font-medium">{{ result.name }}</h3>
              <p class="text-gray-400 text-sm">{{ result.description }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue'
  
  // Sample data
  const categories = [
    { id: 1, name: 'Fashion' },
    { id: 2, name: 'Beauty' },
    { id: 3, name: 'Luxury' },
    { id: 4, name: 'Travel' }
  ]
  
  const items = [
    { id: 1, name: 'Summer Collection', category: 'Fashion', description: 'Latest summer fashion trends and styles' },
    { id: 2, name: 'Skincare Routine', category: 'Beauty', description: 'Essential skincare products and tips' },
    { id: 3, name: 'Designer Bags', category: 'Luxury', description: 'Premium designer handbags collection' },
    { id: 4, name: 'Beach Resorts', category: 'Travel', description: 'Top-rated beach destinations worldwide' },
    { id: 5, name: 'Winter Wear', category: 'Fashion', description: 'Cozy and stylish winter clothing' },
    { id: 6, name: 'Makeup Tutorial', category: 'Beauty', description: 'Step-by-step makeup application guides' },
    { id: 7, name: 'Luxury Watches', category: 'Luxury', description: 'Exclusive timepiece collection' },
    { id: 8, name: 'City Breaks', category: 'Travel', description: 'Popular urban vacation destinations' }
  ]
  
  const searchQuery = ref('')
  
  // Computed property for filtered results
  const filteredResults = computed(() => {
    if (!searchQuery.value) return []
    
    const query = searchQuery.value.toLowerCase()
    return items.filter(item => 
      item.name.toLowerCase().includes(query) || 
      item.category.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    )
  })
  
  // Methods
  const handleSearch = () => {
    // Additional search logic can be added here
  }
  
  const selectCategory = (category) => {
    searchQuery.value = category.name
  }
  </script>