import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  public url = environment.API_URL;
  constructor(private http: HttpClient) {

  }

  GET(subURL:string, param:any) {
    return this.http.get(this.url + subURL, {
      params: param,
    });
  }

}