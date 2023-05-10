import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestmodalComponent } from './testmodal/testmodal.component';
import { ShowblocksComponent } from './showblocks/showblocks.component';
import { MineCertComponent } from './mine-cert/mine-cert.component';

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

  showAllBlocks(){
    this.dialog.open(ShowblocksComponent);
  }

  showMineCertificate(){
    this.dialog.open(MineCertComponent);
  }

}
