//Variables
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById ('email'),
subject = document.getElementById ('subject'),
message = document.getElementById ('message');



//Event Listeners

eventListeners ();
function eventListeners () {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the Forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);
}



//Functions

//App Initialization
function appInit () {
    // Disable the send button on load
    sendBtn.disabled = true;
}

//Validate the Fields
function validateField() {
    let errors;

    // Validate the Length of the Field
    validateLength(this);

    //Validate the email
    if(this.type === 'email') {
        validateEmail(this);
    }
}
//Validate the Length of the Fields
function validateLength (field) {
    if(field.value.length > 0) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }
}
//Validate Email (checks for @ in the value)

function validateEmail(field) {
    let emailText = field.value;
    //Check if the email contains @ sign
    if(emailText.indexOf('@') !== -1) {
        field.style.borderBottomColor = 'green';
        field.classList.remove('error');
    } else {
        field.style.borderBottomColor = 'red';
        field.classList.add('error')
    }
}