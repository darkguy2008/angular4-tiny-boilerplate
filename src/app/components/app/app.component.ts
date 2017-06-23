import * as app from '../../imports';
import * as svc from '../../services';
let template = require('./app.component.html');

@app.Component({
    selector: "app",
    template: template
})
export class AppComponent {

    constructor() {
    }

    ngOnInit() {
    }
    
}