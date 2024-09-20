<template>
    <div>
        <img :src="imagePath" :alt="alt" />
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

// Definiere das Prop "imageName"
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  alt:{
    type: String,
    required: true,
  },
})

// Erstelle den Pfad zum Bild
const imagePath = `/images/${props.name}` // Für den public Ordner
</script>

<style scoped lang="scss">
img {
    width: 100%;
    height: 100px;
    object-fit: cover;
}
</style>