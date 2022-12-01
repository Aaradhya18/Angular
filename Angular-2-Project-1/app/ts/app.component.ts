import {Component} from 'angular2/core';
import { ConfigService } from './Config.Service';
import { Videos } from './Videos';
import { PlayListComponent } from './Videos.Component'

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives: [PlayListComponent]
})

export class AppComponent {
    myHeading = ConfigService.MAIN_HEADING;
    videos: Array<Videos>;

    constructor() {
        this.videos = [new Videos(1, "Azure Training | Azure Tutorial | Intellipaat", "0bNFkI_0jhc", "Learn Azure in 6 hours"),
            new Videos(2, "Azure Interview Questions and Answers ", "R9e63BNB8uc", "Azure common inteview questions")
        ];
    }

}
