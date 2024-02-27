import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FrontComponent } from './front/front.component';

const routes: Routes = [
  {
  path: '',
  component: FrontComponent,
  children:[
    {
      path: '',
     component: HomeComponent,
    },
    {
      path: 'login',
     component:LoginComponent,
    },
    {
      path: 'register',
     component:RegisterComponent,
    }
  ]
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontofficeRoutingModule { }
