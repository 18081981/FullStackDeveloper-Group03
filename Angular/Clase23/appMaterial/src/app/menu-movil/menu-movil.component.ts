import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-movil',
  templateUrl: './menu-movil.component.html',
  styleUrls: ['./menu-movil.component.css']
})
export class MenuMovilComponent implements OnInit {

  @Output() cerrarMenu = new EventEmitter()

  constructor() { }

  ngOnInit() {
  }

  cerrar() {
    this.cerrarMenu.emit()
  }

}
