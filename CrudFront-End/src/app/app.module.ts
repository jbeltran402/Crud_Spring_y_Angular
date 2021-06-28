import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudComponent } from './tienda/crud/crud.component';
import { AgregarProductoComponent } from './tienda/agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './tienda/editar-producto/editar-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    CrudComponent,
    AgregarProductoComponent,
    EditarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
