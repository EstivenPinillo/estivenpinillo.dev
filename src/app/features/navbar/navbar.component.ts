import { Component } from '@angular/core';

interface MenuOption {
    href: string;
    name: string;
}

@Component({
    selector: 'app-navbar',
    imports: [],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

    menuTitle: string = "Agradecido con Dios";
    menuIcon: string = "./assets/img/stacks.svg";

    menuOptions: MenuOption[] = [

        {
            'href': '#perfil',
            'name': 'Perfil'
        },
        {
            'href': '#habilidades',
            'name': 'Habilidades'
        },
        {
            'href': '#proyectos',
            'name': 'Proyectos'
        },
        {
            'href': '#experiencia',
            'name': 'Experiencia'
        },
        {
            'href': '#estudios',
            'name': 'Estudios'
        }
    ];
}
