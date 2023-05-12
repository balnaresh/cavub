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

export class issuer {
  CommonName: string | undefined;
  OrganizationalUnit: string | undefined;
  Organization: string | undefined;
  Locality: string | undefined;
  StateProvince: string | undefined;
  Country: string | undefined;
};

export class data2 {
  institution: string | undefined;
  name: string | undefined;
  registeredNumber: string | undefined;
  stream: string | undefined;
  degree: string | undefined;
  issuedDate: string | undefined;
  hash: string | undefined;
};

export class MyData {
  issuer: issuer | undefined
  sha1: string | undefined;
  publicKey: string | undefined;
  signingTime: string | undefined;
  sigIntact: boolean | undefined;
  sigCoverage: string | undefined;
  sigValid: boolean | undefined;
  summary: string | undefined;
  data: data2 | undefined;
  valid: boolean | undefined;
}
