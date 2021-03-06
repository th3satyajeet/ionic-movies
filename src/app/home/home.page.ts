import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MoviedataService } from '../moviedata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public http: HttpClient, public dataservice: MoviedataService, private route: Router) {
   // tslint:disable-next-line: no-unused-expression
  }

  date = new Date();
  public data: any;

  ngOnInit() {
    this.dataservice.getData().subscribe(result => this.data = result);
  }
}
