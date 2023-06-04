import { Component, ViewChild } from '@angular/core';
import { group } from '@angular/animations';
import { ApiService } from '../api.service';
import { Block,BlockData } from '../ShowBlock.model';

@Component({
  selector: 'app-search-bc',
  templateUrl: './search-bc.component.html',
  styleUrls: ['./search-bc.component.css']
})
export class SearchBcComponent {
  isModalOpen: boolean = false;
  attribute1: string = '';
  blocks: BlockData[] = [];
  query: string=""; 
  showafter: boolean=false;
  
  constructor(private api:ApiService){

  }

  searchBc(){
    const formData = {
      query: this.query
    };
    this.api.apiSearchBc(formData).subscribe((data: Block[]) => {
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
