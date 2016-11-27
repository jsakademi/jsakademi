export type PartType = 'code' | 'text' | 'video';

export class Part {
  _id?: string;
  content: string;
  type: PartType;
  
  constructor(type?: PartType, content?: string) {
    this.type    = type;
    this.content = content;
  }
}

export const PartTypes: PartType[] = ['code', 'text', 'video'];

