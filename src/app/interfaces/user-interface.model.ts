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

// const isActive = (status: StatusEnum): boolean => {
//     return status === StatusEnum.ACTIVE;
// }

// const user: UserInterface = {
//     id: '1',
//     name: 'For',
//     age: 23,
//     getMessage() {
//         return `${this.name} is ${this.age}`;
//     }
// };
