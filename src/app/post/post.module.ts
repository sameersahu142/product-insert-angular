import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { ProductComponent } from './product/product.component';
import { ItemComponent } from './item/item.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ProductComponent, ItemComponent, ListComponent ],
  imports: [
    CommonModule, PostRoutingModule, FormsModule, ReactiveFormsModule
  ]
})
export class PostModule { }
