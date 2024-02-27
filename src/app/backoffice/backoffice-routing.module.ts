import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBanqueComponent } from './list-banque/list-banque.component';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  children:[
    {
      path: 'listBanque',
     component: ListBanqueComponent,
    },
    {
      path: 'addBanque',
     component:AddBanqueComponent,
    },
    {
      path: 'listCompte',
     component: ListCompteComponent,
    },
    {
      path: 'addCompte',
     component:AddCompteComponent,
    }
    ,
    {
      path: 'listAgent',
     component: ListAgentComponent,
    },
    {
      path: 'addAgent',
     component:AddAgentComponent,
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
