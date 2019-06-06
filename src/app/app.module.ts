import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ViewComponent } from './view/view.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from "./employee.service";
import { HttpModule } from "@angular/http";
import { RoundPipe } from "./round.pipe";

const appRoutes: Routes = [
  { path:  'form', component: FormComponent },
  { path: 'view',  component: ViewComponent },
  
  { path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ViewComponent,
    RoundPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,    
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )

  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
