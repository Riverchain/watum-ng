import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { AppCalculatorComponent } from './app-calculator/app-calculator.component';
import { CalculatorComponent } from './calculator/calculator.component';

@NgModule({
   declarations: [
      AppComponent,
      ServerComponent,
      AppCalculatorComponent,
      CalculatorComponent
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
