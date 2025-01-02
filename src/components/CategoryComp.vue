<template>
      <v-container>
    <v-row>
      <div v-if="loadingcat">
        <v-progress-linear indeterminate color="primary"></v-progress-linear>
      </div>
      <h2 class="font-weight-black text-lg-h3 text-sm-h4 text-h5 py-3">Browse By Category<v-icon class="text-h4 text-red">mdi-shape-plus</v-icon></h2>
  <v-slide-group show-arrows>

    <v-slide-group-item >
      <v-col v-for="item in category" :key="item._id" cols="3">
        <v-card hover elevation="3" :to="`/categorydetails/${item._id}`">
          
            <v-img :src="item.image" height="250px"></v-img>
          
          <v-card-title class="text-center">{{ item.name }}</v-card-title>
       
        </v-card>
      </v-col>
    </v-slide-group-item>
    </v-slide-group>
    </v-row>
  </v-container>
    </template>

    <script setup>
    import { defineProps } from 'vue'
    defineProps({
        category:{
            type:Object,
            required:true
        },
        loadingcat:{
            type:Boolean,
            required:true
        }
    })
    </script>