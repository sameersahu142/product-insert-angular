import { Component, Input, OnInit, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { PostService } from '../post.service'; 
import { Item, Product } from '../post';
import { ActivatedRoute } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// interface FormValidators {
//   min?: number;
//   max?: number;
//   required?: boolean;
//   requiredTrue?: boolean;
//   email?: boolean;
//   minLength?: boolean;
//   maxLength?: boolean;
//   pattern?: string;
//   nullValidator?: boolean;
//   value: string;
// }
// interface ItemFields {
//   caption: string;
//   type: string;
//   mandatory: boolean;
//   defaultValue : string;
//   validationMessage: string;
//   value: string;
//   validators: FormValidators;
// }

export interface FormData {
  controls: Item[];
}
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemComponent implements OnInit {

  // @Input() formData: FormData;

  public myForm: FormGroup = this.fb.group({});

  name: any;

  items: Item[] = [];
  products: Product[] = [];

  // private readonly newProperty = this;

  constructor( public postService : PostService, private route: ActivatedRoute , private fb: FormBuilder) { }
  itemName: any;

  ngOnInit(): void {
    console.log("111");

    this.route.params.subscribe( (params) =>{this.itemName = params['name']


    this.itemName = this.route.snapshot.params['name'];
    console.log(this.itemName);

    const name = this.itemName;
    console.log(name);
    
    this.postService.showlist(name).subscribe((data: Item[]) => {
      this.items = data;
      console.log(this.items);
      this.createForm(this.items)
    })

    }
    )
  }

  createForm(controls: Item[]){
    for (const control of controls) {

      // const validatorsToAdd = [];
      // for (const [key, value] of Object.entries(control.validators)) {
      //   switch (key) {
      //     case 'required':
      //       if (value) {
      //         validatorsToAdd.push(Validators.required);
      //       }
      //       break;
      //   }
      // }
      
      this.myForm.addControl(control.caption , this.fb.control(control.value, Validators.required))
    }
  }

  onSubmit(): void {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values:', this.myForm);
  }

}
