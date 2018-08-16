var gulphy = require("./index");
var GulphyBase = gulphy.Base;

var test = new GulphyBase({
    name: "gulphyTest1",
    files: ["test1/**/*"],
    sourcePath: "tests",
    destination: "./test-result"
});
var test2 = new GulphyBase({
    name: "gulphyTest2",
    files: ["tests/test1/file1"],
    destination: "./test-result"
})
gulphy.registerRun("default");
gulphy.registerWatch("watch");
gulphy.registerRunAndWatch("runWatch");