var gulphy = require("./index");
var gulp = require("gulp");
var concat = require("gulp-concat");
var GulphyBase = gulphy.Base;

var test = new GulphyBase({
    name: "gulphyTest1",
    files: ["tests/test1/**/*"],
    destination: "./test-result"
});
var test2 = new GulphyBase({
    name: "gulphyTest2",
    files: ["tests/test1/file1"],
    destination: "./test-result"
})
gulphy.registerWatch("watch");
gulphy.registerRunAndWatch("runWatch");