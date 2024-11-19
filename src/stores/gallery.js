import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
    state: () => ({
        galleryItems: [
            {
                id: 1,
                image: 'https://picsum.photos/id/20/200/300',
                title: 'Image 1',
                titleClass: 'gallery-item one',
                description: 'This is the description for Image 1.',
                loaded: false
            },
            {
                id: 2,
                image: 'https://picsum.photos/id/48/200/300',
                title: 'Image 2',
                titleClass: 'gallery-item two',
                description: 'This is the description for Image 2.',
                loaded: false
            },
            {
                id: 3,
                image: 'https://picsum.photos/id/42/200/300',
                title: 'Image 3',
                titleClass: 'gallery-item three',
                description: 'This is the description for Image 3.',
                loaded: false
            },
            {
                id: 4,
                image: 'https://picsum.photos/id/30/200/300',
                title: 'Image 4',
                titleClass: 'gallery-item four',
                description: 'This is the description for Image 4.',
                loaded: false
            },
            {
                id: 5,
                image: 'https://picsum.photos/id/24/200/300',
                title: 'Image 5',
                titleClass: 'gallery-item five',
                description: 'This is the description for Image 5.',
                loaded: false
            },
            {
                id: 6,
                image: 'https://picsum.photos/id/25/200/300',
                title: 'Image 6',
                titleClass: 'gallery-item six',
                description: 'This is the description for Image 6.',
                loaded: false
            },
            {
                id: 7,
                image: 'https://picsum.photos/id/31/200/300',
                title: 'Image 7',
                titleClass: 'gallery-item seven',
                description: 'This is the description for Image 7.',
                loaded: false
            },
            {
                id: 8,
                image: 'https://picsum.photos/id/21/200/300',
                title: 'Image 8',
                titleClass: 'gallery-item eight',
                description: 'This is the description for Image 8.',
                loaded: false
            },
            {
                id: 9,
                image: 'https://picsum.photos/id/20/200/300',
                title: 'Image 9',
                titleClass: 'gallery-item nine',
                description: 'This is the description for Image 9.',
                loaded: false
            },


        ],
        currentPage: 1,
        pageSize: 9
    }),
    getters: {
        hasMoreItems() {
            return this.galleryItems.length < 20
        }
    },
    actions: {
        loadMoreItems() {
            this.currentPage += 1
            // Fetch more items from an API or generate new ones
            this.galleryItems.push(
                ...new Array(this.pageSize).fill(0).map((_, index) => ({
                    id: this.galleryItems.length + index + 1,
                    image: `https://picsum.photos/id/1/200/300`,
                    title: `Image ${this.galleryItems.length + index + 1}`,
                    description: `This is the description for Image ${this.galleryItems.length + index + 1}.`,
                    loaded: false
                }))
            )
        },
        markImageLoaded(id) {
            const item = this.galleryItems.find((i) => i.id === id)
            if (item) {
                item.loaded = true
            }
        }
    }
})