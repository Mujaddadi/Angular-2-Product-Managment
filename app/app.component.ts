
// Import Angular core so we can use @component

import { Component } from '@angular/core';

import { ProductService } from './products/product.service';

// Metadata
@Component({
    selector: 'pm-app',
    template: `
<div>
    <nav class="navbar navbar-default">
        <div class="conatiner-fluid">
            <a href="" class="navbar-brand">{{pageTitle}}</a>
            <ul class="nav navbar-nav">
                <li><a [routerLink]= "['/welcome']"> Home</a></li>
                <li><a [routerLink]= "['/products']">Product List</a></li>
            </ul>
        </div>
    </nav>
    <div class='conatiner'>
        <router-outlet> </router-outlet>
    </div>
</div>

`
,

    providers: [ProductService]
})

//Class of component
export class AppComponent {
    pageTitle : string = `Product Managment`

}
