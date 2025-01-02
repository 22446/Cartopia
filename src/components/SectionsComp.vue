<template>
 <v-container>
  <v-row>
    <v-col col="12" class="d-lg-flex">
    <v-col cols="12" lg="6">
      <div class="bg-black">
      <v-img src="/images/ps5-slim-goedkope-playstation_large 1.png" class="d-flex align-end pa-7">
        <div>
          <h3>PlayStation 5</h3>
        <p>Black and White version of the PS5 coming out on sale.</p>
        <router-link to="/products" class="text-white">Shop Now <v-icon>mdi-arrow-right</v-icon></router-link>
      </div>
      </v-img>

      
      </div>
    </v-col>

    <v-col  cols="12" lg="6" class="d-lg-flex d-none flex-column justify-space-between">
      <div>
      <v-col cols="12" class="d-flex align-center p-4  bg-black">
        <v-col cols="4" class="d-flex ga-6 flex-column">
         
          <h1 class="font-weight-black">Women’s Collections</h1>
          <span class="text-grey">Featured woman collections that give you another vibe.</span>
          <router-link to="/products" class="text-white">Shop Now <v-icon>mdi-arrow-right</v-icon></router-link>
        </v-col>
        <v-col cols="8 ">
          
          <v-img src="/images/attractive-woman-wearing-hat-posing-black-background 1.png"></v-img>
        </v-col>
      </v-col>
    </div>
    <div>
      <v-col cols="12" class="d-flex align-center p-4 bg-black">

        <v-col cols="4" class="d-flex ga-6 flex-column">
         
          <h1 class="font-weight-black">IPhones</h1>
          <span class="text-grey">The iPhone 14 combines powerful performance</span>
          <router-link to="/products" class="text-white">Shop Now <v-icon>mdi-arrow-right</v-icon></router-link>
        </v-col>
        <v-col cols="8 ">
          
          <v-img src="/images/hero_endframe__cvklg0xk3w6e_large 2.png"></v-img>
        </v-col>
      </v-col>
    </div>
    </v-col>
  </v-col>
  </v-row>
 </v-container>
    </template>