<template>
    <div class="rounded-lg" :class="[className]">
      <slot />
    </div>
  </template>
  
  <script setup>
  defineProps({
    className: {
      type: String,
      default: 'bg-card-bg'
    }
  })
  </script>