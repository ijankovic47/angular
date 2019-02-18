import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    // tslint:disable-next-line:no-inferrable-types
    pageTitle: string = 'Title';
    products: any[] = [ { 'productId': 1}, { 'productId': 2 } ];
}
