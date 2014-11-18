steal(
'can/component',
'./services-list.stache!',
'./services-list.less!',
function(Component, initView){
	return Component.extend({
		tag : 'bh-services-list',
		template : initView, 
		scope: {
			
		}
	});
});