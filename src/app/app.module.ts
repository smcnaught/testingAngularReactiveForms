import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AnotherComponent } from './another/another.component';
import { NextButtonsComponent } from './next-buttons/next-buttons.component';
import { CheckValidFormService } from './check-valid-form.service';


@NgModule({
  declarations: [
    AppComponent,
    AnotherComponent,
    NextButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CheckValidFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
