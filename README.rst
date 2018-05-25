
[DRAFT] Standalone demo of creating universal modules/apps from ES6 JavaScript code
===================================================================================

A minimal demo of defining ES6 classes and selectively export them as a module.
In this boilerplate, a sample module (``my-module.js``) is implementated using three ES6 classes
``Base``, ``Foo``, and ``Bar``.  But the module exposes only two of them: ``Foo`` and ``Bar``.  
This configuration is so simple, yet scalable to a fully featured module
such as three.js (that contains many classes, e.g. THREE.Scene, THREE.Mesh, ...).

Here we explain how to build the module and an ES6 app that imports it.  The output
is compiled as ES5 `UMD (Universal Module Definition)`_ module and app.
So they can be consumed by script-tags, AMD loading (require.js), and Node.js.

As a complementary material, we list examples with alternative forms of coding apps
that consumes ``my-module.js`` build above.

Building a universal module from ES6 JavaScript
-----------------------------------------------

.. code::

   my-module
   ├── package.json
   ├── webpack.config.js
   ├── src                         # ES6 source code
   │   ├── Base.js                 # class 
   │   ├── Foo.js                  # subclass of Base
   │   ├── Bar.js                  # subclass of Base
   │   ├── index.js                # module implementation (export { Foo, Bar })
   │
   ├── lib                         # ES5 output
   │   ├── my-module.js            # umd module
   │   ├── my-module.min.js        # umd module minified
   │   ├── my-module.js.map        # source map

.. code::

   $ cd my-module
   $ npm install  # set up build tools
   $ npm run build  # get ES5 module output

   
Building a universal app from ES6 JavaScript
--------------------------------------------

https://w3reality.github.io/es6-umd-module-howto/my-app/dist/index.html

.. code::

   my-app
   ├── package.json
   ├── webpack.config.js
   ├── src                         # ES6 source code
   │   ├── index.js                # app implementation (import my-module/src)
   │
   ├── dist                        # ES5 output
   │   ├── app.js                  # app
   │   ├── app.min.js              # app minified
   │   ├── app.js.map              # source map
   │   ├── index.html              

.. code::

   $ cd my-app
   $ npm install  # set up build tools
   $ npm run build  # get ES5 app output


Complementary examples: Consuming a universal module
----------------------------------------------------

!! ex-require
!! ex-...
!! ex-...
!! ex-...


**(1) app-script-tag**

https://w3reality.github.io/es6-umd-module-howto/app-script-tag/index.html

.. code::

    <script src="../my-module/lib/my-module.js"></script>
    <script type="text/javascript">
    // --------------------------------------------------------------------------
    // App code
    // --------------------------------------------------------------------------
    // console.log(MyModule); // {Foo: ƒ, Bar: ƒ}
    var foo = new MyModule.Foo(true);
    var bar = new MyModule.Bar(true);
    foo.hello();
    bar.hello();
    </script>
  

**(2) app-require**

https://w3reality.github.io/es6-umd-module-howto/app-require/index.html

.. code::

    <script src='../vendor/require.js'></script>
    <script type="text/javascript">
    require(['../my-module/lib/my-module.js'], function (MyModule) {
        // --------------------------------------------------------------------------
        // App code
        // --------------------------------------------------------------------------
        // console.log(MyModule); // {Foo: ƒ, Bar: ƒ}
        var foo = new MyModule.Foo(true);
        var bar = new MyModule.Bar(true);
        foo.hello();
        bar.hello();
    });
    </script>


**(3) app-require-config**

https://w3reality.github.io/es6-umd-module-howto/app-require-config/index.html

.. code::

    <script src='../vendor/require.js'></script>
    <script type="text/javascript">
    requirejs.config({
        baseUrl: ".",
        paths: {
            "my-module": "../my-module/lib/my-module",
            "index": "./index",
        },
        shim: {
            "index": {
                deps: ["my-module"],
            },
        },
    });
    require(['index']);
    </script>

.. code::

   // --------------------------------------------------------------------------
   // App code
   // --------------------------------------------------------------------------
   var MyModule = require('my-module');
   // console.log(MyModule); // {Foo: ƒ, Bar: ƒ}
   var foo = new MyModule.Foo(true);
   var bar = new MyModule.Bar(true);
   foo.hello();
   bar.hello();

**(4) app-node**

.. code::

   #!/usr/bin/env node
   
   const MyModule = require('../my-module/lib/my-module.js');
   let foo = new MyModule.Foo();
   let bar = new MyModule.Bar();
   foo.hello();
   bar.hello();
  
.. code::

   #!/usr/bin/env node
   
   require('../my-app/dist/app.js');

   
