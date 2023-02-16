import {NgModule} from '@angular/core';
import {SharedModule} from 'src/shared/lib';
import {UiKitModule} from 'src/shared/ui';

import {TasksFilterComponent} from './components';
import {ConfigService} from './model';


@NgModule({
  declarations: [TasksFilterComponent],
  imports: [SharedModule, UiKitModule],
  exports: [TasksFilterComponent],
  providers: [ConfigService],
})
export class TasksFilterModule {
}
