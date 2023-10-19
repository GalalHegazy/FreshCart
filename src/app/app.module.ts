import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http"
import{BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { ToastrModule } from 'ngx-toastr';
import { HeadersInterceptor } from './interceptor/headers.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LodingInterceptor } from './interceptor/loding.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule
    
  ],
  providers: [
    { provide:HTTP_INTERCEPTORS,useClass:HeadersInterceptor,multi:true},
    {provide:HTTP_INTERCEPTORS,useClass:LodingInterceptor,multi:true}
  ],
  bootstrap: [AppComponent],
  


})
export class AppModule { }
