<template>
    <Component :is="'h' + level"><slot></slot></Component>
</template>

<script>

export default {
    props: {
        /**
         * @values 1-6
         */
        level:{
            type: Number,
            default: 3,
            validator(value){
                return value >= 1 && value <=6;
            }
        }
    }
}
</script>