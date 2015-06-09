var Sub = Backbone.Model.extend({

	defaults: {
		content: 'Submit',
		isDisabled: false,
	},

	clickSub: function() {
		var originalContent = this.get('content');
		var loadingContent = 'Loading...';
		var self = this;

		this.set('content', loadingContent);
		this.set('isDisabled', true);

		setTimeout(function() {
			self.set('content', 'Submit');
			self.set('isDisabled', false);
		}, 4000);
	}

});

export default Sub;