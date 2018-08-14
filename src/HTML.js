const Base = require("./Base");

class HTML extends Base {


    //#region static


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