import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  templateUrl: './input-binding.component.html',
  styleUrls: ['./input-binding.component.css']
})
export class InputBindingComponent implements OnInit {

  @Input() name: String;
  @Input('othername') lastname: String;
  constructor() { }

  ngOnInit() {
  }

}
