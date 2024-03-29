// import services and utilities
import { getUser, signInUser, signUpUser } from '../fetch-utils.js';

const authHeader = document.getElementById('auth-header');
const authForm = document.getElementById('auth-form');
const authButton = authForm.querySelector('button');
const changeType = authForm.querySelector('a');
const errorDisplay = authForm.querySelector('.error');

// check the query params for a redirect Url (page before auth redirect)
const params = new URLSearchParams(location.search);
const redirectUrl = params.get('redirectUrl') || '../';

// > Part C: If user directly navigated to /auth, but we have a user, go back
// (they need to sign out first before coming here)
//      - get the user
const user = getUser();
//      - replace location with redirectUrl
if (user) location = redirectUrl;

// Sign up options
const signUpType = {
    header: 'Create a new account',
    button: 'Sign Up',
    prompt: 'Already have an account?',
    action: signUpUser,
};

// Sign in options
const signInType = {
    header: 'Sign in to your account',
    button: 'Sign In',
    prompt: 'Need to create an account?',
    action: signInUser,
};

// Start with "sign in" as default
let authType = signInType;

// set the text display on the header, button, and change type link
function displayAuth() {
    authHeader.textContent = authType.header;
    authButton.textContent = authType.button;
    changeType.textContent = authType.prompt;
    errorDisplay.textContent = '';
}

// set initial display on load
displayAuth();

// toggle the type (sign in vs up)
changeType.addEventListener('click', (e) => {
    // using an <a> tag, don't let it actually
    // change the browser page
    e.preventDefault();

    // toggle the auth type
    authType = authType === signInType ? signUpType : signInType;

    // redisplay the text in the header, button, and change type link
    displayAuth();
});

authForm.addEventListener('submit', async (e) => {
    // don't let the form submit the page
    e.preventDefault();

    // clear the error, and put the button in "loading state"
    errorDisplay.textContent = '';
    const buttonText = authButton.textContent;
    authButton.disabled = true;
    authButton.textContent = 'Authenticating...';

    // > Part A:
    //      - get formData object from form
    //      - call "authType.action" passing in the email and password from
    //        the form data and assign to response variable
    const formData = new FormData(authForm);
    let response = null;
    if (authType === signInType) {
        response = await signInUser(formData.get('email'), formData.get('password'));
    } else {
        response = await signUpUser(formData.get('email'), formData.get('password'));
    }

    const error = response.error;

    if (error) {
        // display the error and reset the button to be active
        errorDisplay.textContent = error.message;
        authButton.disabled = false;
        authButton.textContent = buttonText;
    } else {
        // go back to wherever user came from
        // > Part A using "location", replace url with "redirectUrl"
        location.replace(redirectUrl);
    }
});
