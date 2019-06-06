import { Injectable } from '@angular/core';
import { Http, Response , RequestOptions, Headers} from '@angular/http';
import { Employee } from './employee';
import { throwError }  from  'rxjs';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
   
employees : Employee[];

private _employeeUrl="http://localhost:3000/api/employee";
private _addempUrl="http://localhost:3000/api/addemployee";

constructor(private _http:Http) { }

  addEmployee(employee :  Employee){
    console.log(employee);
    let headers = new Headers({ 
    'Access-Control-Expose-Headers': 'Origin, X-Requested-With, Content-Type, Accept, x-session-token, timeout, Content-Length, location, *',// all of your headers,
    'Access-Control-Allow-Origin': '*'
});
    let options = new RequestOptions({ headers: headers });
    let body = employee;//JSON.stringify(employee);
    return this._http.post( this._addempUrl, body, options ).pipe(map((res: Response) => res.json()));
  }

  removeEmployee(employee : Employee)
  {
    this.employees.splice(this.employees.indexOf(employee),1);
  }

  errorHandler(error: Response){
    return throwError(error);
     }
 
  getEmployeeList() : Observable<Employee[]>{
      return this._http.get(this._employeeUrl).pipe(map((response : Response) => response.json()));
  }

  
}
