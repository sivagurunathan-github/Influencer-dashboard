<template>
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <slot></slot>
        <button class="close-button" @click="$emit('close')">
          Close
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import styled from '@emotion/styled'
  
  const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  `
  
  const ModalContent = styled.div`
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    max-width: 800px;
    width: 100%;
    position: relative;
  
    img {
      max-width: 100%;
      height: auto;
    }
  
    h3 {
      margin-top: 1rem;
    }
  
    p {
      margin-top: 0.5rem;
    }
  `
  
  const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  `
  
  export default defineComponent({
    emits: ['close']
  })
  </script>