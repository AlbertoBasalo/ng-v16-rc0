import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { Activity } from 'src/app/models/activity.type';
import { ActivityItemComponent } from 'src/app/shared/activity-item/activity-item.component';
import { HomeService } from './home.service';

@Component({
  standalone: true,
  imports: [CommonModule, ActivityItemComponent],
  template: `
    <h3>We have {{ activitiesCount() }} activities</h3>
    <ul>
      <li *ngFor="let activity of activities()">
        <app-activity-item [activity]="activity"></app-activity-item>
      </li>
    </ul>
  `,
  styles: [],
})
export class HomePage {
  private service = inject(HomeService);
  activities = signal<Activity[]>([]);
  activitiesCount = computed(() => this.activities().length);
  constructor() {
    this.service.getActivities().subscribe((a) => this.activities.set(a));
  }
}
