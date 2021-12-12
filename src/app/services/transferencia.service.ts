import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listatransferencia:any[];
  private url = "http://localhost:3000/transferencia";

  constructor(private httpClient: HttpClient ) {
    this.listatransferencia = [];
  }

  get transferencias(){
    return this.listatransferencia;
  }

  todas(){
    // coloca o serviço (url) como observável
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia:any){
    this.hidratar(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia);
  }

  hidratar(transferencia:any){
    transferencia.data = new Date();
  }
}
