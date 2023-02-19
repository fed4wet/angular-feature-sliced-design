import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {fetch} from '@nrwl/angular';
import { map } from 'rxjs/operators';
import {Task, TypicodeService} from 'src/shared/api';

import * as TaskActions from './task.actions';
import {Action} from "@ngrx/store";

@Injectable()
export class TaskEffects {
  loadAllTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadAllTasks),
      fetch({
        run: () => {
          return this.typicodeApi.getTasksList()
            .pipe(map((tasks) => TaskActions.loadTasksSuccess({ tasks })));
        },
        onError(a: Action, error: any): any {
          console.error('Error', error);
          return TaskActions.loadTasksFailure({ error });
        },
      })
    ),

  );


  constructor(
    private readonly actions$: Actions,
    private readonly typicodeApi: TypicodeService
  ) {}
}
