import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Productos } from './Modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private Http:HttpClient) { }

  Url='http://localhost:8091/productos';

  getProductos(){
    return this.Http.get<Productos>(this.Url);
  }
}
