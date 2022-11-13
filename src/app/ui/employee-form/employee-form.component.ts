import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { CreateEmployeeModel } from '../../model/create-employee.model';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EmployeeFormComponent {
  readonly employeeform: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.min(1)]),
    salary: new FormControl(null, [Validators.required, Validators.min(1)])
  });

  constructor(private _employeeService: EmployeeService) {
  }

  onFormSubmitted(form: CreateEmployeeModel) {      '<!--Method which takes data to Model-->'
  this._employeeService.create(form).subscribe();
  }

  onButtonClicked(form: { name: string, age: number, salary: string }) {
    alert('User was successfully added to the database.' +
      'Email: ' + form.name +
      ' Age: ' + form.age +
      ' Salary: ' + form.salary);
  }




}
