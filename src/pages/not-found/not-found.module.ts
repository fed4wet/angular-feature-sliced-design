import { NgModule } from '@angular/core';
import { SharedModule } from 'src/shared/lib';

import { NotFoundPage } from './not-found.page';
import {UiKitModule} from "../../shared/ui";

@NgModule({
  declarations: [NotFoundPage],
  imports: [SharedModule, UiKitModule],
  exports: [NotFoundPage],
})
export class NotFoundPageModule {}
