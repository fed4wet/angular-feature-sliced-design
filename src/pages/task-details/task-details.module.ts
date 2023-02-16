import { NgModule } from '@angular/core';
import { ToggleTaskModule } from 'src/features/toggle-task';
import { TaskModule } from 'src/entities/task';
import { SharedModule } from 'src/shared/lib';
import { UiKitModule } from 'src/shared/ui';

import { TaskDetailsRoutingModule } from './task-details-routing.module';
import { TaskDetailsPage } from './task-details.page';

@NgModule({
  declarations: [TaskDetailsPage],
  imports: [
    TaskDetailsRoutingModule,
    SharedModule,
    UiKitModule,
    TaskModule,
    ToggleTaskModule,
  ],
})
export class TaskDetailsModule {}
