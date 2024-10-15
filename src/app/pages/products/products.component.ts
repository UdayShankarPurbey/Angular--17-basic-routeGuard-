import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataServiceService } from '../../services/dataService/data-service.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent  implements OnInit {

  products : any = [];

  constructor (
    private route : ActivatedRoute,
    // private data: DataServiceService
  ) {}

  ngOnInit(): void {
    // NOTE: IF DELAY IN DATA PAGE LOAD AND THEN DATA UPDATING BUT USING RESOLVE GUARD IF DATA CAME THEN PAGE LOAD
    
    // this.data.getData().subscribe((data: any) => {
    //   this.products = data; // Access data directly, since it's already the array
    //   console.log(this.products);
    // });

    this.route.data.subscribe(data => {
      this.products = data['data']; // 'data' is the key used in the resolver
      console.log(this.products);
    });
  }

}
