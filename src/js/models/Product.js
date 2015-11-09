goog.provide('app.models.Product');
goog.require('koc.base.Model');



/**
 * 
 * @constructor
 * @extends {koc.base.Model}
 *
 * @param {string} name [description]
 * @param {string=} rating [description]
 */
app.models.Product = function(name, rating) {
    /** @expose */
    this.name = name;

    /** @expose */
    this.userRating = ko.observable(rating || null);
	
	goog.base(this);
};
goog.inherits(app.models.Product, koc.base.Model);
