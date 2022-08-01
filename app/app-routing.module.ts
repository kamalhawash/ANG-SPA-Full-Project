import { UpdateteacherComponent } from './teacher/updateteacher/updateteacher.component';
import { CreatteacherComponent } from './teacher/creatteacher/creatteacher.component';
import { ListteacherComponent } from './teacher/listteacher/listteacher.component';
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { CreatstudentComponent } from './student/creatstudent/creatstudent.component';
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { ClintsComponent } from './clints/clints.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: "hero" , component : HomeComponent  }, 
  {path: "" , component : HomeComponent  }, 
  {path: "about" , component : AboutComponent  }, 
  {path: "clients" , component : ClintsComponent  }, 
  {path: "services" , component : ServicesComponent }, 
  {path: "contact" , component : ContactComponent  }, 
  {path: "pricing" , component : PricingComponent  }, 
  {path: "liststudent" , component : ListstudentComponent  }, 
  {path: "creatstudent" , component : CreatstudentComponent  }, 
  {  path:"us/:id",component:UpdatestudentComponent},
  {path: "lt" , component : ListteacherComponent  }, 
  {path: "ct" , component : CreatteacherComponent  }, 
  {  path:"ut/:id",component:UpdateteacherComponent},
  {path: "**" , component : NotFoundComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
