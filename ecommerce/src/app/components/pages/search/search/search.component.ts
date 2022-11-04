import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/components/services/search.service';
import { FormsModule } from '@angular/forms';
interface product {
  name: string;
  id: number;
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
searchText:any = '';
data :  product[] = [];
alldata : product[] = [];
  constructor(private  searchService:SearchService) { }
 
  ngOnInit(): void {
    this.searchService.getAll().subscribe((res)=>{
      console.log(res.data)
      this.data = res.data 
      this.alldata = this.data
     
    })
      }
      
      search(value: string): void {
        this.data = this.alldata.filter((val) =>
          val.name.toLowerCase().includes(value)
        );
      }
    }
