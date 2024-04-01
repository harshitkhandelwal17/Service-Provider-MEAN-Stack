import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProvidersComponent } from './providers/providers.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AddPComponent } from './providers/add-p/add-p.component';
import { DetailsPComponent } from './providers/details-p/details-p.component';
import { EditPComponent } from './providers/edit-p/edit-p.component';
import { DeletePComponent } from './providers/delete-p/delete-p.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'providers', component: ProvidersComponent },
  { path: 'providers/add-provider', component: AddPComponent },
  { path: 'providers/info/:id', component: DetailsPComponent },
  { path: 'providers/edit/:id', component: EditPComponent },
  { path: 'providers/delete/:id', component: DeletePComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
