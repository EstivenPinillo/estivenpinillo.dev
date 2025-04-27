import { Component } from '@angular/core';
import { EstivenComponent } from '../estiven/estiven.component';

@Component({
  selector: 'app-perfil',
  imports: [EstivenComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

    firtName: string = "Marlon";
    lastName: string = "Carabali";
    name: string = "Estiven Pinillo";
    ephemeralProfile: string = "Sinopsis";
    softwareDevelopment: string = "Tecnólogo en análisis y desarrollo de software";
    developmentFullStack: string = "Desarrollador web full-stack";
    
    descriptionProfile: string =   `Gozo de una sólida formación técnica y experiencia en la construcción de soluciones web eficientes.
                                    Me especializo en Laravel para el backend y Angular.js para el frontend, integro ambas tecnologías para desarrollar aplicaciones robustas y escalables.
                                    Aplico los principios de ingeniería de requerimientos y estándares de calidad basados en la norma ISO/IEC 25000, 
                                    asegurando desarrollos alineados a las necesidades del usuario y con altos niveles de calidad.`;
}
