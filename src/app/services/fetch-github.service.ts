import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from "rxjs";


@Injectable()
export class FetchGithubService {
  private url: string = 'https://api.github.com/users/';

  constructor(private http:Http) {
    console.log('service: initialized...')
  }

  getUser(username: string) {
    return this.http.get(this.url+username)
        .map(this.extractData)
        .catch(this.handleError);
  }
  getRepos(username: string) {
    return this.http.get(this.url+username+'/repos')
        .map(this.extractData)
        .catch(this.handleError);
  }
  private extractData (res: Response) {
    let body = res.json();
    return body || { }
  }
  private handleError (err: any) {
    let errMsg = (err.message) ? err.message : err.status ? `${err.status} - ${err.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg)
  }
}
