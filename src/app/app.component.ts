import { Component } from '@angular/core';
import { PerfilComponent } from './features/perfil/perfil.component';
//import { EstivenComponent } from './features/estiven/estiven.component';
//import { SkillsComponent } from './features/skills/skills.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { WaveComponent } from './features/wave/wave.component';
import { SoftwareComponent } from './features/software/software.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, PerfilComponent, SoftwareComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
