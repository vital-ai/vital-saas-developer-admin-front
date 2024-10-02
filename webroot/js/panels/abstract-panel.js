AbstractPanel = function(parentEl, pagePath){
	this.parentEl = parentEl;
    this.title = null;
    this.isActive = false;
    this.pagePath = pagePath;
}

AbstractPanel.prototype.render = function() {
	console.error('OVERRIDE ME!');
}

AbstractPanel.prototype.cleanup = function(){
	
}

AbstractPanel.prototype.reload = function() {
	
	this.cleanup();
	this.parentEl.empty();
	this.render();
	
}