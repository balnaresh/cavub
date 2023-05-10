import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  apiShowBlocksCall(): Observable<any>{
    const headers= new HttpHeaders().set('Api_key', '123456').set('content-type', 'application/json').set('Access-Control-Allow-Origin','*');
    
    return this.http.get('http://127.0.0.1:8000/action/download',{'headers': headers});
  }

  apiMineCertificate(formData: any): Observable<any>{
    const headers= new HttpHeaders().set('Api_key', '123456').set('content-type', 'application/json').set('Access-Control-Allow-Origin','*');
    return this.http.post('http://127.0.0.1:8000/action/mine',formData,{'headers': headers});
  }
}
