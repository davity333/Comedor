import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BreakfastsComponent } from './pages/breakfasts/breakfasts.component';
import { DinnersComponent } from './pages/dinners/dinners.component';
import { PublicarComponent } from './pages/publicar/publicar.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageRegisterComponent } from './pages/page-register/page-register.component';
import { HomeAdminComponent } from './pages/home-admin/home-admin.component';
import { PageServicioDomicilioComponent } from './pages/page-servicio-domicilio/page-servicio-domicilio.component';
import { PagePedidosComponent } from './pages/page-pedidos/page-pedidos.component';
import { PageVentasComponent } from './pages/page-ventas/page-ventas.component';
export const routes: Routes = [
    {path:"", component:PageLoginComponent},
    {path:"breakfasts", component:BreakfastsComponent},
    {path:"dinners", component:DinnersComponent},
    {path:"alta", component:PublicarComponent},
    {path:"home", component:HomeComponent},
    {path:"homeAdmin", component:HomeAdminComponent},
    {path:"register", component:PageRegisterComponent},
    {path:"servicio",component:PageServicioDomicilioComponent},
    {path:"pedidos", component:PagePedidosComponent},
    {path:"ventas", component:PageVentasComponent}
];
