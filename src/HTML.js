const Base = require("./Base");

class HTML extends Base {


    //#region static
    static get pipes() {
        var baseOptions = super.pipes;
        baseOptions.compile = function (context) {
            var compilers = HTML.compilers;
            var compiler = compilers[this.compiler];
            if (!compiler)
                return null;
            return compiler();
        }
        baseOptions.minify = function (context) {

        }
    }


    //#endregion
    constructor(settings) {
        super(settings);
    }

    //#region getter

    get fileName() {
        return this.name() + ".html";
    }

    get compiler() {
        return this.settings.compiler || "none";
    }
    //#endregion
}

module.exports = HTML;