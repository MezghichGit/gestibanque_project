import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardAgentComponent } from './dashboard-agent/dashboard-agent.component';
import { AuthGuardService } from '../services/auth-guard.service';

const routes: Routes = [{
  path: '',
component: DashboardAgentComponent,
canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
