jQuery(document).ready(function(jQuery) {

  jQuery('#identityBlock:eq(0) .heavyText span').html('Sign in IHG<sup>®</sup> Rewards Club Members'); // Change default HTML text
  jQuery('#identityBlock:eq(0) .heavyText, .signIn').wrapAll('<div class=\"rememberWrap\" />'); // Wrap both div tags into a single div
  
  jQuery('.signIn div span label').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn div span input#remember').appendTo('.signIn'); // Move form label into div for positioning
  jQuery('.signIn label, .signIn input#remember').wrapAll('<div class=\"rememberCheck\"></div>'); // Wrap label and input into a single div
  jQuery('.signIn div:eq(3)').addClass('forgotRememberPin'); // Add class name to div for specific targeting
  
  var POINTS = jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1) span').text(); // Get points for earn messaging
  jQuery('#frmGuestInfo #identityBlock .heavyText span:eq(0)').html('IHG<sup>®</sup> Rewards Club'); // Change default HTML text
  jQuery('#frmGuestInfo #identityBlock #anonId .heavyText').prependTo('.joinNow'); // Move header text into .joinNow for more accurate positioning
  jQuery('#frmGuestInfo #identityBlock .heavyText:eq(1)').html('Earn ' + '<strong>' + POINTS + '</strong>' + ' points and enjoy other great benefits of the FREE IHG<sup>®</sup> Rewards Club.'); // Change default text and add POINTS var  
  jQuery('#frmGuestInfo #identityBlock #anonId .joinnowtext label').html('<strong>Yes,</strong> instantly enroll me in the free IHG<sup>®</sup> Rewards Club Program. <a href=\"#\" class=\"pcrTerms\"> Terms &amp; Conditions.</a>'); // Change default HTML text

  jQuery('<div class="clearingDiv"></div><div class="newEnrollmentRadio"></div>').insertAfter('.joinnowtext'); // Create new div for newEnrollment radio button

  var checkbox = jQuery('#pcrEnroll'); // Declare checkbox
  checkbox.replaceWith('<input type="radio" name="'+checkbox.attr('name')+'" value="'+checkbox.attr('value')+'" />').appendTo('.noEnrollmentRadio'); // Replace checkbox with radio button  

  jQuery('.newEnrollmentRadio').append('<input name="pcrQuickEnroll" value="true" type="radio">').appendTo('.noEnrollment'); // Create new radio button
  jQuery('<div class="noEnrollmentText"><label for="pcrEnroll">I am not interested at this time.</label></div>').insertAfter('.newEnrollmentRadio'); // Create new div to hold noEnrollment  

});
