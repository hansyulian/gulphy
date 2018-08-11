describe("Base Tests: ", function () {

    it("1. create a new object with settings", function () {
        var settings = {
            name: "Handsome"
        }
        var base = new Base(settings);
        expect(base instanceof Base).toEqual(true);
    });
    it("2. create a new object with settings and see if settings correct", function () {
        var settings = {
            name: "Handsome"
        }
        var base = new Base(settings);
        expect(base.settings).toEqual(settings);
    });
    it("3. clone new one with settings of new one", function () {
        var settings = {
            name: "Handsome"
        }
        var newSettings = {
            destination: "./public"
        }
        var base = new Base(settings);
        var newBase = base.clone(newSettings);
        expect(newBase.settings.destination).toEqual(newSettings.destination);
    });


})