import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EmployeeModel } from '../model/employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';
import { CreateEmployeeModel } from '../model/create-employee.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {
  }

  getAll(): Observable<EmployeeModel[]> {
    return this._httpClient.get<ApiResponse<EmployeeResponse[]>>(
      'https://dummy.restapiexample.com/api/v1/employees',
    ).pipe(
      map((response: ApiResponse<EmployeeResponse[]>) => {
        return response.data.map((employeeResponse: EmployeeResponse) => {
          return {
            employeeId: employeeResponse.id,
            employeeName: employeeResponse.employee_name,
            employeeMail: "",
            employeeImg: employeeResponse.profile_image
          }
        });
      })
    )
  }

  create(employee: CreateEmployeeModel): Observable<any> {
    return this._httpClient.post('https://dummy.restapiexample.com/api/v1/create', employee);
  }

  delete(id: string): Observable<void> {
    return this._httpClient.delete( 'https://dummy.restapiexample.com/api/v1/delete/' + id).pipe(map(_ => void 0));
  }


} //end of service
