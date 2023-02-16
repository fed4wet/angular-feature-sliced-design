import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/lib';
import { UiKitModule } from 'src/shared/ui';

import { TaskCardComponent, TaskRowComponent } from './components';
import { TaskStatusPipe } from './lib';

@NgModule({
  declarations: [TaskCardComponent, TaskRowComponent, TaskStatusPipe],
  imports: [SharedModule, UiKitModule],
  exports: [TaskCardComponent, TaskRowComponent, TaskStatusPipe],
})
export class TaskModule {}
