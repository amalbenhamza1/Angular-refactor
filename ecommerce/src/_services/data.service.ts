import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
   
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Cross-origin': 'cross-site'
    })
  }
  // products services 
//get all products data 
  getAllProduct(){
    return  this.http.get('http://localhost:3002/products/getAll')
    
  }
  //get one product
  getOneP(id:string){
    return this.http.get('http://localhost:3002/products/'+id)
  }
  //add new product 
  addProduct(name : string,category:string,price:number,img:string,descreption:string,user_id:number){
    return this.http.post('http://localhost:3002/products/postP',{name,category,price,img,descreption,user_id})
  }
  // delete product
  deleteproduct(id:any){
    return this.http.delete("http://localhost:3002/products/delete",id)
  }
  //update product
  updateproduct(name : string,category:string,price:number,img:string,descreption:string,id:number){
return this.http.put("http://localhost:3002/products/modifie",{name,category,price,img,descreption,id})}
  
//
getallPu(id:number){
  return this.http.post('http://localhost:3002/products/getAllp',id)
}


//buys service
//buy a product
buyP(id:number,userid:number){
  return this.http.post('http://localhost:3002/products/buy',{id,userid})
}
//get all buys by user
getallBuys(id:string){
  return this.http.post('http://localhost:3002/products/allbuys',id)
}
//user servives  
//adding a user
  addUser(user:any){
    return this.http.post('http://localhost:3002/products/register',user )
  }

  //login user 
  // added 'withCredentials:true'  cuz it helps to attach the cookie to API calls for cross-site requests.( Without this, Angular will ignore the Set-Cookie header)
  login(user:any){
return this.http.post('http://localhost:3002/products/login',user,{withCredentials:true})
  }

  //logout user
  logout(){
    return this.http.get('http://localhost:3002/products/logout')
  }
  //get oen use info
getOne(token:any){
  return this.http.post('http://localhost:3002/products/get-user',token)
}
}
