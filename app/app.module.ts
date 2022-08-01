import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ClintsComponent } from './clints/clints.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { ListstudentComponent } from './student/liststudent/liststudent.component';
import { CreatstudentComponent } from './student/creatstudent/creatstudent.component';
import { FormsModule } from "@angular/forms";
import { UpdatestudentComponent } from './student/updatestudent/updatestudent.component';
import { CreatteacherComponent } from './teacher/creatteacher/creatteacher.component';
import { ListteacherComponent } from './teacher/listteacher/listteacher.component';
import { UpdateteacherComponent } from './teacher/updateteacher/updateteacher.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ClintsComponent,
    PricingComponent,
    ContactComponent,
    FooterComponent,
    NotFoundComponent,
    ListstudentComponent,
    CreatstudentComponent,
    UpdatestudentComponent,
    CreatteacherComponent,
    ListteacherComponent,
    UpdateteacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
