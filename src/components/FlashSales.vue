<template>
<v-container>
    <div v-if="loading">
      <v-progress-linear indeterminate color="primary"></v-progress-linear>
    </div>
    <h2 class="font-weight-black text-lg-h3 text-sm-h4 text-h5 py-3">Flash Sales<v-icon class="text-h4 text-red">mdi-sale</v-icon></h2>
    <v-slide-group show-arrows mandatory>
  <v-slide-group-item v-for="product in products" :key="product._id">
    <v-col class="">
      <CardComp :product="product" :loading="loading" />
    </v-col>
  </v-slide-group-item>
</v-slide-group>

    <div class="d-flex align-center justify-center py-2">
        <ButtonComp @handleClick="toProducts" >
            <template #icon>
                mdi-eye
            </template>
            <template #title>
                View all Product
            </template>
           
        </ButtonComp>
    </div>
  </v-container>
</template>
  <script setup>
    import { defineProps } from 'vue'
import CardComp from './CardComp.vue';
import ButtonComp from './ButtonComp.vue';
import { useRouter } from 'vue-router';
const router=useRouter()
  function toProducts(){
    router.push('/products')
  }
    defineProps({
        products:{
            type:Object,
            required:true
        },
        loading:{
            type:Boolean,
            required:true
        }
    })
</script>