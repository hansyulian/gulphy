const Base = require("./Base");
const minifyJS = require("gulp-minify");

class JS extends Base {


    //#region static
    static minify(context) {
        return minifyJS();
    }



    //#endregion
    constructor(settings) {
        super(settings);
    }

    //#region getter

    get fileName() {
        return this.name + ".js";
    }

    get compiler() {
        return this.settings.compiler || "none";
    }
    get taskName() {
        return "js:" + this.name
    }
    get extensionName() {
        return ".js";
    }
    //#endregion
}

module.exports = JS