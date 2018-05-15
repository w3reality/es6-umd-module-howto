
Standalone demo of creating universal modules/apps from ES6 JavaScript code
===========================================================================

 this repos is ...
 ioi

Universal module from ES6 JavaScript
------------------------------------

.. code::

   my-module                       # comments
   ├── package.json
   ├── webpack.config.js
   ├── src                         # ES6 source code
   │   ├── Base.js                 # class 
   │   ├── Foo.js                  # subclass of Base
   │   ├── Bar.js                  # subclass of Base
   │   ├── index.js                # module implementation; export { Foo, Bar }
   │
   ├── lib                         # ES5 output
   │   ├── my-module.js            # umd module
   │   ├── my-module.min.js        # umd module minified
   │   ├── my-module.js.map        # source map

.. code::

   

   
Building universal module and app from ES6 JavaScript
-----------------------------------------------------

.. code::

   my-app                          # comments
   ├── package.json
   ├── webpack.config.js
   ├── src                         # ES6 source code
   │   ├── index.js                # app implementation; import my-module/src
   │
   ├── dist                        # ES5 output
   │   ├── app.js                  # app
   │   ├── app.min.js              # app minified
   │   ├── app.js.map              # source map


Consuming a universal module
----------------------------

**app-script tag**

**app-require**

**app-require-config**

**app-node**



