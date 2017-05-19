// SCRIPTS FOR SLIDER
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
if(htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}else{
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

/******************************************
	-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/

var setREVStartSize=function(){
	try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
		e.c = jQuery('#rev_slider_1_1');
		e.gridwidth = [1240];
		e.gridheight = [868];
				
		e.sliderLayout = "auto";
		if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
		
	}catch(d){console.log("Failure at Presize of Slider:"+d)}
};

setREVStartSize();

			var tpj=jQuery;

var revapi1;
tpj(document).ready(function() {
	if(tpj("#rev_slider_1_1").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_1_1");
	}else{
		revapi1 = tpj("#rev_slider_1_1").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//clickntax.com/wp/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"auto",
			dottedOverlay:"none",
			delay:9000,
			navigation: {
				onHoverStop:"off",
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:1240,
			gridheight:868,
			lazyType:"none",
			shadow:0,
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/

var htmlDivCss = unescape("%7B%0A%20%20%20%20%20%20padding%3A%2020px%20%21important%3B%0A%7D");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if(htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else{
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}


// SCRIPT FOR NEXT SLIDER
var htmlDiv = document.getElementById("rs-plugin-settings-inline-css"); var htmlDivCss="";
if(htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}else{
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}

/******************************************
	-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/

var setREVStartSize=function(){
	try{var e=new Object,i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
		e.c = jQuery('#rev_slider_3_2');
		e.gridwidth = [1480];
		e.gridheight = [508];
				
		e.sliderLayout = "fullwidth";
		if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
		
	}catch(d){console.log("Failure at Presize of Slider:"+d)}
};
			
setREVStartSize();

var tpj=jQuery;

var revapi3;
tpj(document).ready(function() {
	if(tpj("#rev_slider_3_2").revolution == undefined){
		revslider_showDoubleJqueryError("#rev_slider_3_2");
	}else{
		revapi3 = tpj("#rev_slider_3_2").show().revolution({
			sliderType:"standard",
			jsFileLocation:"//clickntax.com/wp/wp-content/plugins/revslider/public/assets/js/",
			sliderLayout:"fullwidth",
			dottedOverlay:"none",
			delay:2000,
			navigation: {
				keyboardNavigation:"off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation:"off",
				mouseScrollReverse:"default",
				onHoverStop:"off",
				bullets: {
					enable:true,
					hide_onmobile:false,
					style:"hesperiden",
					hide_onleave:false,
					direction:"horizontal",
					h_align:"center",
					v_align:"bottom",
					h_offset:0,
					v_offset:20,
					space:10,
					tmp:''
				}
			},
			visibilityLevels:[1240,1024,778,480],
			gridwidth:1480,
			gridheight:508,
			lazyType:"none",
			shadow:0,
			spinner:"spinner0",
			stopLoop:"off",
			stopAfterLoops:-1,
			stopAtSlide:-1,
			shuffle:"off",
			autoHeight:"off",
			disableProgressBar:"on",
			hideThumbsOnMobile:"off",
			hideSliderAtLimit:0,
			hideCaptionAtLimit:0,
			hideAllCaptionAtLilmit:0,
			debugMode:false,
			fallbacks: {
				simplifyAll:"off",
				nextSlideOnWindowFocus:"off",
				disableFocusListener:false,
			}
		});
	}
});	/*ready*/

var htmlDivCss = unescape(".hesperiden.tp-bullets%20%7B%0A%7D%0A.hesperiden.tp-bullets%3Abefore%20%7B%0A%09content%3A%22%20%22%3B%0A%09position%3Aabsolute%3B%0A%09width%3A100%25%3B%0A%09height%3A100%25%3B%0A%09background%3Atransparent%3B%0A%09padding%3A10px%3B%0A%09margin-left%3A-10px%3Bmargin-top%3A-10px%3B%0A%09box-sizing%3Acontent-box%3B%0A%20%20%20border-radius%3A8px%3B%0A%20%20%0A%7D%0A.hesperiden%20.tp-bullet%20%7B%0A%09width%3A12px%3B%0A%09height%3A12px%3B%0A%09position%3Aabsolute%3B%0A%09background%3A%20rgb%28153%2C%20153%2C%20153%29%3B%20%2F%2A%20old%20browsers%20%2A%2F%0A%20%20%20%20background%3A%20-moz-linear-gradient%28top%2C%20%20rgb%28153%2C%20153%2C%20153%29%200%25%2C%20rgb%28225%2C%20225%2C%20225%29%20100%25%29%3B%20%2F%2A%20ff3.6%2B%20%2A%2F%0A%20%20%20%20background%3A%20-webkit-linear-gradient%28top%2C%20%20rgb%28153%2C%20153%2C%20153%29%200%25%2Crgb%28225%2C%20225%2C%20225%29%20100%25%29%3B%20%2F%2A%20chrome10%2B%2Csafari5.1%2B%20%2A%2F%0A%20%20%20%20background%3A%20-o-linear-gradient%28top%2C%20%20rgb%28153%2C%20153%2C%20153%29%200%25%2Crgb%28225%2C%20225%2C%20225%29%20100%25%29%3B%20%2F%2A%20opera%2011.10%2B%20%2A%2F%0A%20%20%20%20background%3A%20-ms-linear-gradient%28top%2C%20%20rgb%28153%2C%20153%2C%20153%29%200%25%2Crgb%28225%2C%20225%2C%20225%29%20100%25%29%3B%20%2F%2A%20ie10%2B%20%2A%2F%0A%20%20%20%20background%3A%20linear-gradient%28to%20bottom%2C%20%20rgb%28153%2C%20153%2C%20153%29%200%25%2Crgb%28225%2C%20225%2C%20225%29%20100%25%29%3B%20%2F%2A%20w3c%20%2A%2F%0A%20%20%20%20filter%3A%20progid%3Adximagetransform.microsoft.gradient%28%20%0A%20%20%20%20startcolorstr%3D%22rgb%28153%2C%20153%2C%20153%29%22%2C%20endcolorstr%3D%22rgb%28225%2C%20225%2C%20225%29%22%2Cgradienttype%3D0%20%29%3B%20%2F%2A%20ie6-9%20%2A%2F%0A%09border%3A3px%20solid%20rgb%28229%2C%20229%2C%20229%29%3B%0A%09border-radius%3A50%25%3B%0A%09cursor%3A%20pointer%3B%0A%09box-sizing%3Acontent-box%3B%0A%7D%0A.hesperiden%20.tp-bullet%3Ahover%2C%0A.hesperiden%20.tp-bullet.selected%20%7B%0A%09background%3Argb%28102%2C%20102%2C%20102%29%3B%0A%7D%0A.hesperiden%20.tp-bullet-image%20%7B%0A%7D%0A.hesperiden%20.tp-bullet-title%20%7B%0A%7D%0A%0A");
var htmlDiv = document.getElementById('rs-plugin-settings-inline-css');
if(htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
}
else{
	var htmlDiv = document.createElement('div');
	htmlDiv.innerHTML = '<style>' + htmlDivCss + '</style>';
	document.getElementsByTagName('head')[0].appendChild(htmlDiv.childNodes[0]);
}