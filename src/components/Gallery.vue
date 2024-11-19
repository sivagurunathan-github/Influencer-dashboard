<template>
    <div class="gallery-container min-h-screen p-4 flex items-center justify-center ">
        <div class="overflow-hidden w-full max-w-6xl bg-slate-800/50 p-5 card-component">
        <h1 class="text-xl text-white mb-6">AUDIENCE DEMOGRAPHICS</h1>
      <div class="gallery-grid">
        <div
          v-for="item in galleryItems"
          :key="item.id"
          :class="item.titleClass"
          @click="showModal(item)"
        >
          <img
            v-if="item.image"
            :src="item.image"
            :alt="item.title"
            :class="{ 'loading': !isImageLoaded(item) }"
            @load="onImageLoad(item)"
          />
          <div v-else class="placeholder">
            <div class="spinner"></div>
          </div>
        </div>
      </div>
      <div class="button-section w-full flex items-center justify-center">
        <button class="load-more bg-slate-950" @click="loadMoreItems" v-if="hasMoreItems">
            Load More
        </button>
        </div>
      <modal v-if="selectedItem" @close="selectedItem = null">
        <img :src="selectedItem.image" :alt="selectedItem.title" />
        <h3>{{ selectedItem.title }}</h3>
        <p>{{ selectedItem.description }}</p>
      </modal>
    </div>
</div>
  </template>

<style>
.gallery-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-bottom: 1px solid #1a1f37;
}
.card-component{
    border: 1px solid #35394d;
}
.gallery-container h1{
    text-align: left;
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  width: 100%;
  max-width: 1200px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item.one{
    grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
    order: 1
}

.gallery-item.twelve{
    grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
}
.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.gallery-item img.loading {
  opacity: 0;
}

.gallery-item:hover img {
  transform: scale(1.1);
}

.gallery-item .placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  height: 200px;
}

.gallery-item .placeholder .spinner {
  border: 4px solid #333;
  border-top-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.load-more {
  margin-top: 1.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #454753;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  height: 43px;
  width: 121px;
}
</style>
  
  <script>
  import { defineComponent, ref } from 'vue'
  import { useGalleryStore } from '../stores/gallery' 
  import Modal from './Modal.vue'
  import styled from '@emotion/styled'
  
  export default defineComponent({
    components: {
      Modal
    },
    setup() {
      const galleryStore = useGalleryStore()
      const selectedItem = ref(null)
  
      const showModal = (item) => {
        selectedItem.value = item
      }
  
      const loadMoreItems = () => {
        galleryStore.loadMoreItems()
      }
  
      const isImageLoaded = (item) => {
        return item.image && item.loaded
      }
  
      const onImageLoad = (item) => {
        galleryStore.markImageLoaded(item.id)
      }
  
      return {
        galleryItems: galleryStore.galleryItems,
        hasMoreItems: galleryStore.hasMoreItems,
        selectedItem,
        showModal,
        loadMoreItems,
        isImageLoaded,
        onImageLoad
      }
    }
  })
  </script>