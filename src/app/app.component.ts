import { Component } from '@angular/core';
import { Employee } from './employee';
import { NgForm} from '@angular/forms';
import { EmployeeService } from './employee.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'landmarkwebteam';
  
  constructor(private router: Router){ }
  
  btnClick= function (val:String) {
   if( val == "form")
    this.router.navigateByUrl('/form');
    if( val == "view")
    this.router.navigateByUrl('/view'); 
};


}
