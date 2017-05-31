function show_child_menu(menu_id) {
	var d = document.getElementById(menu_id);
	d.className += " show";
}

<script type="text/javascript"> 
jQuery(document).ready(function($){
   
    $("#servicesb").click(function(){
        $("#servicesb").show();
        $("#processb").hide();
        $("#pricingb").hide();
        $("#faqb").hide();
        
    });
     $("#processb").click(function(){
        $("#processb").show();
        $("#servicesb").hide();
        $("#pricingb").hide();
        $("#faqb").hide();
        
    });
    
    $("#pricingb").click(function(){
        $("#pricingb").show();
        $("#servicesb").hide();
        $("#pricingb").hide();
        $("#faqb").hide();
        
    });
    
    $("#faqb").click(function(){
        $("#faqb").show();
        $("#processb").hide();
        $("#pricingb").hide();
        $("#servicesb").hide();
        
    });
    
});
 </script>