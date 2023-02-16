import { NgModule } from '@angular/core';
import { TaskModule } from 'src/entities/task';
import { SharedModule } from 'src/shared/lib';
import { UiKitModule } from 'src/shared/ui';

import { ToggleTaskComponent } from './components';

@NgModule({
  declarations: [ToggleTaskComponent],
  imports: [SharedModule, UiKitModule, TaskModule],
  exports: [ToggleTaskComponent],
})
export class ToggleTaskModule {}
