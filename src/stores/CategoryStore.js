import axios from "axios";
import  { defineStore} from "pinia";

export const UseCategory =defineStore('categ',{
    state:()=>({
        category:[],
        loadingcat:false
    }),
    actions:{
       async getCategory(){
        this.loadingcat=true
           await axios.get('https://ecommerce.routemisr.com/api/v1/categories').then(res=>{
            this.category=res.data.data
            console.log(this.category)  
            console.log(res)
            }).catch(err=>{
                console.log(err)
            }).finally(()=>{
                this.loadingcat=false
            })
        }
    }
})