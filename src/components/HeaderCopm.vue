<template>
 <v-container>
    <v-row class="align-center ">
      <v-col cols="12" md="3">
        <v-list>
         
            <v-list-item v-for="cat in category" :to="`/categorydetails/${cat._id}`" :key='cat._id'  >
              {{cat.name}}<v-icon>mdi-arrow-right</v-icon>
              <v-divider></v-divider>

            </v-list-item>
        </v-list>
      </v-col>
     
      <v-col cols="12" md="9" class="bg-black d-flex align-center p-4">
        <v-col cols="4" class="d-flex ga-6 flex-column">
         
          <h1 class="font-weight-black text-md-h5 text-lg-h4 ">Up to 10%<br>off Voucher</h1>
          <router-link to="/products" class="text-white  text-md-h5 text-lg-h4 text-sm-h6 ">Shop Now <v-icon>mdi-arrow-right</v-icon></router-link>
        </v-col>
        <v-col cols="8">
          <v-carousel show-arrows="hover" hide-delimiter-background height="300" cycle>
            <v-carousel-item v-for="(item, i) in items" :key="i" :src="item.src" contain>
            </v-carousel-item>
          </v-carousel>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>


<script setup>
import { onMounted, ref } from 'vue'

import img from '/images/hero_endframe__cvklg0xk3w6e_large 2.png'
import imgtwo from '/images/attractive-woman-wearing-hat-posing-black-background 1.png'
import imgthree from '/images/insung-yoon-JHsGucAy7r0-unsplash.jpg'
import imgfour from '/images/frank-septillion-Qrspubmx6kE-unsplash (1).jpg'
import { UseCategory } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'

const getCategory=UseCategory()
const {category}=storeToRefs(UseCategory())
onMounted(async() => {
  await getCategory.getCategory()
  console.log(category.value)
})

const items = ref([
  {
  
    
    src: img,
  },
  {
   
    src: imgtwo,
  },
  {
   
    src:imgthree,
  },
  {
   
    src:imgfour,
  },
])
</script>
