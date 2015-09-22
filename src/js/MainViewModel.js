goog.provide('app.MainViewModel');
goog.require('app.base.ViewModel');
goog.require('app.models.Product');
goog.require('app.managers.ViewManager');
goog.require('app.views.ProductList.View');



/**
 * @constructor
 * @extends {app.base.ViewModel}
 */
app.MainViewModel = function(){	
	goog.base(this);

	this.products = ko.observableArray([
        new app.models.Product('Garlic bread'),
        new app.models.Product('Pain au chocolat'),
        new app.models.Product('Seagull spaghetti', 'like') // This one was already 'liked'
    ]);

	this.productListView = app.vf.createView(this, new app.views.ProductList.View(this.products));

	app.vm.goToView(this.productListView);

	this.exports.push({ref: 'vm', obj: app.vm});
	this.export();
};
goog.inherits(app.MainViewModel, app.base.ViewModel);


/**
 * 
 * @override
 */
app.MainViewModel.prototype.bindModelEvents = function(){	
	this.listeners = [];
	this.listeners.push(goog.events.listen(this, app.components.LikeWidget.ViewModel.EventType.GOOD_DECISION, function(){
		window.alert('I like');
		this.products.push(new app.models.Product('Hellim'));
	}, false, this));

	this.listeners.push(goog.events.listen(this, app.components.LikeWidget.ViewModel.EventType.BAD_DECISION, function(){
		window.alert('I dislike');
	}, false, this));
};


/**
 * 
 * @override
 */
app.MainViewModel.prototype.disposeInternal = function(){
	this.listeners.forEach(goog.events.unlistenByKey);
	this.productListView.dispose();

	goog.base(this, 'disposeInternal');
};
