import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Activity } from 'src/app/models/activity.type';

@Injectable()
export class HomeService {
  private http = inject(HttpClient);
  private url = 'http://localhost:3000/activities';

  getActivities$(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.url);
  }
}
