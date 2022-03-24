import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Product } from '../post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  constructor(public postService : PostService, private route: ActivatedRoute) { }
  // itemName: any;

  ngOnInit(): void {
    this.postService.getAllData().subscribe((data: Product[]) => {
      this.products = data;
      console.log(data);
    })
  }
}
