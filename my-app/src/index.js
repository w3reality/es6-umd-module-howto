//import MyModule from '../../my-module/src'; // OK
import MyModule from '../../my-module/lib/my-module'; // OK

console.log('hi from app');
let foo = new MyModule.Foo(true);
let bar = new MyModule.Bar(true);
foo.hello();
bar.hello();
