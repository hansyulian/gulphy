const Base = require("./Base");
const minifyCSS = require("gulp-minify-css");
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

    get fileName() {
        return this.name() + ".css";
    }
    //#endregion
}

module.exports = CSS