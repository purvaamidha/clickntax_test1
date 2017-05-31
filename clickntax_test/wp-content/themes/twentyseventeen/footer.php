<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Seventeen
 * @since 1.0
 * @version 1.2
 */

?>

		</div><!-- #content -->

		<footer id="colophon" class="site-footer" role="contentinfo">
			<div class="wrap">
				<?php
				get_template_part( 'template-parts/footer/footer', 'widgets' );

				if ( has_nav_menu( 'social' ) ) : ?>
					<nav class="social-navigation" role="navigation" aria-label="<?php esc_attr_e( 'Footer Social Links Menu', 'twentyseventeen' ); ?>">
						<?php
							wp_nav_menu( array(
								'theme_location' => 'social',
								'menu_class'     => 'social-links-menu',
								'depth'          => 1,
								'link_before'    => '<span class="screen-reader-text">',
								'link_after'     => '</span>' . twentyseventeen_get_svg( array( 'icon' => 'chain' ) ),
							) );
						?>
					</nav><!-- .social-navigation -->
				<?php endif;

				get_template_part( 'template-parts/footer/site', 'info' );
				?>
			</div><!-- .wrap -->
		</footer><!-- #colophon -->
		</div><!-- .site-content-contain -->
</div><!-- #page -->
		<!--adding footer content -->
		
		
		
	

<script type="text/javascript">
	function revslider_showDoubleJqueryError(sliderID) {
		var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
		errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
		errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
		errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
			jQuery(sliderID).show().html(errorMessage);
	}
</script>
		<script type="text/javascript">
	function revslider_showDoubleJqueryError(sliderID) {
		var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
		errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
		errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
		errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
		errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
			jQuery(sliderID).show().html(errorMessage);
	}
</script>

<link rel='stylesheet' id='floating-menu-css'  href='http://clickntax.com/wp/wp-content/plugins/mwp-side-menu/public/css/style.css?ver=2.2' type='text/css' media='all' />
<link rel='stylesheet' id='floating-menu-left-css'  href='http://clickntax.com/wp/wp-content/plugins/mwp-side-menu/public/css/left.css?ver=2.2' type='text/css' media='all' />
<link rel='stylesheet' id='font-awesome-4.7-css'  href='http://clickntax.com/wp/wp-content/plugins/mwp-side-menu/public/css/font-awesome/css/font-awesome.min.css?ver=4.7.0' type='text/css' media='all' />
<link rel='stylesheet' id='prettyphoto-css'  href='http://clickntax.com/wp/wp-content/plugins/js_composer/assets/lib/prettyphoto/css/prettyPhoto.min.css?ver=5.0.1' type='text/css' media='all' />
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/jquery.ui.totop.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/jquery.flexslider-min.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/cleanstart_twitterfeedslider.min.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/cleanstart_libs.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/collapser.min.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/jquery.form.min.js'></script>
<script type='text/javascript'>
/* <![CDATA[ */
var _wpcf7 = {"recaptcha":{"messages":{"empty":"Please verify that you are not a robot."}}};
/* ]]> */
</script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/scripts.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/wp-embed.min.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/side-menu.js?ver=2.2'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/js_composer_front.min.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/jquery.prettyPhoto.min.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/themejs/sliders.js'></script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/js/custom_js.js'></script>

<!-- 
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/js/template_core_min.js'> </script>
<script type='text/javascript' src='http://127.0.0.1/clickntax_test/wp-content/themes/twentyseventeen/assets/js/template_js.js'> </script> -->

<!-- Adding script for testimonial slider -->
<?php wp_footer(); ?>



</body>
</html>
