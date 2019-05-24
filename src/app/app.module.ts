import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorService } from './error.service';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: ErrorService,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
