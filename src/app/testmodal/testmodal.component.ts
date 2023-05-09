import { Component } from '@angular/core';

@Component({
  selector: 'app-testmodal',
  templateUrl: './testmodal.component.html',
  styleUrls: ['./testmodal.component.css']
})
export class TestmodalComponent{
  isModalOpen: boolean = false;
  attribute1: string = '';
  attribute2: string = '';
  attribute3: string = '';

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitModal() {
    // Perform actions with the attributes
    console.log(this.attribute1, this.attribute2, this.attribute3);

    // Close the modal
    this.closeModal();
  }
}

