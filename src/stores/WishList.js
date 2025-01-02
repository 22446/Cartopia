import axios from "axios"
import { defineStore } from "pinia"

export  const UseWishList=defineStore('WishList',{
    state:()=>({
        WishListProducts:[],
        count:'',
        loadingWish:{}
    }),
    actions:{
        async AddToWishList(id){
            this.loadingWish[id]=true
           await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist',{productId:id},{
                headers:{token:localStorage.getItem('tokenUser')}
            }).then((res)=>{
                console.log(res)
                this.GetWishList()
            }).finally(()=>{
                this.loadingWish[id]=false
            })
        },
        async RemovefromWishList(id){
            this.loadingWish[id]=true
           await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{
                headers:{token:localStorage.getItem('tokenUser')}
            }).then((res)=>{
                console.log(res)
                this.GetWishList()
            }).finally(()=>{
                this.loadingWish[id]=false
            })
        },
        async GetWishList(){
            
            await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{
                headers:{token:localStorage.getItem('tokenUser')}
            }).then((res)=>{
                this.WishListProducts=res
                this.count=res?.data?.count
                console.log(this.WishListProducts)
            })
        }
    }

})