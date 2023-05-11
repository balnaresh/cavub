import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { group } from '@angular/animations';
import { Block,BlockData } from '../ShowBlock.model';


@Component({
  selector: 'app-search-hash',
  templateUrl: './search-hash.component.html',
  styleUrls: ['./search-hash.component.css']
})
export class SearchHashComponent {
  name: string = "";
  parentName: string = "";
  registeredNumber: string = "";
  issuedDate: string = "";
  stream: string = "";
  degree: string = "";
  institution: string = "";

  isModalOpen: boolean = false;
  showbefore: boolean = true;

  hashCode: string = "";

  constructor(private api: ApiService) {

  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitModal() {
    // Perform actions with the attributes
    // Close the modal
    this.closeModal();
  }

  searchHash() {
    console.log(this.hashCode);
    this.api.apiSearchHash(this.hashCode).subscribe((response: any) => {
      this.hashCode = response.hash;
      this.name = response.data.name;
      this.parentName = response.data.parentName;
      this.registeredNumber = response.data.registeredNumber;
      this.issuedDate = response.data.issuedDate;
      this.stream = response.data.stream;
      this.degree = response.data.degree;
      this.institution = response.data.institution;
    })
    console.log(this.hashCode);
    this.showbefore = false;
  }
}