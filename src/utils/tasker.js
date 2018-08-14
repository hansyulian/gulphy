var runs = [];
var watches = [];

function getNames(tasks) {
    var result = [];
    for (var i in tasks)
        result.push(tasks[i].name);
    return result;
}

function runNames() {
    return getNames(runs);
}

function watchNames() {
    return getNames(watches);
}

function runAndWatchNames() {
    return runNames().concat(watchNames());
}

function registerRun(name) {
    gulp.task(name, gulp.parallel(runNames()));
}

function registerWatch(name) {
    gulp.task(name, gulp.parallel(watchNames()));
}

function registerRunAndWatch(name) {
    gulp.task(name, gulp.parallel(runAndWatchNames()));
}

var tasker = {
    runs,
    watches,
    runNames,
    watchNames,
    runAndWatchNames,
    registerRun,
    registerWatch,
    registerRunAndWatch
}


module.exports = tasker;