const Base = require("./Base");
const minifyCSS = require("gulp-uglifycss");
const less = require("gulp-less");

class CSS extends Base {

    //#region static

    static get compilers() {
        return {
            less: less
        }
    }


    static minify(context) {
        return minifyCSS();
    }

    //#endregion
    constructor(settings) {
        super(settings);
    }

    //#region getter

    get extensionName() {
        return this.extension || ".css";
    }

    get taskName() {
        return "css:" + this.name
    }

    get extensionName() {
        return ".css";
    }
    //#endregion
}

module.exports = CSS