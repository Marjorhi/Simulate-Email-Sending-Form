//Variables
const sendBtn = document.getElementById('sendBtn'),
email = document.getElementById ('email'),
subject = document.getElementById ('subject'),
message = document.getElementById ('message'),
resetBtn = document.getElementById ('resetBtn'),
sendEmailForm = document.getElementById ('email-form');



//Event Listeners

eventListeners ();

function eventListeners () {
    //App Init
    document.addEventListener('DOMContentLoaded', appInit);

    //Validate the Forms
    email.addEventListener('blur', validateField);
    subject.addEventListener('blur', validateField);
    message.addEventListener('blur', validateField);

    //Send Email and Reset Button
    sendEmailForm.addEventListener('submit', sendEmail);
    resetBtn.addEventListener('click', resetForm);
}


//Functions

//App Initialization
function appInit () {
    // Disable the send button on load
    sendBtn.disabled = true;
}

function sendEmail(e) {
    e.preventDefault();

    //Show the Spinner
    const spinner = document.querySelector('#spinner');
    spinner.style.display = 'block';

    //Show the image
    const sendEmailImg = document.createElement('img');
    sendEmailImg.src = 'img/mail.gif';
    sendEmailImg.style.display = 'block';

    //Hide Spinner then show the send Email image
    setTimeout(function () {
        //Hide the Spinner
        spinner.style.display = 'none';

        //Show the image
        document.querySelector('#loaders').appendChild ( sendEmailImg );

        //After 5 seconds, hide the image and reset the Form
        setTimeout(function() {
            sendEmailForm.reset();
            sendEmailImg.remove();
        }, 5000);
    }, 3000);
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

    //Both will return errors, then check if there're any errors
    errors = document.querySelectorAll('.error');

    //Check that the inputs are not empty
    if(email.value !== '' && subject.value !== '' && message.value !== '') {
        if(errors.length ===0) {
            // The button should be enabled
            sendBtn.disabled = false;
        }
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
function resetForm () {
    sendEmailForm.reset();
}