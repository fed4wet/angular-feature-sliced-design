import { NgModule } from '@angular/core';
import { TasksFilterModule } from 'src/features/tasks-filter';
import { ToggleTaskModule } from 'src/features/toggle-task';
import { TaskModule } from 'src/entities/task';
import { SharedModule } from 'src/shared/lib';
import { UiKitModule } from 'src/shared/ui';

import { TasksListPage } from './tasks-list.page';

@NgModule({
  declarations: [TasksListPage],
  imports: [
    SharedModule,
    UiKitModule,
    TaskModule,
    TasksFilterModule,
    ToggleTaskModule,
  ],
  exports: [TasksListPage],
})
export class TaskListModule {}
