import { Component, OnInit, Input } from '@angular/core';
import { Client } from './client.model';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input('firstName') firstName: String;
  @Input('lastName') lastName: String;
  @Input('age') age: number;

  clients: Client[];

  constructor() { 
    this.clients = [
      {id:1, name: "Bob", age: 28},
      {id:2, name: "Ana", age: 20},
      {id:3, name: "John", age: 40},
      {id:4, name: "Maria", age: 30},

    ]
  }

  ngOnInit() {
  }

}
