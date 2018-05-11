#!/usr/bin/env node

const MyModule = require('../my-module/lib/my-module.js');
let foo = new MyModule.Foo();
let bar = new MyModule.Bar();
foo.hello();
bar.hello();

