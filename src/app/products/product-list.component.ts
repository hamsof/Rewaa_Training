import { Component, OnInit, Pipe } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from 'src/app/services/product.service';
import { Observable, map } from 'rxjs';
import { from } from 'rxjs';

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
    Observable$: Observable<Event> = new Observable<Event>();
    productServiceSubscription: any;


    ngOnInit(): void {
        this.productServiceSubscription = this.productService.getProducts().subscribe({
            next: data => {
                this.products = data.products;
                this.filetedProducts = this.products
            },
            error: err => console.log(err)
        })
    }
    ngOnDestroy(): void {
        this.productServiceSubscription.unsubscribe();
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
    priceClickHandler(event: Event): void {
        this.Observable$ = new Observable<Event>(observer => {
            observer.next(event);
            observer.complete();
        });
        this.Observable$.subscribe({
            next: data => console.log(data),
            error: err => console.log(err),
            complete: () => console.log("completed")
        })
    }

}