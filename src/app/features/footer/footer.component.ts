import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
    
    version: string = "Versión 2.0.1";
    copyright: string = "© 2025 Marlon Estiven Pinillo Carabali";

}
