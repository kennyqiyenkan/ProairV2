import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CompanyComponent } from "./company/company.component";
import { ProjectsComponent } from "./projects/projects.component";
import { TeamComponent } from "./team/team.component";
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'team', component: TeamComponent },
  { path: 'contact', component: ContactComponent}
];

export const routing = RouterModule.forRoot(routes);