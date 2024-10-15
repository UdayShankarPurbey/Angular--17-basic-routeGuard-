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
    component : ContactComponent
  },
  {
    path : 'products',
    component : ProductsComponent
  },
  {
    path : 'offer',
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
