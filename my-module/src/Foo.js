import Base from './Base.js';

class Foo extends Base {
    constructor(isBrowser) {
        super(isBrowser);
    }
    hello() {
        this.log('hi from Foo object');
    }
}

export default Foo;
