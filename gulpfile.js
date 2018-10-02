var gulphy = require("./index");
var GulphyBase = gulphy.Base;

var test = new GulphyBase({
    name: "gulphyTest1",
    files: ["test1/**/*"],
    sourcePath: "tests",
    destination: "./test-result/test1",
    compiler: "template",
    data: {
        text: "Hello Gulphy"
    },
});
var test2 = new GulphyBase({
    name: "gulphyTest2",
    files: ["tests/test1/file1"],
    destination: "./test-result/test2"
});
var test3 = gulphy.html({
    name: "hb-test",
    files: ["test-hb/**/*.hbs"],
    sourcePath: "tests",
    destination: "test-result/test3",
    compiler: "handlebars",
    data: {
        text: "Hello Gulphy"
    },
    pipeline: [
        "compile",
        "changeExtension"
    ]
});
var test4 = gulphy.css({
    name: "singular-test",
    files: ["**/*.less"],
    sourcePath: "tests/test4",
    destination: "test-result/test4",
    compiler: "less",
    pipeline: [
        "compile",
        "minify",
        "changeExtension"
    ],
    individualWatch: true,
});
var test5 = gulphy.js({
    name: "singular-test2",
    files: ["**/*.js"],
    sourcePath: "tests/test5",
    destination: "test-result/test5",
    pipeline: [
        "compile",
        "minify",
        "changeExtension"
    ],
    individualWatch: true,

});
var test6 = gulphy.html({
    name: "singular-test3",
    files: ["**/*.html"],
    sourcePath: "tests/test6",
    destination: "test-result/test6",
    pipeline: [
        "compile",
        "minify",
        "changeExtension"
    ],
    individualWatch: true,

});
gulphy.registerRun("default");
gulphy.registerWatch("watch");
gulphy.registerRunAndWatch("runWatch");