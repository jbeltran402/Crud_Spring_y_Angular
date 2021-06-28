import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CrudFront-End';

  constructor(private router:Router){}

  Registrar(){
    this.router.navigate(["registrar"]);
  } 
  Listar() {
    this.router.navigate(["listar"]);
  }
}
