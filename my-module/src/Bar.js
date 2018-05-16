import Base from './Base.js';

class Bar extends Base {
    constructor(isBrowser) {
        super(isBrowser);
    }
    hello() {
        this.log('hi from Bar object');
    }
}

export default Bar;
