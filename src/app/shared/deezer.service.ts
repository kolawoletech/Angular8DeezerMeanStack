import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Artist } from './artist';

@Injectable({
  providedIn: 'root'
})

export class DeezerService {

  /*
  Application ID 486182
  Application Name wyzetalk
  Secret Key d0557affeb7dedbed0e75df7e4c4e710
  Application domain localhost:8080
  Contact email
  Site url
  */
  endpoint: string = 'http://localhost:8000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // sEARCH


  searchArtist(id) {
    let params = new HttpParams();
    params = params.append('query', id);

    return this.http.get<any>(`${this.endpoint}/search/`, { params: params })
  }


  getArtist(id) {
    let params = new HttpParams();
    params = params.append('query', id);

    return this.http.get<any>(`${this.endpoint}/artist/`, { params: params })
  }



  saveArtist(data: Artist): Observable<any> {
    return this.http.post<any>(`${this.endpoint}/save/`, data)
      .pipe(
        catchError(this.errorMgmt)
      )
  }

  getSavedArtists() {
    return this.http.get(`${this.endpoint}`);
  }




  public get(url: string, options?: any) {
    return this.http.get(this.endpoint + url, options);
  }

  // Error handling 
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}