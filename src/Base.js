const path = require('path');
const concat = require("gulp-concat");
const tasker = require("./utils/tasker");
const plumber = require("gulp-plumber");

class Base {

    //#region static
    static get pipes() {
        var compilers = this.compilers || {};
        var minify = this.minify || function () { };
        return {
            concat: function (context) {
                return concat(context.fileName)
            },
            compile: function (context) {
                var compiler = compilers[context.compiler];
                if (!compiler)
                    return null;
                return compiler(context);
            },
            minify: function (context) {
                return minify(context);
            }
        }

    }

    static minify(context) {
        return null;
    }

    static get compilers() {
        return {

        }
    }

    static get defaultPipeline() {
        return [
            "concat",
            "compile",
        ]
    }

    //#endregion
    constructor(settings) {
        this.settings = settings || {};
        this.register(this.taskName);
    }

    //#region getter
    get taskName() {
        return this.name || "default";
    }

    get fileName() {
        return this.name || "default";
    }

    get watchFiles() {
        return this.settings.watchFiles || [];
    }

    get name() {
        return this.settings.name || "default";
    }

    get sourcePath() {
        return this.settings.sourcePath || "./";
    }

    get destination() {
        return this.settings.destination || "./";
    }

    get files() {
        return this.settings.files || [];
    }

    get pipeline() {
        return this.settings.pipeline || Base.defaultPipeline;
    }


    // get filePaths() {
    //     var files = this.files;
    //     var sourcePath = this.sourcePath;
    //     var result = [];
    //     for (var i in files)
    //         result.push("./" + path.join(sourcePath, files[i]));
    //     return result;
    // }

    get gulpPipeline() {
        var pipeline = this.pipeline;
        var pipes = this.constructor.pipes;
        var gulpInstance = gulp.src(this.files, {
            cwd: this.sourcePath
        });
        gulpInstance = gulpInstance.pipe(plumber());
        for (var i in pipeline) {
            var pipeName = pipeline[i];
            var pipe = pipes[pipeName]
            if (!pipe)
                throw Error("Unknown process: %s", pipeName)
            var process = pipe(this);
            if (process) {
                gulpInstance = gulpInstance.pipe(process);
            }
        }
        gulpInstance = gulpInstance.pipe(gulp.dest(this.destination))

        return gulpInstance;
    }

    //#endregion

    //#region methods
    clone(settings) {
        var newSettings = {};
        Object.assign(newSettings, this.settings);
        Object.assign(newSettings, settings);
        return new this.constructor(newSettings);
    }

    set(settings) {
        Object.assign(this.settings, settings);
        return this;
    }

    register(name) {
        var runName = "run:" + name;
        var watchName = "watch:" + name;
        var run = gulp.task(runName, () => this.gulpPipeline);
        var watchFiles = [];
        watchFiles = this.files.concat(this.watchFiles);
        var watch = gulp.task(watchName, () => gulp.watch(watchFiles, {
            cwd: this.sourcePath
        },
            gulp.parallel([runName])));
        tasker.runs.push({
            name: runName,
            instance: run
        });
        tasker.watches.push({
            name: watchName,
            instance: watch
        });
        return this;
    }

    get compiler() {
        return this.settings.compiler || "none";
    }
    //#endregion

}

module.exports = Base;