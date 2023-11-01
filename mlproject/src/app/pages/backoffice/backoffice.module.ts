import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackofficeComponent } from './backoffice.component';
import { FormModule } from 'src/app/shared/form/form.module';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: BackofficeComponent }];

@NgModule({
  declarations: [BackofficeComponent],
  imports: [CommonModule, FormModule, RouterModule.forChild(routes)],
})
export class BackofficeModule {}
