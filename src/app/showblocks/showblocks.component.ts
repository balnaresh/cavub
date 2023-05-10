import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Block,BlockData } from '../ShowBlock.model';

@Component({
  selector: 'app-showblocks',
  templateUrl: './showblocks.component.html',
  styleUrls: ['./showblocks.component.css']
})
export class ShowblocksComponent {
  isModalOpen: boolean = false;
  attribute1: string = '';
  blocks: Block[] = [];
  
  constructor(private api:ApiService){

  }

  ngOnInit(){
    this.api.apiShowBlocksCall().subscribe((data: Block[]) => {
      data.forEach((blockData: any) => {
        const block = new Block();
    
        block.index = blockData.index;
        block.timestamp = blockData.timestamp;
        block.previous_hash = blockData.previous_hash;
        block.hash = blockData.hash;
    
        const blockDataObj = new BlockData();
        blockDataObj.name = blockData.data.name;
        blockDataObj.parentName = blockData.data.parentName;
        blockDataObj.registeredNumber = blockData.data.registeredNumber;
        blockDataObj.issuedDate = blockData.data.issuedDate;
        blockDataObj.stream = blockData.data.stream;
        blockDataObj.degree = blockData.data.degree;
        blockDataObj.institution = blockData.data.institution;
    
        block.data = blockDataObj;
        block.reference_blocks = blockData.reference_blocks;
        block.nonce = blockData.nonce;
    
        this.blocks.push(block);
      });
    console.log(this.blocks);
      // Process the blocks array as needed
    });
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
