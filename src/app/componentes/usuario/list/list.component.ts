import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  usuarios:Usuario[];
  constructor(private usuarioService:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }
  listarUsuarios(){
    this.usuarioService.getListarUsuarios()
    .subscribe(data=>{
      this.usuarios=data;
    });
  }
}
