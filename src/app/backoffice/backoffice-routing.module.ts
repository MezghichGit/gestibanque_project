import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBanqueComponent } from './list-banque/list-banque.component';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { ListActualiteComponent } from './list-actualite/list-actualite.component';
import { AddActualiteComponent } from './add-actualite/add-actualite.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'listBanque',
        component: ListBanqueComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addBanque',
        component: AddBanqueComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'listCompte',
        component: ListCompteComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addCompte',
        component: AddCompteComponent,
        canActivate: [AuthGuardService]
      }
      ,
      {
        path: 'listAgent',
        component: ListAgentComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'addAgent',
        component: AddAgentComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGuardService]
      },
      {
        path: 'listActualite',
        component: ListActualiteComponent,
        canActivate: [AuthGuardService]
      }
      ,
      {
        path: 'addActualite',
        component: AddActualiteComponent,
        canActivate: [AuthGuardService]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackofficeRoutingModule { }
