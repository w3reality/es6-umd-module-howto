import MyModule from '../../my-module/src'; // OK
//import MyModule from '../../my-module/lib/my-module'; // this doesn't work; workaround??

console.log('hi from app');
let foo = new MyModule.Foo();
let bar = new MyModule.Bar();
foo.hello();
bar.hello();
