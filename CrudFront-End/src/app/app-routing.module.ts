import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './tienda/agregar-producto/agregar-producto.component';
import { CrudComponent } from './tienda/crud/crud.component';
import { EditarProductoComponent } from './tienda/editar-producto/editar-producto.component';

const routes: Routes = [

  {path:'listar', component:CrudComponent},
  {path:'registrar', component:AgregarProductoComponent},
  {path:'edit', component:EditarProductoComponent},
  {path:'**',pathMatch:'full', redirectTo:'registrar'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
