import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TodoService } from './todo.service';
import { NgxTweetModule } from "ngx-tweet";

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule,NgxTweetModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
