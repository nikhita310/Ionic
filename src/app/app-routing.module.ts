import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'home', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'resultPage', loadChildren: './result-page/result-page.module#ResultPagePageModule' },
  { path: 'resultPage/:id', loadChildren: './result-page/result-page.module#ResultPagePageModule'  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
