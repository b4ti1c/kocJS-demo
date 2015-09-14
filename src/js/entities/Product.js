goog.provide('mf.entities.Product');



/**
 * 
 * @constructor
 *
 * @param {string} name [description]
 * @param {string=} rating [description]
 */
mf.entities.Product = function(name, rating) {
    this.name = name;
    this.userRating = ko.observable(rating || null);

	ko.exportProperty(this, 'name', this.name);
	ko.exportProperty(this, 'userRating', this.userRating);
};