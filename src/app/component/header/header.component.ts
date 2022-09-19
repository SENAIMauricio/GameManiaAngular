import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  menuClique() {
    alert('Você clicou no menu.')
  };

  logoClique() {
    alert('Você clicou no logotipo.')
  }

}
