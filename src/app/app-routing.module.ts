import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgentsComponent} from './agents/agents.component';
import {AgentsDetailsComponent} from './agents-details/agents-details.component';
import {TestimonialsComponent} from './testimonials/testimonials.component';
import {ContactComponent} from './contact/contact.component';
import {ServiceComponent} from './service/service.component';
import {SignInUpComponent} from './sign-in-up/sign-in-up.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent},
    { path: 'Agents', component: AgentsComponent},
    {path: 'AgentsDetails', component: AgentsDetailsComponent },
    {path: 'Testimonials', component: TestimonialsComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'Service', component: ServiceComponent},
    {path: 'SignInUp', component: SignInUpComponent},
    ];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
