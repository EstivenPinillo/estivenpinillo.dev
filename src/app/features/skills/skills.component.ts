import { Component } from '@angular/core';

@Component({
    selector: 'app-skills',
    imports: [],
    templateUrl: './skills.component.html',
    styleUrl: './skills.component.scss'
})
export class SkillsComponent {

    programmingLanguages: string[] = ["PHP","TypeScript","JavaScript", "C++"];
    frameworksLibraries: string[] = ["Laravel", "Angular", "Flight", "JQuery", "D3.js"];
    databases: string[] = ["MySQL", "MongoDB", "SQLite", "SQL"];
    principlesParadigms: string[] = ["POO", "SOLID", "Patrones de diseño", "Arquitectura software","Estructuras de datos"];
    designLayout: string[] = ["HTML5", "CSS3", "SASS", "BEM", "OOCSS", "Responsive design", "mobile-first", "UML"];
    servicesApis: string[] = ["RESTful APIs", "SOAP", "WebSockets"];
    testing: string[] = ["Pruebas de software", "PHPUnit"];
    methodologies: string[] = ["Scrum"];
    projectDependencies: string[] = ["Composer"];
    quality: string[] = ["ISO/IEC 25000"];
    devOpsTools: string[] = ["Google Cloud", "Git", "GitHub", "GitFlow", "Nginx", "Linux"];
    analysis: string[] = ["Ingeniería de requerimientos"];

    skills: string[] = [
        ...this.programmingLanguages, 
        ...this.frameworksLibraries, 
        ...this.databases,
        ...this.principlesParadigms,
        ...this.designLayout,
        ...this.servicesApis,
        ...this.testing,
        ...this.methodologies,
        ...this.projectDependencies,
        ...this.quality,
        ...this.devOpsTools,
        ...this.analysis
    ];

}
