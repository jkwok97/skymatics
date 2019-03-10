import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { TableComponent } from './table/table.component';
import { MessageTimeoutComponent } from './message-timeout/message-timeout.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    TableComponent,
    MessageTimeoutComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}
