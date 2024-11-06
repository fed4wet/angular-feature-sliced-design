import { Component, ChangeDetectionStrategy } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'fs-not-found',
  templateUrl: './not-found.page.html',
  styleUrls: ['./not-found.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotFoundPage {
constructor(public readonly location: Location) {
}
}
