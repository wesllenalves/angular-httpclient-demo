import { Component } from '@angular/core';
import { faEye} from '@fortawesome/free-solid-svg-icons';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  faEye = faEye;
  
  
  title = 'angular-httpclient-demo';
  
}
