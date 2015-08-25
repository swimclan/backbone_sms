/*--------------------------------------
 Namespace the object
 -------------------------------------*/
var sms = sms || {};
sms.active = sms.active || {};

/*--------------------------------------
 Classes for models, collections, views
 -------------------------------------*/
sms.model = Backbone.Model.extend({
	initialize: function() {
		console.log('A new model has been instantiated');
	}
});

sms.collection = Backbone.Collection.extend({
	initialize: function() {
		model: sms.model,
		console.log('A new collection has been instantiated');
	}
});

sms.collectionView = Backbone.View.extend({
	events: {
		'click button': 'render'
	},
	initialize: function() {
		console.log('A new collection view has been instantiated');
	},
	render: function() {
		console.log('you clicked the button..');

	}
});

sms.modelView = Backbone.View.extend({
	initialize: function() {
		console.log('A new model view has been instantiated');
	},
	render: function() {

	}
});

/*-------------------------------------

-------------------------------------*/

/*-------------------------------------
Main program, events and triggers
---------------------------------------*/
$(document).ready(function() {
sms.active.collection = new sms.collection();
sms.active.collectionView = new sms.collectionView({
	el: $('.ui'),
	collection: sms.active.collection
});



}); // end document.ready
