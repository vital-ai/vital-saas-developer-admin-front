function renderTemplate(selector, template, context) {
	
	if(typeof(selector) === 'string') {
		selector = $(selector);
	} else {
		//assumed jquery selector
	}
	
	// console.log('select', selector);
	
	if(typeof(JST) === 'undefined') {
		console.error('global templates JST array not found');
		return;
	}
	
	var t = JST[template];
	
	if(typeof(t) != 'function') {
		console.error("Template not found: ", template);
		return;
	}
    
	if(context == null) {
		context = {};
	}
    
	if(context.PREFIX == null) {
		context.PREFIX = '/';
	}
	
	var html = t(context);
	
	selector.html(html);
}