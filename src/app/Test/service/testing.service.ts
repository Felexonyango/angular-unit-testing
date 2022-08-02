import { Injectable } from '@angular/core';
import { Ipost } from '../model/Test.model';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class TestingService {

  constructor(private http:HttpClient) { }

private url='https://jsonplaceholder.typicode.com/posts'
  getpost():Observable<Ipost[]>{
    return  this.http.get<Ipost[]>(`${this.url}`)
    .pipe(catchError(this.handleError<Ipost[]>('getpost',[])) )
    
        


  }
  getpostById(id: number): Observable<Ipost> {
    return this.http
      .get<Ipost>(`${this.url}/books/${id}`)
      .pipe(catchError(this.handleError<Ipost>(`getpostById id=${id}`)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }

    
 


}
