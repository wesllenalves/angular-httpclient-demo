import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetalhesComponent } from './user-detalhes/user-detalhes.component';
import { UserEditeComponent } from './user-edite/user-edite.component';
import { NewsComponent } from './components/news/news.component';


const routes: Routes = [
  { path: '', component: NewsComponent },
  { path: 'detalhes-users', component: UserDetalhesComponent },
  { path: 'edite-users', component: UserEditeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
