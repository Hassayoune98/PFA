import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './/app-routing.module';
import { AgentsComponent } from './agents/agents.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { SignInUpComponent } from './sign-in-up/sign-in-up.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AgentsDetailsComponent } from './agents-details/agents-details.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    AgentsComponent,
    ServiceComponent,
    ContactComponent,
    SignInUpComponent,
    TestimonialsComponent,
    AgentsDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
