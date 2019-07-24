/* Translation */
const translateObject = {

    'tr': {
        'HomepageRegisterFirstNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterLastNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterPhoneAlert':'HATALI TELEFON',
        'HomepageRegisterEmailAlert':'HATALI E-POSTA',
    },
    'en':{
        'HomepageRegisterFirstNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterLastNameAlert':'EN AZ 2 KARAKTER',
        'HomepageRegisterPhoneAlert':'HATALI TELEFON',
        'HomepageRegisterEmailAlert':'HATALI E-POSTA',
    }
};

class Translation {
    static translate(language, translationKey){
        if(translateObject.hasOwnProperty(language)){

            if(translateObject[language].hasOwnProperty(translationKey)){
                return translateObject[language][translationKey];
            }
            return "";
        }
        return "";
    }
}
/* Translation */

/* Homepage Register Form */
class HomepageRegisterForm {

    constructor(){}

    sendHomepageRegisterForm(){
        let FirstName = document.getElementById("inputFirstNameId").value;
        let LastName = document.getElementById("inputLastNameId").value;
        let Phone = document.getElementById("inputPhoneId").value;
        let Email = document.getElementById("inputEmailId").value;
        let termsOfUseCheck = document.getElementById("termsOfUseCheck").checked;
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    }

    setHomepageRegisterFormErrorMessages(inputIdSelector, inputErrorMessage, inputIconCheck){
        let ErrorMessageText = document.getElementById(inputIdSelector);
        let ErrorIconCheck = document.getElementById(messageIconSelector);
        ErrorMessageText.innerHTML = inputErrorMessage;
        ErrorIconCheck.addClass = inputIconCheck;
        //ErrorMessageText.classList.add(inputIconCheck);
    }

    verifyContent(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let phonePatternGsm = /^\(5\d{2}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // GSM Phone Pattern
        let phonePatternAll = /^\(\d{3}\)\s?\d{3}\s?\d{2}\s?\d{2}$/g; // ALL Phone Pattern
        let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);

        let val = inputSelectorTag.value.trim();

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length < 2){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterFirstNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "error");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;

            case "inputLastNameProcess":
                if(val.length < 2){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterLastNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "error");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;

            case "inputPhoneProcess":
                if(val.length < 14){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPhoneAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "error");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;

            case "inputEmailProcess":
                if(!emailPattern.test(val)){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterEmailAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "error");
                }else{
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector,"", "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;
        }
    }

    verifyContentErrorDelete(inputProcessName, inputIdSelector, messageSpanSelector, messageIconSelector){

        let inputSelectorTag = document.getElementById(inputIdSelector);
        let messageSpanSelectorTag = document.getElementById(messageSpanSelector);
        let messageIconSelectorTag = document.getElementById(messageIconSelector);
        let val = inputSelectorTag.value.trim();

        switch (inputProcessName) {

            case "inputFirstNameProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterFirstNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;

            case "inputLastNameProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterLastNameAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;

            case "inputPhoneProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterPhoneAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;

            case "inputEmailProcess":
                if(val.length===0){
                    this.setHomepageRegisterFormErrorMessages(messageSpanSelector, Translation.translate('tr','HomepageRegisterEmailAlert'), "");
                    this.setHomepageRegisterFormErrorMessages(messageIconSelector,"", "check");
                }
                break;
        }
    }
}

window.homepageregisterform = new HomepageRegisterForm();
/* Homepage Register Form */

/* Loading Info */
console.log("Mainpage App Homepage Register Form Validations Javascript Loading Successful");
/* Loading Info */