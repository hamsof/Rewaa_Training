import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from '../products/product';
import { ProductService } from '../services/product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  pageTitle = 'Product Details';

  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  id: Number = this.route.snapshot.params['id'];
  product: IProduct | undefined;

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: data => {
        this.product = data.products.find(p => p.id == this.id);
      }
    })
  }
  onBack(): void {
    this.router.navigate(['/products']);
  }

}
