import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TestmodalComponent } from './testmodal/testmodal.component';
import { ShowblocksComponent } from './showblocks/showblocks.component';
import { MineCertComponent } from './mine-cert/mine-cert.component';
import { SearchHashComponent } from './search-hash/search-hash.component';
import { ValidateCertComponent } from './validate-cert/validate-cert.component';
import { SearchBcComponent } from './search-bc/search-bc.component';
import { SearchbycatComponent } from './searchbycat/searchbycat.component';

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

  searchHash(){
    this.dialog.open(SearchHashComponent);
  }

  validateCert(){
    this.dialog.open(ValidateCertComponent);
  }

  searchBC(){
    this.dialog.open(SearchBcComponent);
  }
  searchbycat(){
    this.dialog.open(SearchbycatComponent);
  }
}
