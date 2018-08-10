import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { TestData } from '../items/data';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable({ providedIn: 'root' })
export class TestService {
    private restItemsUrl = 'http://opendata.hccg.gov.tw/dataset/b545e5ba-b5d3-4f34-925f-727fd79fdcb1/resource/bee7d9c9-9be4-4fea-8ca9-6e00747a8bcd/download/20180704162304009.json';

    constructor(private http: HttpClient) { }

    // Rest Items Service: Read all REST Items
    restItemsServiceGetRestItems(): Observable<TestData[]> {
        return this.http.get<any[]>(this.restItemsUrl)
            .pipe(
                map(testData => testData)
            );            
    }
    
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */    
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          
          // TODO: better job of transforming error for user consumption
          //   this.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return of(result as T);
    };
  }
 
}