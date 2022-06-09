import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent implements OnInit {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'CLP';
  total = 0;

  monedas: string [] = ['USD', 'EUR', 'LIB', 'CLP'];

  constructor() { }

  ngOnInit(): void {
  }

  convertir(){
    switch (this.tengo) {
      case 'USD':
        if(this.quiero === 'USD'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.94;
        }
        if(this.quiero === 'LIB'){
          this.total = this.cantidad * 0.80;
        }
        if(this.quiero === 'CLP'){
          this.total = this.cantidad * 828.09;
        }

        break;
      case 'EUR':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.07;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'LIB'){
          this.total = this.cantidad * 0.85;
        }
        if(this.quiero === 'CLP'){
          this.total = this.cantidad * 881.82 ;
        }
        break;
      case 'LIB':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 1.25;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 1.18;
        }
        if(this.quiero === 'LIB'){
          this.total = this.cantidad;
        }
        if(this.quiero === 'CLP'){
          this.total = this.cantidad * 1039.07 ;
        }
        break;
      case 'CLP':
        if(this.quiero === 'USD'){
          this.total = this.cantidad * 0.0012;
        }
        if(this.quiero === 'EUR'){
          this.total = this.cantidad * 0.0011;
        }
        if(this.quiero === 'LIB'){
          this.total = this.cantidad * 0.00096;
        }
        if(this.quiero === 'CLP'){
          this.total = this.cantidad;
        }
        break;

      default:
        break;
    }
  }

}
