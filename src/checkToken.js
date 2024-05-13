import axios from "axios"
export default async function checkToken() {
  try{
     if(localStorage.refreshToken){
       await axios.get("http://192.168.1.104:3000/users/auth/refresh",{
         headers:{
           "Content-Type":"application/json",
           "Authorization":"Bearer "+localStorage.refreshToken
         }
       }).then((res)=>{
           localStorage.accessToken = res.data.accessToken
           localStorage.refreshToken = res.data.refreshToken
           return
      })
    }
  }catch(e){
    window.location.href  = "/login"
  }
}