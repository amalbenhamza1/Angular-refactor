import { Component, OnInit } from '@angular/core';
import {SingleProductService} from "../../services/single-product.service"



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})

export class SingleProductComponent implements OnInit {
newdata: any;
  constructor(private  SingleProductService: SingleProductService) {
   }


  ngOnInit(): void {
this.SingleProductService.getData().subscribe((res)=>{
  console.log(res)
  this.newdata = res
 
  
})
  }


}
