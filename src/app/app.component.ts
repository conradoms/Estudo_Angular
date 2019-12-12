import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Tesla";

  photos = [
    {
        url: 'https://photos7.motorcar.com/used-2016-tesla-model_s-teslamodels20165p90d-13542-18401809-28-1024.jpg',
        description: 'Model S'
    },
    {
        url: 'https://www.designboom.com/wp-content/uploads/2019/11/tesla-cybertruck-bulletproof-exoskeleton-designboom-6.jpg',
        description: 'Cybertruck'
    }
  ]
}
