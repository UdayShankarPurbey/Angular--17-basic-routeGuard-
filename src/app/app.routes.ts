import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditAboutComponent } from './pages/edit-about/edit-about.component';
import { NotRegisteredComponent } from './pages/not-registered/not-registered.component';
import { ProductsComponent } from './pages/products/products.component';
import { authGuard } from './services/canActiveRoute/auth.guard';
import { childauthGuard } from './services/canActiveChildRoute/childauth.guard';
import { showpopupGuard } from './services/canDeactiveRoute/showpopup.guard';
import { loadModuleGuard } from './services/canLoadRoute/load-module.guard';

export const routes: Routes = [
  {
    path : '',
    redirectTo : 'home',
    pathMatch : 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'about',
    component : AboutComponent,
    canActivateChild : [childauthGuard],
    children : [
      {
        path : 'edit',
        component : EditAboutComponent
      }
    ]
  },
  {
    path : 'admin',
    canActivate : [authGuard],
    component : AdminComponent,
  },
  {
    path : 'contact',
    canDeactivate : [showpopupGuard],
    component : ContactComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'offer',
    canLoad : [ loadModuleGuard ],
    loadChildren : () => import('./pages/offers/offers.module').then(m => m.OffersModule)
  },
  {
    path : 'not-registered',
    component : NotRegisteredComponent
  },
  {
    path : '**',
    component : NotFoundComponent
  }
];
