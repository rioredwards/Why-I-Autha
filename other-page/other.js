/* Imports */
import '../auth/user.js';
import { signOutUser } from '../fetch-utils.js';

const signOutLink = document.getElementById('sign-out-link');

// > Part B: attach event listener to signOutLink that calls signOutUser
signOutLink.addEventListener('click', signOutUser());
