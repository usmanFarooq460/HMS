import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment} from './../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  apiUrl=environment.apiUrl
  constructor(private http:HttpClient) { }
  // admin/getAll
  getAllAdmins(){
    return this.http.get<any>(this.apiUrl+"admin/getAll")
  }
}
