import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: DefaultComponent },

  {
    path: 'outcomes',
    children: [
      { path: 'outcomes', component: OutcomeListComponent },
      { path: 'outcomes/create', component: OutcomeCreateComponent },
      { path: 'outcomes/:id/update', component: OutcomeUpdateComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  /* v1.
  { path: 'outcomes', component: OutcomeListComponent },
  { path: 'outcomes/create', component: OutcomeCreateComponent },
  { path: 'outcomes/:id/update', component: OutcomeUpdateComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
