import { Component,  } from '@angular/core';
import { ListaService } from 'src/app/services/lista.service';


@Component({
  selector: 'app-lista',
  templateUrl:'./lista.component.html',
  styles: [
  ]
})
export class ListaComponent {
allUsers: string;

  constructor(private service: ListaService) {}

  async getUsers() {
    this.allUsers = await this.service.getAllUsers();
    console.log(this.allUsers);
 }
 

}

