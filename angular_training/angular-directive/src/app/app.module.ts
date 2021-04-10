import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AttributeDirectiveComponent } from './attribute-directive/attribute-directive.component';
import { StructureDirectiveComponent } from './structure-directive/structure-directive.component';
import { ComponentDirectiveComponent } from './component-directive/component-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    AttributeDirectiveComponent,
    StructureDirectiveComponent,
    ComponentDirectiveComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
