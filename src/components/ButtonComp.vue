<template>
    <v-btn @click.prevent="Emits('handleClick')"
        color="red"
        dark
       type="submit"
        :width="computedWidth"
        :loading="loading"
        size="large"
        rounded="sm"
    >
        <v-icon left>
            <slot name="icon"></slot>
        </v-icon>

        <slot name="title"></slot>
    </v-btn>
</template>
<script setup>
    import { computed } from 'vue';

   const Emits= defineEmits(['handleclick'])
    const props = defineProps({ 
       
        loading: Boolean,
        width: Number,
    });
   


    const computedWidth = computed(() => `${props.width}%`);
</script>