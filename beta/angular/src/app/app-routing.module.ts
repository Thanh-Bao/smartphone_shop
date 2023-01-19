import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';

const routes: Routes = [
  { path: 'pageA', component: PageAComponent },
  { path: 'pageB', component: PageBComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
