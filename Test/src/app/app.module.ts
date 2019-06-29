import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';
import { ListOwnersPetsService } from './services/list-owners-pets.service';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    OrderModule
  ],
  providers: [ListOwnersPetsService],
  bootstrap: [CatsComponent]
})
export class AppModule { }





