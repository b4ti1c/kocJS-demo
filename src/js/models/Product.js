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
    this.name = name;
    this.userRating = ko.observable(rating || null);

    this.exports = [];
    this.exports.push({ref: 'name', obj: this.name});
    this.exports.push({ref: 'userRating', obj: this.userRating});
	
	goog.base(this);
};
goog.inherits(app.models.Product, app.base.Model);
