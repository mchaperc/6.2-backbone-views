import likeButtonView from './views/likeButtonView';
import likeButtonModel from './models/likeButtonModel';
import submitButtonView from './views/submitButtonView';
import submitButtonModel from './models/submitButtonModel';


(function(){
  'use strict';

  $(document).ready(function(){

  	var likeModel = new likeButtonModel();

  	var likeView = new likeButtonView({model: likeModel});

    $('#app').append(likeView.el);

    var submitModel = new submitButtonModel();

    var submitView = new submitButtonView({model: submitModel});

    $('#app').append(submitView.el);

  });

})();
