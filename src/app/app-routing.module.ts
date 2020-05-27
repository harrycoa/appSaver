import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { OutcomeListComponent } from './components/outcome/outcome-list/outcome-list.component';
import { OutcomeCreateComponent } from './components/outcome/outcome-create/outcome-create.component';
import { OutcomeUpdateComponent } from './components/outcome/outcome-update/outcome-update.component';


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
