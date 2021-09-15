import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeparmentDetailComponent } from './deparment-detail/deparment-detail.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {path:'', redirectTo:'/departments', pathMatch:'full'},
  {path:'departments', component:DepartmentListComponent},
  {
    path:'departments/:id', 
    component:DeparmentDetailComponent,
    children:[
      {path:'overview', component:DepartmentOverviewComponent},
      {path:'contact', component:DepartmentContactComponent}
    ]
  },
  {path:'employees', component:EmployeeListComponent},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepartmentContactComponent, DepartmentOverviewComponent,DeparmentDetailComponent, PageNotFoundComponent, DepartmentListComponent, EmployeeListComponent]
