export interface UserInterface {
  id: string;
  name: string;
  age: number;
  getMessage(): string;
}

export enum StatusEnum {
  ACTIVE = 'ACTIVE',
  DRAFT = 'DRAFT',
  ARCHIVED = 'ARCHIVED',
}
