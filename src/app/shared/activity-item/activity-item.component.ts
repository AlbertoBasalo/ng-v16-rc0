import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Activity, EMPTY_ACTIVITY } from 'src/app/models/activity.type';

@Component({
  selector: 'app-activity-item',
  standalone: true,
  imports: [CommonModule],
  styles: [
    `
      .adult {
        color: orange;
      }
      .child {
        color: navy;
      }
      .family {
        color: green;
      }
    `,
  ],
  template: `
    <span>
      <!-- <a [routerLink]="['/', 'activities', activity.slug]"
        >{{ activity.title }}
      </a> -->
      {{ activity.title }}
    </span>
    <span> 📅 {{ activity.date | date : 'dd-MMM-yy' }} </span>
    <span>
      <ng-container *ngIf="activity.price < 100; else expensive">
        🤑
      </ng-container>
      <ng-template #expensive> 💸 </ng-template>
      {{ activity.price | currency : activity.currency }}
    </span>
    <span [class]="activity.ageCategory">
      {{ activity.ageCategory | titlecase }}
    </span>
    <span>
      🗣️ {{ activity.minParticipants }} - {{ activity.maxParticipants }}
    </span>
  `,
})
export class ActivityItemComponent {
  @Input() activity: Activity = EMPTY_ACTIVITY;
}
