import { Component, AfterViewInit } from '@angular/core';
import { animate,createSpring } from 'animejs';
  
interface MenuOption {
    href: string;
    name: string;
}

@Component({
    selector: 'app-navbar',
    imports: [ ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements AfterViewInit {

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

    menuAnime(event: MouseEvent): void {

        let target = event.target as HTMLElement;
        

        animate(target, {
            scale: [
              { to: 1.2, ease: 'inOut(2)', duration: 200 },
              { to: 1, ease: createSpring({ stiffness: 300 }) }
            ],
            loop: false,
          });
    }
    
    ngAfterViewInit(): void {
        
        /*animate('.menu-options',  {
            background: '#FF4B4B',
        });*/
    }

}