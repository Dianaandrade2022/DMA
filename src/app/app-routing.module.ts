import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'Inicio',
    loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
  },
  {
    path: 'Apoyo',
    loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
  },
  {
    path: 'Perfil',
    loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
  },
  {
    path: 'Especializacion',
    loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
  },
  {
    path: 'Configuracion',
    loadChildren: () => import('./tab5/tab5.module').then(m => m.Tab5PageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'cursos',
    loadChildren: () => import('./cursos/cursos.module').then( m => m.CursosPageModule)
  },
  {
    path: 'curso1',
    loadChildren: () => import('./curso1/curso1.module').then( m => m.Curso1PageModule)
  },
  {
    path: 'curso2',
    loadChildren: () => import('./curso2/curso2.module').then( m => m.Curso2PageModule)
  },
  {
    path: 'curso3',
    loadChildren: () => import('./curso3/curso3.module').then( m => m.Curso3PageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
