import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { group } from '@angular/animations';


@Component({
  selector: 'app-mine-cert',
  templateUrl: './mine-cert.component.html',
  styleUrls: ['./mine-cert.component.css']
})
export class MineCertComponent {
  name: string= "";
  parentName: string= "";
  registeredNumber: string= "";
  issuedDate: string= "";
  stream: string= "";
  degree: string= "";
  institution: string= "";
 
  isModalOpen: boolean = false;
  showbefore:boolean=true;

  hashCode: string = '';

  constructor(private api:ApiService){

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

  mineCertificate(){
    const formData = {
      name: this.name,
      parentName: this.parentName,
      registeredNumber: this.registeredNumber,
      issuedDate: this.issuedDate,
      stream: this.stream,
      degree: this.degree,
      institution: this.institution
    };
    console.log(formData);
    this.api.apiMineCertificate(formData).subscribe((response:string)=>{
      this.hashCode=response;
    })
    console.log(this.hashCode);
    this.showbefore=false;
  }
}

