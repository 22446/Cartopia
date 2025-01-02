<template>
    <v-container>
        <v-row class="align-center">
            <v-col cols="12 " md="7">
                <v-img src="/images/beatsnoop1.png" cover>
                   
                </v-img>
            </v-col>
            <v-col cols="12" md="5">
                <h1 class="text-start">Create an Acount</h1>
              <p class="text-start">please fill in the form to create an account</p>
      <v-form @submit.prevent="submit" class="pt-3">
        <v-text-field
            variant="outlined"
            clearable
            v-model="name"
            :error-messages="errors.name"
            label="Your Name"
            type="text"
        >
        </v-text-field>
        <v-text-field
            variant="outlined"
            clearable
            v-model="email"
            :error-messages="errors.email"

            label="Email"
             placeholder="johndoe@gmail.com"
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
        <v-text-field
            variant="outlined"
            clearable
            v-model="rePassword"
            :error-messages="errors.rePassword"
            label="Confirm password"
            :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
           :type="visible ? 'text' : 'password'"
            @click:append-inner="visible = !visible"
        >
        </v-text-field>
        <v-text-field
            variant="outlined"
            clearable
            v-model="phone"
            :error-messages="errors.phone"
            label="Phone Number"
            type="text"
        >
        </v-text-field>
       <div v-if="ErrorMsg.length>0"> <v-alert
    :text='ErrorMsg'
    class="my-3"
    type="error"
  ></v-alert></div>
        <ButtonComp :loading="loading" width="100">
        <template #title>  Create an account</template>
        <template #icon>mdi-account-plus</template>
        </ButtonComp>
        <p class="pt-3 d-flex align-center justify-center ga-2 text-center">Already have account? <router-link class="text-red me" to="/login">Log in</router-link> </p>
        
       
      </v-form>
    
    </v-col>
    </v-row>
    </v-container>
  </template>
  
  <script setup>
  import ButtonComp from '@/components/ButtonComp.vue';
import { UseAuth } from '@/stores/AuthStore';
import { storeToRefs } from 'pinia';
import { useForm, useField } from 'vee-validate';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
  import * as yup from 'yup';
  const{loading,ErrorMsg}=storeToRefs(UseAuth())
  const register= UseAuth()
  const routes=useRouter()

  
  const validationSchema=yup.object().shape({
    name:yup.string().required('Name is required').min(3,'Name must be atleast 3 characters'),
    email:yup.string().required('Email is required').email('Email must be valid'),
    password:yup.string().required('Password is required').matches(/^[A-Z][a-z0-9]{6,10}$/,'Password must be atleast 6 characters'),
    rePassword:yup.string().oneOf([yup.ref('password')],'Passwords must match'),
    phone:yup.string().required('Phone number is required').matches(/^01[0125][0-9]{8}$/,'accept only egypt phone numbers')
  })
  const {errors,handleSubmit}=useForm({
    validationSchema
  })
  const{value:name}=useField('name')
  const{value:email}=useField('email')
  const{value:password}=useField('password')
  const{value:rePassword}=useField('rePassword')
  const{value:phone}=useField('phone')
  const submit=handleSubmit((values)=>{
    register.registerUser(values,routes)
  })
  const visible=ref(false)
  </script>
  