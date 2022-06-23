import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { TResponseBackend } from '../utils/models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class GenericService {

  apiURL = 'https://rafaelbastidas.com/apis/condominios/app.php'; //environment.apiURL;
  auth_token = 'Bearer ' + 'Z9AQBQXUWDHRN5GYE3DUG52BTSFT1NMA';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Authorization": this.auth_token,
    "Content-Type": "application/json"
  });

  get(request:string): Observable<TResponseBackend> {
    return this.http
      .get<TResponseBackend>(
        `this.apiURL/${request}`,
        { headers: this.headers }
      )
      .pipe(
        map(r => {
          return {
            error: r.error,
            msg: r.msg,
            data: r.data
          }
        }),
        catchError(this.error)
      );
  }

  post(request:any): Observable<TResponseBackend> {
    return this.http
      .post<TResponseBackend>(
        this.apiURL,
        request,
        { headers: this.headers }
      )
      .pipe(
        map(r => {
          return {
            error: r.error,
            msg: r.msg,
            data: r.data
          }
        }),
        catchError(this.error)
      );
  }

  error(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status} Message:_${error.message}`;
    }
    return of({ error: true, msg: errorMessage, data: "null" });
  }

}
