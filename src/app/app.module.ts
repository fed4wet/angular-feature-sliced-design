import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from 'src/pages';
import { AppComponent } from 'src/app/app.component';
import { AppStoreModule } from '../store';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
