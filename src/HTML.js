const Base = require("./Base");
const handlebars = require("gulp-compile-handlebars");

class HTML extends Base {


    //#region static

    static get compilers() {
        return {
            handlebars: function (context) {
                console.log("here");
                return handlebars(context.settings.data || {}, context.settings.handlebars || {})
            }
        }
    }

    //#endregion
    constructor(settings) {
        super(settings);
    }

    //#region getter

    get fileName() {
        return this.name + ".html";
    }

    get compiler() {
        return this.settings.compiler || "none";
    }
    get taskName() {
        return "html:" + this.name
    }
    //#endregion
}

module.exports = HTML;