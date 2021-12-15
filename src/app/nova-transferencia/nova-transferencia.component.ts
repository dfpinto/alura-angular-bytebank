import { Router } from '@angular/router';
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

  constructor(private service: TransferenciaService, private router: Router){
  };

  transferir(){
    this.service.adicionar({valor:this.valor, destino:this.destino})
      .subscribe((resultado) => {this.router.navigateByUrl('extrato')},
                 (erro) => console.error(erro));
  }
}
