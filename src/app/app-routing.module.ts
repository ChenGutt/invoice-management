import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiInputComponent } from './components/api-input/api-input.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: "", component: ApiInputComponent },
  { path: "upload-new", canActivate: [AuthGuardService], component: HomeComponent },
  {
    path: "documents", canActivate: [AuthGuardService], component: DocumentsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
