
// Import Angular core so we can use @component

import { Component } from '@angular/core';

// Metadata
@Component({
    selector: 'pm-app',
    template: `<div><h1>{{pageTitle}}</h1>
                    <pm-products></pm-products>
                  </div>`
})

//Class of component
export class AppComponent {
    pageTitle : string = `Product Managment`

}
