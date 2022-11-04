import { Component, OnInit } from '@angular/core';
import { SingleProductComponent } from '../single-product/single-product.component';
import { DataService } from 'src/_services/data.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products : SingleProductComponent[] = []
  constructor(private service : DataService) { }
  getAllProduct(){
    this.service.getAllProduct().subscribe((products) =>{console.log(products)})
  }
  ngOnInit(): void {
   this.getAllProduct()
  }

}
