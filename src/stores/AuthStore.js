import axios from "axios";
import  {defineStore} from "pinia";

export const UseAuth=defineStore('Auth',{
   state:()=>(
      { 
         loading:false,
         isUserLogged:false,
         ErrorMsg:'',
         DecodedMsg:''
      }),
      
      actions:{
         async registerUser(userRegister,routes){
            this.loading=true
           await  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userRegister)
             .then(res=>{
                console.log(res)
                console.log(routes)
                routes.push('/login')
             }).catch((err)=>{
              
                  if(err?.response?.data?.message=="Account Already Exists"){
                     this.ErrorMsg=err?.response?.data?.message
                 }else{
                  this.ErrorMsg=err?.response?.data?.errors?.msg
   
                 }
                 setTimeout(() => {
                  this.ErrorMsg=''
               }, 2000);
               
            
                  console.log(this.ErrorMsg)
               
                console.log(err)
             }).finally(()=>{
                this.loading=false
             })
        },
        async LoginUser(userLogin,routes){
         this.loading=true
        await  axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',userLogin)
          .then(res=>{
             console.log(res)
             console.log(routes)
             localStorage.setItem('tokenUser',res.data.token)
             this.isUserLogged=true
             routes.push('/')
          }).catch((err)=>{
           
               
                  this.ErrorMsg=err?.response?.data?.message
             
              setTimeout(() => {
               this.ErrorMsg=''
            }, 2000);
            
         
               console.log(this.ErrorMsg)
            
             console.log(err)
          }).finally(()=>{
             this.loading=false
          })
     }

    }
})