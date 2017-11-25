import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AgentsComponent } from './agents/agents.component';
import { AgentsDComponent } from './agents-d/agents-d.component';
import { ContactComponent } from './contact/contact.component';
import { ServiceComponent } from './service/service.component';
import { SignComponent } from './sign/sign.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';






const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent},
    { path: 'agents', component: AgentsComponent },
    { path: 'agents-d', component: AgentsDComponent},
    { path: 'contact', component: ContactComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'sign', component: SignComponent },
    { path: 'testimonials', component: TestimonialsComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [ RouterModule ]
})



export class AppRoutingModule { }
