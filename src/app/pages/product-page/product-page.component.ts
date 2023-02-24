import { Component } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';
import { ProductService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent {
  title = 'angular app';
  loading: boolean = false;
  // products$: Observable<IProduct[]>; 
  term = ''

  constructor(public productsServices: ProductService, public modalService: ModalService) {}

  ngOnInit(): void {
    this.loading = true;
    // this.products$ = this.productsServices
    //   .getAll()
    //   .pipe(tap(() => (this.loading = false)));

    this.productsServices.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
