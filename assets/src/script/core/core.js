/* Input Mask */
$(document).ready(function(){
    $('.inputphonemask').inputmask({
        mask: '0599 999 99 99',
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false
    });
});
/* Input Mask */

/* Country Code Select */
$(document).ready(function(){

    var phoneInputMask = $('.inputphonemaskdatamask');

    phoneInputMask.inputmask({
        mask: '999 999 9999',
        greedy: false,
        placeholder: '',
        showMaskOnFocus: true,
        showMaskOnHover: false,
        onincomplete:  function (e) {
            var phoneZeroVal = phoneInputMask.val().substring(0, 1);
            if (phoneZeroVal == "0"){
                $(".inputerrormessage.phoneerrorzero").text("\"0\" İLE BAŞLAYAMAZ");
                return false;
            } else {
                $(".inputerrormessage.phoneerrorzero").text("");
            }
        },
        onBeforeWrite: function (e) {
            var phoneZeroVal = phoneInputMask.val().substring(0, 1);
            if (phoneZeroVal == "0"){
                $(".inputerrormessage.phoneerrorzero").text("\"0\" İLE BAŞLAYAMAZ");
                return false;
            } else {
                $(".inputerrormessage.phoneerrorzero").text("");
            }
        }
    });

    $('.jsCountryCode').change(function() {

        var choiceCountryCode = $(this).val();

        switch(choiceCountryCode){
            case '90':
                phoneInputMask.val("");
                phoneInputMask.inputmask({
                    mask: '999 999 9999',
                    greedy: false,
                    placeholder: '',
                    showMaskOnFocus: true,
                    showMaskOnHover: false,
                    onincomplete:  function (e) {
                        var phoneZeroVal = phoneInputMask.val().substring(0, 1);
                        if (phoneZeroVal == "0"){
                            $(".inputerrormessage.phoneerrorzero").text("\"0\" İLE BAŞLAYAMAZ");
                            return false;
                        } else {
                            $(".inputerrormessage.phoneerrorzero").text("");
                        }
                    },
                    onBeforeWrite: function (e) {
                        var phoneZeroVal = phoneInputMask.val().substring(0, 1);
                        if (phoneZeroVal == "0"){
                            $(".inputerrormessage.phoneerrorzero").text("\"0\" İLE BAŞLAYAMAZ");
                            return false;
                        } else {
                            $(".inputerrormessage.phoneerrorzero").text("");
                        }
                    }
                });
                break;

            default:
                phoneInputMask.val("");
                phoneInputMask.inputmask({
                    mask: '999999999999999999',
                    greedy: false,
                    placeholder: '',
                    showMaskOnFocus: true,
                    showMaskOnHover: false
                });
                break;
        }
    });
});
/* Country Code Select */

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