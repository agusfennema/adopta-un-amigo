import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterModule],  // <--- IMPORTÁ RouterModule para que reconozca router-outlet
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'adopta-un-amigo';
}
