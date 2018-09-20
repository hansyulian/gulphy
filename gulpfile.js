var gulphy = require("./index");
var GulphyBase = gulphy.Base;

var test = new GulphyBase({
    name: "gulphyTest1",
    files: ["test1/**/*"],
    sourcePath: "tests",
    destination: "./test-result",
    compiler: "template",
    data: {
        text: "Hello Gulphy"
    },
});
var test2 = new GulphyBase({
    name: "gulphyTest2",
    files: ["tests/test1/file1"],
    destination: "./test-result"
});
var test3 = gulphy.html({
    name: "hb-test",
    files: ["test-hb/**/*.hbs"],
    sourcePath: "tests",
    destination: "test-result",
    compiler: "handlebars",
    data: {
        text: "Hello Gulphy"
    },
    pipeline: [
        "compile",
        "changeExtension"
    ]
})
gulphy.registerRun("default");
gulphy.registerWatch("watch");
gulphy.registerRunAndWatch("runWatch");