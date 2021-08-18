import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  
  constructor(private http: HttpClient) { }
  getList = 'https://api.stackexchange.com/2.3/search/advanced?filter=default&site=stackoverflow';
 
  getQuestionList(input:any){
    const url = this.getList+input;
    console.log(url);
    return this.http.get(url);
  }
}
