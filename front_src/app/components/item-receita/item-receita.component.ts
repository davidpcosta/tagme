import { Component, OnInit, Input } from '@angular/core';
import { ItemReceita } from '../../services/interface/item-receita';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-receita',
  templateUrl: './item-receita.component.html',
  styleUrls: ['./item-receita.component.scss']
})
export class ItemReceitaComponent implements OnInit {

  @Input() public receita: ItemReceita;


  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToReceita() {
    this.router.navigate(["/receita/" + this.receita.id]);
  }
}
