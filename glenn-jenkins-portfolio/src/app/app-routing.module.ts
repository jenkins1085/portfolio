import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DesignProjectsComponent } from './design-projects/design-projects.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { HomeComponent } from './home/home.component';
import { SoftwareProjectsComponent } from './software-projects/software-projects.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'hobbies',
    component: HobbiesComponent
  },
  {
    path: 'software-projects',
    component: SoftwareProjectsComponent
  },
  {
    path: 'design-projects',
    component: DesignProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
