const Base = require("./Base");
const minifyJS = require("gulp-uglify");

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

    get extensionName() {
        return this.extension || ".js";
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