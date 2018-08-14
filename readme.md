# Introduction
Neat gulp wrapper for commonly used pipeline

# How To Install

```
npm install --save gulphy
```

# How To Use

``` js
const gulphy = require("gulphy");

var myCss = new gulphy.CSS({
    name: "myApp",                      // filename become myApp.css
    files: [
        "less/**/*.less"                // all files under less folder with .less extensions
    ],
    compiler: "less",                   // default is no compiler
    sourcePath: "src",                  // for gulp's cwd parameter
    destination: "public/sources"       // destination folder
});

var myJs = new gulphy.JS({
    name: "myApp",                      // filename become myApp.js
    files: [
        "js/**/*.js"                    // all files under js folder with .js extensions
    ],
    sourcePath: "src",                  // for gulp's cwd parameter
    destination: "public/sources"       // destination folder
});

gulphy.registerRun("default")           //register as gulp.task "default"
gulphy.registerRunAndWatch("watch")     //register as gulp.task with gulp.watch as "watch"
```