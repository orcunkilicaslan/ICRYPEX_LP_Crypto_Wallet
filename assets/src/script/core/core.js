/* Input Mask */
jQuery(function($){
    $(".inputdatemask").mask("99/99/9999",{placeholder:"MM/DD/YYYY"});
    $(".inputphonemask").mask("0599 999 99 99",{placeholder:"05__ ___ __ __"});
});
/* Input Mask */

/* Alert Auto Close */
window.setTimeout(function() {
    $(".alert").fadeTo(500, 0).slideUp(500, function(){
        $(this).remove();
    });
}, 4000);
/* Alert Auto Close */

/* Loading Info */
// console.log("App Javascript Loading Successful");
/* Loading Info */