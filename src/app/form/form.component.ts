import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { NgForm} from '@angular/forms';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [EmployeeService]
})
export class FormComponent implements OnInit {

  emailAlreadyFlag: boolean = true;
  errorMsg='';
  employeeModel :  Employee;
  employees : Employee[];

  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployeeList()
    .subscribe(employeeData => this.employees = employeeData);

  }

  validateEmail(value){
    //return 1;
    if(this.employees.find(x => x.email === value)) {
      //return;
      this.emailAlreadyFlag=true;
     }
    else{
       //console.log(" new enteries for email");
       this.emailAlreadyFlag = false;
       }
   }


   onSubmit(employeeModel : NgForm)
   {
      console.log(employeeModel.value);
      this._employeeService.addEmployee(employeeModel.value).subscribe(
        data => {
         // return true;
          console.log("data submitted successfully ", data);
        },
        error => {
          console.error("Error saving employee!", error);
              }
     );
   }

}
