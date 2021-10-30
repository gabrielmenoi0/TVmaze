import { Component } from '@angular/core';
import { TvService } from '../providers/tv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private tv: TvService, private router: Router) {}
  public listaShow: Array<object>;
  ionViewDidEnter(){
    this.tv.getShows()
      .subscribe((dados: [{}]) => {
        this.listaShow = dados;
      });
  }
}
