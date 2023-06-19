import { Component, OnInit, Pipe } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/app/services/product.service';

@Component({
    selector: 'pm-product',
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

    constructor(private productService: ProductService) { }

    products: IProduct[] = [];
    pageTitle: string = "Product List";
    isImage: boolean = false;
    buttonText: string = "Show";
    filetedProducts: IProduct[] = [];
    _listFilter: string = "";
    outputText: string = "";

    data_1: any;

    ngOnInit(): void {
        this.productService.getProducts().subscribe(
            data => {
                this.data_1 = data;
                this.products = this.data_1.products
                this.filetedProducts = this.products
            }
        )
    }


    get filteredText(): string {
        return this._listFilter;
    }
    set filteredText(value: string) {
        this._listFilter = value;
        this.filetedProducts = this.performFilter(this._listFilter);
    }
    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.title.toLocaleLowerCase().includes(filterBy));
    }
    show_image(): void {
        this.isImage = !this.isImage
        this.buttonText = this.isImage ? "Hide" : "Show"
    }
    notify(message: string): void {
        console.log(message);
        this.outputText = message
    }
}