import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';                          
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexSteelPlantComponent } from './index-steel-plant/index-steel-plant.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ComponentModule } from './component/component.module';


@NgModule({
  declarations: [
    AppComponent,
	//ComponentsComponent,
    IndexSteelPlantComponent,
  ],
  imports: [
    BrowserModule,
	BrowserAnimationsModule,
    AppRoutingModule,
	ComponentModule,
	CarouselModule,
	CommonModule,
	NgbModule,
	NgxPageScrollModule,
	//TradezoneComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
