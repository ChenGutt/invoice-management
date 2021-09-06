import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiKey = null;

  constructor(private http: HttpClient) { }

  getInfoFromApi(url: string): Observable<any> {
    return this.http.get(url)
  }

  setApiKey(key: string): void {
    this.apiKey = key;
  }

  getApiKey(): string {
    return this.apiKey;
  }

  parseDocument(url: string, body: FormData, options: Object): Observable<any> {
    return this.http.post(url, body, options).pipe(map(data => {
      return data["data"]["parsed"]
    }))
  }
}
