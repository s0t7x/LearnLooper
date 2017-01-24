define( [ 'require' ], function(  ){
	return [{
        type: 'directive',
        name: 'activeScreen',
        deps: [directive_activeScreen]
    }];

	function directive_activeScreen(){
		return {
			restrict: 'A',
			link: function(scope, el, attrs){
			    scope.activeScreen.name = attrs.activeScreen;
			}
		};
	}
});
