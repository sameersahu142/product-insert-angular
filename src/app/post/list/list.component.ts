import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Item } from '../post';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() item!: Item;
  @Input() myForm!: FormGroup;
  get isValid() { return this.myForm.controls[this.item.caption].invalid &&
                                this.myForm.controls[this.item.caption].touched ;
  }
}
