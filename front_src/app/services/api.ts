import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class Api {

    private urlAuthentication = "login";
    private urlReceitas = "receitas";
    private urlDetalheReceita = "receita/{id}";

    public getUrlAuthentication() : string {
        return environment.apiUrl + this.urlAuthentication;
    }

    public getUrlReceitas() : string {
        return environment.apiUrl + this.urlReceitas;
    }

    public getUrlDetalheReceita(id: string) : string {
        return environment.apiUrl + this.urlDetalheReceita.replace('{id}', id);
    }
}
