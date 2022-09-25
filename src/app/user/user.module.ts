import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './components/user/user.component';
import { OneuserComponent } from './components/user/oneuser/oneuser/oneuser.component';
import { IdsComponent } from './components/user/select/ids/ids.component';

@NgModule({
  declarations: [UserComponent, OneuserComponent, IdsComponent],
  imports: [CommonModule],
})
export class UserModule {}
