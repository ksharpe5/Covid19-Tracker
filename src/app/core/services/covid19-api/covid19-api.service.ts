import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResult } from 'src/app/shared/models/summary';

@Injectable({
  providedIn: 'root'
})
export class Covid19ApiService {

  private readonly url: string = 'https://api.covid19api.com/';

  constructor(private http: HttpClient) { }

  getSummary(): Observable<ApiResult> {
    return this.http.get(`${this.url}summary`) as Observable<ApiResult>;
  }
}
