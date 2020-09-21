import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITodo } from './Todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  public url = 'https://jsonplaceholder.typicode.com/todos';
  public token = 'AAAAAAAAAAAAAAAAAAAAADTVGwEAAAAAV11taB19P%2B1BkwN7NeLKLSQHMWA%3DPSiaG8SjoV8TWuKPKSlIrS34KVD0kp5uSDC2tIF4zkFEUvCfYB';

  constructor(private http: HttpClient) {}

  getTodos = (): Observable<ITodo[]> => {
    return this.http.get<ITodo[]>(this.url);
  };

  getTweets = (topic:string):Observable<any> =>{
    let headers = new HttpHeaders({
      authorization: this.token,
    });
    return this.http.get(`https://api.twitter.com/2/tweets/search/recent?query=${topic}`, {
      headers: headers,
    });
  }
}
