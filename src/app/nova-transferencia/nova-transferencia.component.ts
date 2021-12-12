import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  valor: number;
  destino: string;

  constructor(private service: TransferenciaService){
  };

  transferir(){
    this.service.adicionar({valor:this.valor, destino:this.destino})
      .subscribe((resultado) => {console.log(resultado); this.limpar();}, (erro) => console.error(erro));
  }

  limpar(){
    this.valor = 0;
    this.destino = "";
  }
}
