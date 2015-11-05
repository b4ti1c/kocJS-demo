goog.provide('app.models.Product');
goog.require('app.base.Model');



/**
 * 
 * @constructor
 * @extends {app.base.Model}
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
goog.inherits(app.models.Product, app.base.Model);
