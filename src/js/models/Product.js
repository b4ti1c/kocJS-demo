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
    this['name'] = this.name = name;
    this['userRating'] = this.userRating = ko.observable(rating || null);
	
	goog.base(this);
};
goog.inherits(app.models.Product, app.base.Model);
