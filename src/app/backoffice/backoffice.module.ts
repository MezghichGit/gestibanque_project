import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackofficeRoutingModule } from './backoffice-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListBanqueComponent } from './list-banque/list-banque.component';
import { AddBanqueComponent } from './add-banque/add-banque.component';
import { AddCompteComponent } from './add-compte/add-compte.component';
import { ListCompteComponent } from './list-compte/list-compte.component';
import { ListAgentComponent } from './list-agent/list-agent.component';
import { AddAgentComponent } from './add-agent/add-agent.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ListBanqueComponent,
    AddBanqueComponent,
    AddCompteComponent,
    ListCompteComponent,
    ListAgentComponent,
    AddAgentComponent,
  ],
  imports: [
    CommonModule,
    BackofficeRoutingModule
  ]
})
export class BackofficeModule { }
