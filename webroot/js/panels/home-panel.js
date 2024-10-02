HomePanel = function(parentEl, pagePath) {
	this.parentEl = parentEl;
    this.title = 'Home';
    this.pagePath = pagePath;
}

HomePanel.prototype = new AbstractPanel();

HomePanel.prototype.constructor = HomePanel;

HomePanel.errorMessage = null;

HomePanel.prototype.render = async function() {
	
    var _this = this;

    try {
        
        if(_this.isActive == true) {
	
            var homeContent = { };
            
            renderTemplate(_this.parentEl, 'templates/home.hbs', homeContent);
            
            // re-connect click handlers
            startupKit.uiKitContent.content21();
            
        }
        
        onTemplateRendered(_this.title, _this.pagePath)

        HomePanel.errorMessage = null;
        
        return; 
           
    } catch (error) {
        
        console.log(error);
        
        return;
    } 
}

