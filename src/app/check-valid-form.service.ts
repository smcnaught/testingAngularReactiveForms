import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CheckValidFormService {
  checkValid = new Subject<{disable: boolean, firstName: string, lastName: string}>();
}
