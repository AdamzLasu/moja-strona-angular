import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer">
    <div class="container content has-text-centered">
      <p>Stworzone przez Adama 🔥😄</p>
    </div>
    </footer>
  `,
  styles: [`
    .footer{
      background: linear-gradient(135deg, rgba(29,14,128,100), rgba(255,158,91,100));
      color: black;
      font-weight: bold;
    }
    
  `]
})
export class FooterComponent {

}
