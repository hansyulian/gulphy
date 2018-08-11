const tasker = require("./src/utils/tasker");

module.exports = {
    Base: require("./src/Base"),
    HTML: require("./src/HTML"),
    JS: require("./src/JS"),
    CSS: require("./src/CSS"),
    utils: {
        tasker: tasker,
    },
    registerRun: tasker.registerRun,
    registerWatch: tasker.registerWatch,
    registerRunAndWatch: tasker.registerRunAndWatch
}