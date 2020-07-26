import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ListComponent} from '../componentes/usuario/list/list.component';
import { Usuario} from '../modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url='http://localhost:9001/usuarios';
  constructor(private http:HttpClient) { }
  getListarUsuarios(){
    return this.http.get<Usuario[]>(this.url+'/all');
  }
}
