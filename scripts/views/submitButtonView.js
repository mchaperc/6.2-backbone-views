export default Backbone.View.extend({
	
	template: JST.submitButton,

	events: {
		'click .submit': 'clickSub',
	},

	clickSub: function(e) {
		e.preventDefault();
		this.model.clickSub();

	},

	initialize: function() {
		this.render();
		this.model.on('change', this.render, this);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}

});