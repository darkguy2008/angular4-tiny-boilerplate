import * as app from '../imports';
import * as svc from '../services';

@app.Injectable()
export class SampleService {

    constructor() {
    }

    getData(arg) {
        return {
            data: arg
        };
    }
}