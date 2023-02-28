import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private baseUrl='https://635bbe8caa7c3f113dc51060.mockapi.io/form'
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post<any>(this.baseUrl, data);
  }
  getLogin(){
    return this.http.get<any>(this.baseUrl);
  }
  
  // deleteData(id: any) {
  //   return this.http.delete<any>(this.baseUrl + '/' + id);
  // }
 
}
