import { Component } from '@angular/core';
import { EstivenComponent } from '../estiven/estiven.component';

@Component({
  selector: 'app-perfil',
  imports: [EstivenComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

    ephemeralIntroduction: string = "";
    
}
