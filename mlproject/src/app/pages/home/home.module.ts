import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SidebarModule } from 'src/app/shared/sidebar/sidebar.module';
import { FormModule } from 'src/app/shared/form/form.module';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SidebarModule,
    FormModule,
    RouterModule.forChild(routes),
  ],
})
export class HomeModule {}
