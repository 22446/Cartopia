<template>
<v-container>
    <GoBack/>
    <div v-if="count!==0">
    <v-row>
        <v-col cols="6" md="6" lg="3"  v-for="product in WishListProducts?.data?.data" :key="product._id">
         <CardComp :product="product"  />
        </v-col>
    </v-row>
</div>
<div v-else>
  <v-alert
    density="compact"
  
    title="WishList is empty"
    type="warning"
  >
    
      <router-link to="/"><v-btn color="black my-2" text>Return to shop</v-btn></router-link>
   
 </v-alert>

  </div>
</v-container>
    

</template>

<script setup>
import CardComp from '@/components/CardComp.vue';
import GoBack from '@/components/GoBack.vue';
import { UseWishList } from '@/stores/WishList';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const {WishListProducts,count}=storeToRefs(UseWishList())
const WishListFunc=UseWishList()

onMounted(()=>{
    WishListFunc.GetWishList()
})
</script>