<template>
    <h2 v-if="headline">{{ headline }}</h2>
    <p>{{ copy }}</p>
</template>

<script setup>
const props = defineProps(['headline','copy']);

</script>