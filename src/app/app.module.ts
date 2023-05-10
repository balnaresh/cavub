import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestmodalComponent } from './testmodal/testmodal.component';
import { ShowblocksComponent } from './showblocks/showblocks.component';
import { MineCertComponent } from './mine-cert/mine-cert.component';

@NgModule({
  declarations: [
    AppComponent,
    TestmodalComponent,
    ShowblocksComponent,
    MineCertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
