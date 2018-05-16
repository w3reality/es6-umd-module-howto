class Base {
    constructor(isBrowser=false) {
        this.isBrowser = isBrowser;
        // console.log('isBrowser:', isBrowser);
    }
    log(msg) {
        if (this.isBrowser && typeof document !== 'undefined') {
            let p = document.createElement('p');
            p.textContent = msg;
            document.body.appendChild(p);
        } else {
            console.log(msg);
        }
    }
}

export default Base;
