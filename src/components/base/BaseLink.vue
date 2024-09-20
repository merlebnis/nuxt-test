<template>
    <a 
        v-if="type === 'link'"
        :href="url" 
        :class="cssClass">
        <slot></slot>
    </a>
    <button
        v-else
        :href="url"
        :class="cssClass">
        <slot></slot>
    </button>
</template>

<script setup>


    const props = defineProps ({
        url: {
            type: String,
            required: true,
            default: '',
        },
        type: {
            type: String,
            default: 'link',
        },
        color: {
            type: String,
            required: false,
            default: ''
        },
    })


let cssClass = 'base_' + props.type;
if(props.color){
    cssClass += ('--' + props.color);
}
</script>