import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestmodalComponent } from './testmodal/testmodal.component';


let showBalNaresh: boolean=false;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}
  title = 'cavub';

  openModelBalNaresh(){
    this.dialog.open(TestmodalComponent);
  }
}
