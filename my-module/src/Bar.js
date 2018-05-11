import Base from './Base.js';

export default class Bar extends Base {
    constructor(isBrowser) {
        super(isBrowser);
    }
    hello() {
        this.log('hi from Bar object');
    }
}
