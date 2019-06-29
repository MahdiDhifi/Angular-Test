import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetsModule} from '../../modules/pets/pets.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class OwnersModule { 
  age: number;
  name:string;
  gender:string;
  pets:PetsModule[];
}
