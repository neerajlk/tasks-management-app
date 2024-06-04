import { Injectable } from '@angular/core';
import { HttpService } from '../../../../core/services/http/http.service'

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private BaseHTTP: HttpService) {
  }

  getTasks() {
    let apiPath = 'todos'
    return this.BaseHTTP.GET(apiPath, {})
  }
}
