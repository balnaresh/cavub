export class Block {
  index: string | undefined;
  timestamp: string | undefined;
  previous_hash: string | undefined;
  hash: string | undefined;
  data: BlockData | undefined;
  reference_blocks: any;
  nonce: string | undefined;
}

export class BlockData {
  name: string | undefined;
  parentName: string | undefined;
  registeredNumber: string | undefined;
  issuedDate: string | undefined;
  stream: string | undefined;
  degree: string | undefined;
  institution: string | undefined;
}
