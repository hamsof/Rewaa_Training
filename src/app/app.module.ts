import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

import { FormsModule } from '@angular/forms';
import { UpperPipe } from './shared/custom_pipe';
import { StarComponent } from './star/star.component';
@NgModule({
  declarations: [
    AppComponent, ProductListComponent, UpperPipe, StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
