import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Moviedata} from './movie';
@Injectable({
providedIn: 'root'
})
export class MoviedataService {
    fav: any = [];

     public url = 'assets/data/data.json';

    constructor(public http: HttpClient ) {}
    getData(): Observable<Moviedata[]> {
        return this.http.get<Moviedata[]>(this.url);
    }


}
