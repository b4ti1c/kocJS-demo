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

	/** @expose */
	this.vm = app.vm;

	this.products = ko.observableArray([
        new app.models.Product('Garlic bread'),
        new app.models.Product('Pain au chocolat'),
        new app.models.Product('Seagull spaghetti', 'like') // This one was already 'liked'
    ]);

	this.productListView = app.vf.createView(this, new app.views.ProductList.View(this.products));

	this.vm.goToView(this.productListView);
};
goog.inherits(app.MainViewModel, app.base.ViewModel);


/**
 * 
 * @override
 */
app.MainViewModel.prototype.bindEvents = function(){	
	this.listeners.push(goog.events.listen(this, app.components.LikeWidget.ViewModel.EventType.DECISION, this.onLikeDecision, false, this));
};


app.MainViewModel.prototype.onLikeDecision = function(evt){
	if(evt.value) {
		window.alert('I like');
		this.products.push(new app.models.Product('Hellim'));
	} else window.alert('I dislike');
};


/**
 * 
 * @override
 */
app.MainViewModel.prototype.disposeInternal = function(){
	goog.base(this, 'disposeInternal');

	this.productListView.dispose();
};
