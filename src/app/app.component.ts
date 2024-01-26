import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserInterface } from './interfaces/user-interface.model';

@Component({
  selector: 'app-root',
  //  standalone: true,
  //  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-dev';
  // fruits: string[] = ['Apple', 'Orange', 'Banana'];
  fruits: Array<string> = ['Apple', 'Orange', 'Banana']
  foo: string | number = 'foos';

  values: (string|number)[] = ['Apple', 2, 'orange', 3];

  getItem = (item: number | undefined) => {
    if (!item) {
      return null;
    } 
    return item.toString();
  }

  doSomenthing =  (): void =>{
    console.log('doing.......');
  }

  clearCache(): void{
    this.title = "new tittle";
  }

  vAny: any = 10;
  vUnknown: unknown = 10;

  s1: string = this.vAny;
  s2: string = this.vUnknown as string;

  // console.log(vAny.foo());
  // console.log(vUnknown.foo());
  // elvis operator
  getName = (user?: UserInterface): string =>{
    return user?.name ?? 'Not Set';
  }

  //Generics
  addId = <T>(obj: T) =>{
    const id = Math.random().toString(16);
    return{
      ...obj,
      id,
    };
  }

  result = this.addId(user);
  ngOnInit(){
    console.log('result', this.result);
  }
  

}

const user = {
  name: 'Jack',

}

