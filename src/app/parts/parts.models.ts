export type PartType = 'code' | 'text' | 'video';

export type PartContent = string | {code?: string, text?: string, video?: string};

export class Part {
  _id: string;
  content: PartContent;
  type: PartType;
  
  constructor(type: PartType, content: PartContent) {
    this.type    = type;
    this.content = content;
  }
}

export const PartTypes: PartType[] = ['code', 'text', 'video'];

