import Base from './Base.js';

export default class Foo extends Base {
    constructor(isBrowser) {
        super(isBrowser);
    }
    hello() {
        this.log('hi from Foo object');
    }
}
