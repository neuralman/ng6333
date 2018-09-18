import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinksComponent } from './links/links.component';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'links',
    component: LinksComponent
  },
  {
    path: 'resume',
    component: ResumeComponent
  },
    {
    path: 'email',
    component: EmailComponent
  },
    {
    path: '**',
    component: PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}