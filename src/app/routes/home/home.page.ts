import { NgFor } from '@angular/common';
import { Component, Signal, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Activity } from 'db/activity.type';
import { ActivityItemComponent } from 'src/app/shared/activity-item/activity-item.component';
import { HomeService } from './home.service';
@Component({
  standalone: true,
  imports: [NgFor, ActivityItemComponent],
  providers: [HomeService],
  styles: [],
  template: `
    <h3>We have {{ activitiesCount() }} activities</h3>
    <ul>
      <li *ngFor="let activity of activities()">
        <app-activity-item [activity]="activity"></app-activity-item>
      </li>
    </ul>
  `,
})
export class HomePage {
  private homeService = inject(HomeService);
  private initial = { initialValue: [] };
  activities: Signal<Activity[]> = toSignal(
    this.homeService.getActivities$(),
    this.initial
  );
  activitiesCount: Signal<number> = computed(() => this.activities().length);
}
