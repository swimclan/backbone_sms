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
		var that = this;
		this.collection.on('change', function() {
			
		});
	},
	render: function() {
		console.log('fucking shit..');
		var collection = this.collection.models;
		console.log(collection.length);
		for (var model in collection) {
			new sms.modelView({
				model: collection[model]
			});
		}
		console.log('you clicked the button..');
	}
});

sms.modelView = Backbone.View.extend({
	el: $('.list'),
	initialize: function() {
		console.log('A new model view has been instantiated');
		this.render();
	},
	render: function() {
		var data = this.model.attributes;
		var tpl = "Sent from: " + data.sender + " >> " + data.message;
		this.$el.append(tpl);
	}
});

/*-------------------------------------
Helper functions
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
$('#new').on('click', function() {
	sms.active.collection.create({
		sender: 'Lesley Grill',
		message: 'Can you pick up dog food???'
	})
});


}); // end document.ready
