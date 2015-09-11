goog.provide('app.example.BuyerSellerViewModel');



/**
 * @constructor
 * 
 */
app.example.BuyerSellerViewModel = function(){
     this.buyer = { name: 'Franklin', credits: 250 };
     this.seller = { name: 'Mario', credits: 5800 };
	//ko.exportProperty(this, 'changeColor', this.changeColor);
};