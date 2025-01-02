<template>

    <v-app-bar color="black" prominent >
      <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title
        ><router-link to="/" class="text-white text-decoration-none font-weight-bold text-light"
          >Cartopia</router-link
        ></v-toolbar-title
      >

      <v-spacer></v-spacer>

      <template v-if="$vuetify.display">
<div v-if="isUserLogged"  key="icon" class="d-flex ga-4 align-center pe-3 ">
       <router-link to="/cart"  class="text-white"> <v-badge class="cursor-pointer " :content="countCart">
          <v-icon icon="mdi-cart" size="large" variant="text" ></v-icon>
        </v-badge>
      </router-link>
      
      <router-link to="/wishlist"  class="text-white">
        <v-badge class="cursor-pointer " :content="count">
        <v-icon   icon="mdi-heart" size="large" variant="text"></v-icon>
        </v-badge>
        </router-link>
        
       
        <v-icon   @click.prevent="logOut" color="red" icon="mdi-logout" size="large" variant="text"></v-icon>
        
    
      </div>  
      <div v-else></div>

      </template>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      :location="$vuetify.display.mobile ? 'bottom' : undefined"
      temporary
     
    >
      <v-list v-if="!isUserLogged">
        <v-list-items>
          <v-list-item>
            <router-link to="register" class="text-decoration-none font-weight-bold text-black"
              >Register <v-icon>mdi-account-plus</v-icon></router-link
            >
          </v-list-item>
        </v-list-items>
        <v-list-items>
          <v-list-item>
            <router-link to="login" class="text-decoration-none font-weight-bold text-black"
              >Login<v-icon>mdi-login</v-icon></router-link
            >
          </v-list-item>
        </v-list-items>
      </v-list>
      <v-list v-if="isUserLogged">
        <v-list-items>
          <v-list-item>
            <router-link to="/" class="text-decoration-none font-weight-bold text-black"
              >Home <v-icon>mdi-home</v-icon></router-link
            >
          </v-list-item>
        </v-list-items>
        <v-list-items>
          <v-list-item>
            <router-link to="/products" class="text-decoration-none font-weight-bold text-black"
              >Products<v-icon>mdi-login</v-icon></router-link
            >
          </v-list-item>
        </v-list-items>
      </v-list>
    </v-navigation-drawer>

</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { UseAuth } from '@/stores/AuthStore';
import { onMounted } from 'vue';

const { countCart } = storeToRefs(UseCart());
const { count } = storeToRefs(UseWishList());
const { isUserLogged } = storeToRefs(UseAuth());
const router = useRouter();
const drawer = ref(false);
import { UseWishList } from '@/stores/WishList';
import { UseCart } from '@/stores/CartStore'



const WishlistFun = UseWishList();
const cartfunc = UseCart();
onMounted( async() => {
  if (localStorage.getItem('tokenUser')) {
    isUserLogged.value = true;
   
    await WishlistFun.GetWishList();
  
    await cartfunc.getCardProduct();
  }
});



function logOut() {
  localStorage.removeItem('tokenUser');
  router.push('/login');
  isUserLogged.value = false;
}
</script>


