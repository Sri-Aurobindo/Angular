import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FakeComponent } from './fake/fake.component';
import { FakeService } from './service.fake';

@NgModule({
  declarations: [
    AppComponent,
    FakeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [FakeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
