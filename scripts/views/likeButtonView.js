export default Backbone.View.extend({
	
	template: JST.likeButton,

	events: {
		'click .like': 'like',
	},

	like: function(e) {
		e.preventDefault();
		this.model.like();
	},

	initialize: function() {
		this.render();
		this.model.on("change:count", this.render, this);
	},

	render: function() {
		this.$el.html(this.template(this.model.toJSON()));
	}
});