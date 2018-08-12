const tasker = require("./src/utils/tasker");
global.gulp = require("gulp");

module.exports = {
    Base: require("./src/Base"),
    HTML: require("./src/HTML"),
    JS: require("./src/JS"),
    CSS: require("./src/CSS"),
    tasker: tasker,
    setGulp: setGulp,
    gulp: gulp,
    registerRun: tasker.registerRun,
    registerWatch: tasker.registerWatch,
    registerRunAndWatch: tasker.registerRunAndWatch

}

function setGulp(gulp) {
    global.gulp = gulp;
}