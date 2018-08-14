'use strict';
global.gulp = global.gulp || require("gulp");
const tasker = require("./src/utils/tasker");
const Base = require("./src/Base");
const HTML = require("./src/HTML");
const JS = require("./src/JS");
const CSS = require("./src/CSS");

const gulphy = {
    Base: Base,
    HTML: HTML,
    JS: JS,
    CSS: CSS,

    base: wrapNew(Base),
    html: wrapNew(HTML),
    js: wrapNew(JS),
    css: wrapNew(CSS),

    tasker: tasker,
    registerRun: tasker.registerRun,
    registerWatch: tasker.registerWatch,
    registerRunAndWatch: tasker.registerRunAndWatch,
}

function wrapNew(fn) {
    return function (settings) {
        return new fn(settings);
    }
}

module.exports = gulphy