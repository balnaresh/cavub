import { Component, ViewChild } from '@angular/core';
import { group } from '@angular/animations';
import { ApiService } from '../api.service';
import { Block,BlockData } from '../ShowBlock.model';

@Component({
  selector: 'app-searchbycat',
  templateUrl: './searchbycat.component.html',
  styleUrls: ['./searchbycat.component.css']
})
export class SearchbycatComponent {
  isModalOpen: boolean = false;
  attribute1: string = '';
  blocks: BlockData[] = [];
  query: string=""; 
  showafter: boolean=false;
  selectedValue: string=""; 

  
  constructor(private api:ApiService){

  }

  searchbycat(){
    const formData = {
      query: this.query
    };
    this.api.apiSearchbycat(formData,this.selectedValue).subscribe((data: Block[]) => {
      data.forEach((blockData: any) => {
        
    
        const blockDataObj = new BlockData();
        blockDataObj.name = blockData.name;
        blockDataObj.parentName = blockData.parentName;
        blockDataObj.registeredNumber = blockData.registeredNumber;
        blockDataObj.issuedDate = blockData.issuedDate;
        blockDataObj.stream = blockData.stream;
        blockDataObj.degree = blockData.degree;
        blockDataObj.institution = blockData.institution;
        this.blocks.push(blockDataObj);
        
      });
    console.log(this.blocks);
      // Process the blocks array as needed
    });
    this.showafter=true;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  submitModal() {
    // Perform actions with the attributes
    console.log(this.attribute1);

    // Close the modal
    this.closeModal();
  }
}
