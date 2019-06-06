import { Component, OnInit } from '@angular/core';
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
  providers: [EmployeeService]
})

export class ViewComponent implements OnInit {
  public now: Date = new Date(); 
  employees : Employee[];
 // employees$: Observable<Employee[]>;


  constructor(private _employeeService: EmployeeService) {
    setInterval(() => {
      this.now = new Date();
    }, 1);
   }

  ngOnInit() {
    this._employeeService.getEmployeeList()
    .subscribe(employeeData => this.employees = employeeData);
  }
}
