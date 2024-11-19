<template>
    <div class="min-h-screen bg-background text-white">
        <SideMenu />
        <!-- Main Content -->
        <main class="ml-16">
            <!-- Header -->
            <Header></Header>
            <InfluencerCard></InfluencerCard>
            <Gallery></Gallery>
            <Demographics></Demographics>
            <SearchComponent />
            <TimelineChart />
        </main>
    </div>
    
  </template>
  
  <script setup>
  import { User, MapPin, Star, TrendingUp } from 'lucide-vue-next'
  import SideMenu from './SideMenu.vue'
  import Header from './Header.vue'
  import InfluencerCard from './InfluencerCard.vue'
  import MetricCard from './MetricCard.vue'
  import Gallery from './Gallery.vue'
  import Demographics from './Demographics.vue'
  import SearchComponent from './SearchComponent.vue'
  import TimelineChart from './TimelineChart.vue';
  
  const tags = ['Beauty', 'Fashion', 'Lifestyle']
  
  const metrics = [
    {
      title: 'ENGAGEMENT RATE',
      value: '6.72%',
      trend: 'up',
      status: 'success',
      label: 'Excellent'
    },
    {
      title: 'ACTIVE FOLLOWERS',
      value: '77.75%',
      trend: 'up',
      status: 'warning',
      label: 'Average'
    },
    {
      title: 'EMV',
      value: '5.2M€',
      trend: 'down',
      status: 'error',
      label: 'Bad'
    }
  ]
  </script>