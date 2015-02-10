(function() {
  jQuery(document).ready(function(jQuery) {

    jQuery('#identityBlock:eq(0) .heavyText span').html('We\'ll Fill Out the Form. You\'ll Get the Points. Sign In Now.'); // Change default HTML text
    jQuery('#identityBlock:eq(0) .heavyText, .signIn').wrapAll('<div class=\"rememberWrap\" />'); // Wrap both div tags into a single div
    //jQuery('#identityBlock:eq(0) .rememberWrap .heavyText').eq(1).remove(); // Remove first dulicate
    //jQuery('#identityBlock:eq(0) .rememberWrap .heavyText:eq(1)').remove(); // Remove duplicate
    
    jQuery('.signIn div span label').appendTo('.signIn'); // Move form label into div for positioning
    jQuery('.signIn div span input#remember').appendTo('.signIn'); // Move form label into div for positioning
    jQuery('.signIn label, .signIn input#remember').wrapAll('<div class=\"rememberCheck\"></div>'); // Wrap label and input into a single div
    jQuery('.signIn div:eq(3)').addClass('forgotRememberPin'); // Add class name to div for specific targeting
    
    jQuery('#frmGuestInfo #identityBlock .heavyText span:eq(0)').html('IHG<sup>®</sup> Rewards Club'); // Change default HTML text
    jQuery('#frmGuestInfo #identityBlock #anonId .heavyText').prependTo('.joinNow'); // Move header text into .joinNow for more accurate positioning
    
    var POINTS = jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1) span').text(); // Get points for earn messaging
    jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1)').html('Earn ' + '<strong>' + POINTS + '</strong>' + ' points and enjoy other great benefits of the FREE IHG<sup>®</sup> Rewards Club.'); // Change default text and add POINTS var
    jQuery('#frmGuestInfo #identityBlock #anonId .joinnowtext label').html('<strong>Yes,</strong> instantly enroll me in the free IHG<sup>®</sup> Rewards Club Program. <a href=\"#\" class=\"pcrTerms\"> Terms &amp; Conditions.</a>'); // Change default HTML text

    // Show Forgot Pin dialog
    jQuery('#UHF_createPinLink').click(function(event) {
      event.preventDefault();
      return jQuery('.UHF_pcrDialog').css({
        //'display': 'block',
        'top': '240.5px',
        'left': '354.5px'
      });
    });

    // Hide Forgot Pin dialog
    jQuery('.closeButton a').click(function(event) {
      event.preventDefault();
      return jQuery('.UHF_pcrDialog').css({
        'display': 'none',
        'top': '-9999px',
        'left': '-9999px'
      });
    });

    // Show Create Pin dialog
    jQuery('#UHF_createPinLink').click(function(event) {
      event.preventDefault();
      return jQuery('.UHF_pcrDialog').css({
        'display': 'block',
        'top': '240.5px',
        'left': '354.5px'
      });
    });

    // Hide Create Pin dialog
    jQuery('.closeButton a').click(function(event) {
      event.preventDefault();
      return jQuery('.UHF_pcrDialog').css({
        'display': 'none',
        'top': '-9999px',
        'left': '-9999px'
      });
    });

    // Show Terms & Conditions dialog
    jQuery('.pcrTerms').click(function(event) {
      event.preventDefault();
      return jQuery('.pcrTermsDialog').css({
        'display': 'block'
      });
    });

    // Hide Terms & Conditions dialog
    jQuery('.closeControl, .ui-button.ui-corner-all.ui-button-text-only').click(function(event) {
      event.preventDefault();
      return jQuery('.pcrTermsDialog').css({
        'display': 'none'
      });
    });

  });

}).call(this);
