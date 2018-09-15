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

function registerRun(name, taskNames) {
    gulp.task(name, gulp.parallel(taskNames || runNames()));
}

function registerWatch(name, taskNames) {
    gulp.task(name, gulp.parallel(taskNames || watchNames()));
}

function registerRunAndWatch(name, taskNames) {
    gulp.task(name, gulp.parallel(taskNames || runAndWatchNames()));
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