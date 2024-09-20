<template>
    <div :class="cssClass">
        <slot></slot>
    </div>
</template>

<script setup>
const props = defineProps(['type']);


let cssClass = "";
if(props.type){
    cssClass = "div--" + props.type;
}else{
    cssClass = "div--center"
}
</script>