$(document).ready(function() {
	if ($('.beforeafter').size() > 0) {
		loadScript('http://static.salesforcedemos.com/beforeafter/js/jquery-ui-1.8.13.custom.min.js', loadBeforeAfterScript);
	}
});

function renderBeforeAfter(container) {
	$(container).show();
	$(container).beforeAfter({
		animateIntro:true,
		imagePath:'img/',
		introDuration : 600,
		introPosition : .4,
		showFullLinks : true,
		beforeLinkText: 'Show before',
		afterLinkText: 'Show after',
		enableKeyboard: true,
		dividerColor: '#009ddc'
	});
}

function loadBeforeAfter(){
	$('.beforeafter').each(function(index, element) {
        renderBeforeAfter(element);
	});
}

function loadBeforeAfterScript() {
	loadScript('http://static.salesforcedemos.com/beforeafter/js/jquery.beforeafter-1.4.min.js', loadBeforeAfter);
}

function loadScript(url, callback) { 
        var script = document.createElement("script"); 
        script.type = "text/javascript";
        
        if (script.readyState) { //IE 
            script.onreadystatechange = function() { 
                if (script.readyState == "loaded" || script.readyState == "complete") { 
                    script.onreadystatechange = null; 
                    callback(); 
                } 
            }; 
        } else { //Others 
            script.onload = function() { 
                callback();
            }; 
        }
        
        script.src = url; 
        document.getElementsByTagName("head")[0].appendChild(script); 
    }