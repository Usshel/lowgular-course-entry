import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonModel } from '../model/person.model';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }
  getAll(): Observable<PersonModel[]> {
    return this._httpClient.get<PersonModel[]>('assets/data/people.json')
  }

  create(employee: CreateEmployeeModel): Observable<any> {    '<!--{sending data to API}-->'
    return this._httpClient.post('https://dummy.restapiexample.com/create', employee, undefined);

  }
}
