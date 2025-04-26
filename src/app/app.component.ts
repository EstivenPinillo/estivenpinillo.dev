import { Component } from '@angular/core';
import { PerfilComponent } from './features/perfil/perfil.component';
import { SkillsComponent } from './features/skills/skills.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { SoftwareComponent } from './features/software/software.component';
import { ExperienceComponent } from "./features/experience/experience.component";
import { CertificateComponent } from './features/certificate/certificate.component';
import { WhoAmIComponent } from './features/who-am-i/who-am-i.component';
import { FooterComponent } from './features/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PerfilComponent, SoftwareComponent, ExperienceComponent, SkillsComponent, CertificateComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
