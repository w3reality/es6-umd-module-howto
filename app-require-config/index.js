'use strict';

// --------------------------------------------------------------------------
// App code
// --------------------------------------------------------------------------
var MyModule = require('my-module');
// console.log(MyModule); // {Foo: ƒ, Bar: ƒ}
var foo = new MyModule.Foo(true);
var bar = new MyModule.Bar(true);
foo.hello();
bar.hello();
