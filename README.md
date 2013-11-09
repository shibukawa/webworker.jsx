webworker.jsx
===========================================

Synopsis
---------------

WebWorker API wrapper for JSX

Code Example
---------------

### WebWorker Code Sample

```js

import "js/web.jsx";
import "webworker.jsx";

class _Main
{
    static var counter = 0;
    static function main(argv : string[]) : void
    {
        // called when loading.
    }

    static function onmessage (event : MessageEvent) : void
    {
        switch (event.data as string)
        {
        case "start":
            self.setInterval(() -> {
                _Main.counter++;
                self.postMessage(_Main.counter);
            }, 1000);
            break;

        case "reset":
            _Main.counter = 0;
            break;
        }
    }
}
```

### Client Code Sample

```js
import "js/web.jsx";
import "timer.jsx";
import "console.jsx";

class _Main
{
    static function main (argv : string[]) : void
    {
        var worker = new Worker('src/sample.js');

        worker.onmessage = (event)-> {
            dom.document.write((event as MessageEvent).data as string + '<br/>');
        };

        worker.postMessage("start");

        Timer.setInterval(()->{
            console.log("reset");
            worker.postMessage("reset");
        }, 10000);
    }
}
```

Installation
---------------

You need `jsx-linker` to create runnable code:

```sh
$ npm install webworker.jsx
$ npm install jsx-linker
```

To compile source code, use jsx-linker like this:

```sh
$ jsx src.jsx | jsx-linker -s -t webworker > worker.js
```

The simplest way to create WebWorker, use jsx-init 0.3.0 or later.

API Reference
------------------

### function postMessage(message : variant/*any*/) : void;
### function postMessage(message : variant/*any*/, transfer : Transferable[]) : void;
### function close() : void;
### function btoa(btoa : string/*DOMString*/) : string/*DOMString*/;
### function atob(atob : string/*DOMString*/) : string/*DOMString*/;
### function setTimeout(callback : function():void, intervalMS : number) : TimerHandle
### function clearTimeout(timer : TimerHandle) : void;
### function setInterval(callback : function():void, intervalMS : number) : TimerHandle;
### function clearInterval(timer : TimerHandle) : void;

Development
-------------

## Repository

* Repository: git:/github.com/shibukawa/webworker.jsx.git
* Issues: https://github.com/shibukawa/webworker.jsx/issues

## Run Test

```sh
$ grunt test
```

## Run Sample

```sh
# Generate API reference
$ grunt doc

# Build web worker sample
$ grunt jsx:build

# Build client sample
$ grunt jsx:build

# Launch webserver
$ grunt connect
```

Author
---------

* shibukawa / yoshiki@shibu.jp

License
------------

MIT

Complete license is written in `LICENSE.md`.
