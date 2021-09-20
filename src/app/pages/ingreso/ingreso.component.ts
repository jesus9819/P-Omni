import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  vista_tab = 'tabIngreso';
  muestraTabs: boolean = true;
  

  constructor() { }

  ngOnInit(): void {
  }

  register(registro: NgForm){

    if(!registro.valid){
      return;
    }
    
    this.muestraTabs = false;

  }


  login(ingreso: NgForm){

    if(!ingreso.valid){
      return;
    }
    
    this.muestraTabs = false;

  }
  
  

}
