import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CheckValidFormService } from '../check-valid-form.service';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
  profileForm: FormGroup;

  constructor(private checkValidFormService: CheckValidFormService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required, Validators.minLength(5)]]
    });

    this.profileForm.valueChanges
      .subscribe((input) => {
        if (this.profileForm.valid) {
          this.checkValidFormService.checkValid.next({disable: false, firstName: input.firstName, lastName: input.lastName});
        } else {
          this.checkValidFormService.checkValid.next({ disable: true, firstName: input.firstName, lastName: input.lastName});
        }
      });
  }

  markTouchAndDirty() {
    this.profileForm.controls.firstName.markAsDirty();
    this.profileForm.controls.firstName.markAsTouched();

    // this.profileForm.controls.lastName.markAsDirty();
    // this.profileForm.controls.lastName.markAsTouched();
    this.profileForm.controls.lastName.setValue('dog');
  }
}
