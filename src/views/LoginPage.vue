<template>
     <v-container>
        <v-row class="align-center">
            <v-col cols="12 " md="7">
                <v-img src="../public/images/beatsnoop1.png" cover>
                   
                </v-img>
            </v-col>
            <v-col cols="12" md="5">
                <h1 class="text-start">Log in to Cartopia</h1>
              <p class="text-start">Enter your details below</p>
      <v-form @submit.prevent="submit" class="pt-3">
     
        <v-text-field
            variant="outlined"
            clearable
            v-model="email"
            :error-messages="errors.email"

            label="Email"
            
            type="text"
        >
        </v-text-field>
        <v-text-field
            variant="outlined"
            :error-messages="errors.password"
            v-model="password"
            label="Password"
           :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
           :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
        >
        
        </v-text-field>
       
        <div v-if="ErrorMsg.length>0"> <v-alert
    :text='ErrorMsg'
    class="my-3"
    type="error"
  ></v-alert></div>
        <ButtonComp :loading="loading" :width="100" @handleClick="submit">
            <template #title>Login</template>
            <template #icon>mdi-login</template>
            </ButtonComp>
        <p class="pt-3 d-flex align-center justify-center ga-2 text-center">Dont have account? <router-link class="text-red me" to="/register">register</router-link > </p>
    </v-form>
    
    </v-col>
    </v-row>
    </v-container>
</template>
  
  
<script setup>
import ButtonComp from '@/components/ButtonComp.vue';
import { useField, useForm } from 'vee-validate';

import { UseAuth } from '@/stores/AuthStore';
import * as yup from 'yup' 
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
const{loading,ErrorMsg}=storeToRefs(UseAuth())
const Login=UseAuth()
const routes=useRouter()
const validationSchema=yup.object().shape({ 
    email:yup.string().required('Email is required').email('Email must be valid'),
    password:yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,10}$/,'Password must be atleast 6 characters')
}) 
const {handleSubmit,errors}=useForm({
    validationSchema
})
const submit=handleSubmit((values)=>{
  Login.LoginUser(values,routes)
})
const{value:password}=useField('password') 
const{value:email}=useField('email')
const visible=ref(false)
</script>