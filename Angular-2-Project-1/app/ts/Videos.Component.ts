import { Component } from 'angular2/core';
import { Videos } from './Videos';
@Component({
    selector: 'vid-list',
    templateUrl: 'app/ts/playlist.component.html',
    inputs: ['videos']
    
})

export class PlayListComponent {
    onSelect(vid: Videos) {
        console.log(JSON.stringify(vid));
    }
}