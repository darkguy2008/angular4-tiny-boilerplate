import * as app from '../../imports';
import * as svc from '../../services';

@app.Component({
    selector: "sample",
    template: require("./sample.component.html")
})
export class SampleComponent {

    constructor(private router: app.Router, private sampleService: svc.SampleService) {
    }

    ngOnInit() {
        console.log('Sample');
    }
}
