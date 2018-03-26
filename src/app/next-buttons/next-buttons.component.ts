import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CheckValidFormService } from '../check-valid-form.service';

@Component({
  selector: 'app-next-buttons',
  templateUrl: './next-buttons.component.html',
  styleUrls: ['./next-buttons.component.css']
})
export class NextButtonsComponent implements OnInit {
  disabled = true;
  firstName: string;
  lastName: string;
  welcome = false;

  constructor(private checkValidFormService: CheckValidFormService) { }

  ngOnInit() {
    this.checkValidFormService.checkValid.subscribe(value => {
      this.disabled = value.disable;
      this.firstName = value.firstName;
      this.lastName = value.lastName;
    });
  }

  showWelcomeMessage() {
    this.welcome = true;
  }
}
