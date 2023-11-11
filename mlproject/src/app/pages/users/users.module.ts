import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { Route, RouterModule } from '@angular/router';
import { SpinnerModule } from 'src/app/shared/spinner/spinner.module';

const routes: Route[] = [{ path: '', component: UsersComponent }];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SpinnerModule],
})
export class UsersModule {}
