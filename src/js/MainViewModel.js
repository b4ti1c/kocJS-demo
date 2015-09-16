goog.provide('mf.MainViewModel');
goog.require('mf.base.ViewModel');
goog.require('mf.models.Product');
goog.require('mf.managers.ViewManager');
goog.require('mf.views.ProductList.View');



/**
 * @constructor
 * @extends {mf.base.ViewModel}
 */
mf.MainViewModel = function(){
	this.products = ko.observableArray([
        new mf.models.Product('Garlic bread'),
        new mf.models.Product('Pain au chocolat'),
        new mf.models.Product('Seagull spaghetti', 'like') // This one was already 'liked'
    ]);

	this.productListView = mf.vf.createView(this, new mf.views.ProductList.View(this.products));

	mf.vm.addTemplate(this.productListView);
	mf.vm.prepareTemplateEngine();

	mf.vm.switchToView(this.productListView);

	this.exports = [];
	this.exports.push({
		ref: 'products',
		obj: this.products
	});
	this.exports.push({
		ref: 'vm',
		obj: mf.vm
	});

	goog.base(this);
};
goog.inherits(mf.MainViewModel, mf.base.ViewModel);


/**
 * 
 * @override
 */
mf.MainViewModel.prototype.bindModelEvents = function(){	
	this.listeners = [];
	this.listeners.push(goog.events.listen(this, mf.components.LikeWidget.ViewModel.EventType.GOOD_DECISION, function(){
		window.alert('I like');
		this.products.push(new mf.models.Product('Hellim'));
	}, false, this));

	this.listeners.push(goog.events.listen(this, mf.components.LikeWidget.ViewModel.EventType.BAD_DECISION, function(){
		window.alert('I dislike');
	}, false, this));
};


/**
 * 
 * @override
 */
mf.MainViewModel.prototype.disposeInternal = function(){
	this.listeners.forEach(goog.events.unlistenByKey);
	this.productListView.dispose();

	goog.base(this, 'disposeInternal');
};
