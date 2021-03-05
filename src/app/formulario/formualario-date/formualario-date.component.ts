import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formualario-date',
  templateUrl: './formualario-date.component.html',
  styleUrls: ['./formualario-date.component.scss']
})
export class FormualarioDateComponent implements OnInit {
  // @ViewChild('dd') divView: ElementRef<HTMLInputElement>;
  fecha: FormControl = new FormControl( '2022-06-06T12:30' );
  dia: any;
  mes: any;
  actual = new Date();
  kk = new Date('2022-06-06T12:30');
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.verificarFecha();
  }

  gg() {
    console.log( this.fecha.value );
  }

  verificarFecha(){
    if (new Date().getDate() < 10) {
      this.dia = '0'+ new Date().getDate();
    }
    console.log(new Date().getMonth());
    if (new Date().getMonth() < 10) {
      const mes = new Date().getMonth()+1;
      this.mes = '0'+ mes;
    }
  }

}
