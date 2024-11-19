<template>
    <Card class="bg-metric-bg">
      <div class="p-4">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-sm text-gray-400">{{ title }}</h3>
          <TrendingUp 
            :class="[
              trend === 'up' ? 'rotate-0' : 'rotate-180',
              statusColors[status]
            ]" 
            class="w-4 h-4"
          />
        </div>
        <div :class="['text-2xl font-bold', statusColors[status]]">
          {{ value }}
        </div>
        <div :class="['text-sm', statusColors[status]]">
          {{ label }}
        </div>
      </div>
    </Card>
  </template>
  
  <script setup>
  import { TrendingUp } from 'lucide-vue-next'
  import Card from './ui/Card.vue'
  
  defineProps({
    title: String,
    value: String,
    trend: {
      type: String,
      validator: (value) => ['up', 'down'].includes(value)
    },
    status: {
      type: String,
      validator: (value) => ['success', 'warning', 'error'].includes(value)
    },
    label: String
  })
  
  const statusColors = {
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  }
  </script>