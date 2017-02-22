import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { WelcomeComponent }  from './home/welcome.component';

import { ProductListComponent } from './products/product-list.component';
import { ProductDetailComponent }  from './products/product-detail.component';
import { ProductDetailGuard }  from './products/product-guard.service';
import { ProductFilterPipe} from './products/product-filter.pipe';
import { StartComponent} from './shared/start.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent },
      {path: 'product/:id', canActivate: [ProductDetailGuard] ,component:ProductDetailComponent},
      {path: 'Welcome', component: WelcomeComponent },

      {path: '', redirectTo:'Welcome', pathMatch:'full' },
      {path: '**', redirectTo:'Welcome', pathMatch:'full' },
    ])
  ],
  declarations: [ 
    AppComponent,
    WelcomeComponent, 
    ProductListComponent, 
    ProductDetailComponent,
    ProductFilterPipe, 
    StartComponent 
    ],
  providers: [ ProductDetailGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
 