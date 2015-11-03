goog.provide('app.helpers.GccKnockoutHelper');



/**
 * @constructor
 */
app.helpers.GccKnockoutHelper = function(){
};
goog.addSingletonGetter(app.helpers.GccKnockoutHelper);


app.helpers.GccKnockoutHelper.prototype.exportSymbol = function(koPath, object){
	var tokens = koPath.split(".");

    // In the future, "ko" may become distinct from "koExports" (so that non-exported objects are not reachable)
    // At that point, "target" would be set to: (typeof koExports !== "undefined" ? koExports : ko)
    var target = ko;

    for (var i = 0; i < tokens.length - 1; i++)
        target = target[tokens[i]];
    target[tokens[tokens.length - 1]] = object;
};


app.helpers.GccKnockoutHelper.prototype.exportProperty = function(owner, publicName, object){
	owner[publicName] = object;
};
