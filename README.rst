
es6-umd-module-howto
====================

Scalable boilerplate for creating universal modules/apps from ES6 JavaScript.

Using this minimal boilerplate, we show how to define ES6 classes and selectively export them
as one module called ``my-module.js``.  The module consists of three ES6 classes
``Base``, ``Foo``, and ``Bar``; but it exposes only two of them as ``MyModule.Foo`` and ``MyModule.Bar``.
This configuration is so simple, yet scalable to writing a very feature-rich module
such as three.js (that provides numerous classes, e.g. ``THREE.Scene``, ``THREE.Mesh``, ...).

We also demonstrate how to create a universal app (from ES6 source code) that imports ``my-module.js`` built above.

The output module and app are *universal* in that they comply with `UMD (Universal Module Definition)`_.
So they can be conveniently consumed by script-tags, AMD loading (require.js), and Node.js.  Credits: we are using the webpack configurations introduced
in the `webpack-library-starter`_ repository.

.. _UMD (Universal Module Definition): https://github.com/umdjs/umd
.. _webpack-library-starter: https://github.com/krasimir/webpack-library-starter

As a complementary material, we list some examples with alternative forms of writing apps
that consume ``my-module.js``.

**Quick Guide 👍**

If you are a developer wishing to

- write a universal module in ES6 code -> go hack Section 1
- write a universal app using ES6 code/modules -> go hack Section 1 and 2
- use a universal module in script-tags/require.js/node.js -> go hack Section 3

1. Creating a universal module from ES6 source code
---------------------------------------------------

**Input/output structure** (`my-module <https://github.com/w3reality/es6-umd-module-howto/tree/master/my-module>`__)


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

**Build**
   
.. code::

   $ cd my-module
   $ npm install  # set up build tools
   $ npm run build  # get ES5 module output in lib/ (transpiled by Babel)

   
2. Creating a universal app from ES6 source code
------------------------------------------------

**Input/output structure** (`my-app <https://github.com/w3reality/es6-umd-module-howto/tree/master/my-app>`__)

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

**Build**

.. code::

   $ cd my-app
   $ npm install  # set up build tools
   $ npm run build  # get ES5 app output in dist/ (transpiled by Babel)

**Demo 🔥** (`index.html <https://github.com/w3reality/es6-umd-module-howto/blob/master/my-app/dist/index.html>`__)

`Run the app`_: Messages from ``Foo`` and ``Bar`` objects are displayed

.. _Run the app: https://w3reality.github.io/es6-umd-module-howto/my-app/dist/index.html
   

3. Complementary examples: consuming ``my-module.js``
-----------------------------------------------------

In the previous section, we have shown the modern way of building an app using
the ES6 module system.  On the contrary, from (1) to (3) in this section, we
list alternative (traditional) ways to consume ``my-module.js`` that can be
useful depending on the situations.  In (4), we show how to use the same
module/app with Node.js.

**(1) Loading with script tags** (`app-script-tag/index.html <https://github.com/w3reality/es6-umd-module-howto/blob/master/app-script-tag/index.html>`__, `demo <https://w3reality.github.io/es6-umd-module-howto/app-script-tag/index.html>`__)

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
  
**(2) AMD loading with require.js** (`app-require/index.html <https://github.com/w3reality/es6-umd-module-howto/blob/master/app-require/index.html>`__, `demo <https://w3reality.github.io/es6-umd-module-howto/app-require/index.html>`__)

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


**(3) AMD loading with require.js and config** (`app-require-config <https://github.com/w3reality/es6-umd-module-howto/tree/master/app-require-config>`__, `demo <https://w3reality.github.io/es6-umd-module-howto/app-require-config/index.html>`__)

`index.html <https://github.com/w3reality/es6-umd-module-howto/blob/master/app-require-config/index.html>`__

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

`index.js <https://github.com/w3reality/es6-umd-module-howto/blob/master/app-require-config/index.js>`__

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

**(4) Loading with Node.js** (`app-node <https://github.com/w3reality/es6-umd-module-howto/tree/master/app-node>`__)

`test-module.js <https://github.com/w3reality/es6-umd-module-howto/blob/master/app-node/test-module.js>`__: run this script in terminal as ``node test-module``

.. code::

   #!/usr/bin/env node
   
   const MyModule = require('../my-module/lib/my-module.js');
   let foo = new MyModule.Foo();
   let bar = new MyModule.Bar();
   foo.hello();
   bar.hello();
  
`test-app.js <https://github.com/w3reality/es6-umd-module-howto/blob/master/app-node/test-app.js>`__: run this script in terminal as ``node test-app``

.. code::

   #!/usr/bin/env node
   
   require('../my-app/dist/app.js');

   
