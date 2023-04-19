import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { Activity, EMPTY_ACTIVITY } from 'src/app/models/activity.type';

@Component({
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Activity detail</p>
    <pre>{{ slug }}</pre>
    <article>
      <h1>{{ activity().title }}</h1>
      <p>
        <span> 📅 {{ activity().date | date : 'dd-MMM-yy' }} </span>
        <span> 💸 {{ activity().price | currency : activity().currency }}</span>
      </p>
    </article>
  `,
  styles: [],
})
export default class DetailActivityPage {
  private http = inject(HttpClient);
  private urlQuery = 'http://localhost:3000/activities?slug=';
  private initialSignal = { initialValue: [] };

  slug: string = inject(ActivatedRoute).snapshot.params['slug'];

  activities: Signal<Activity[]> = toSignal(
    this.http.get<Activity[]>(`${this.urlQuery}${this.slug}`),
    this.initialSignal
  );
  activity: Signal<Activity> = computed(
    () => this.activities()[0] || EMPTY_ACTIVITY
  );
}
