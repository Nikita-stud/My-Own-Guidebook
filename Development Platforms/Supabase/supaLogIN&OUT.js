//Handling logout
<button id="logout-btn">Logout</button>;
//in js/posts.js (logout code is in supaHomePage.js )
const logoutBtn = document.querySelector('#logout-btn');
logoutBtn.addEventListener('click', logout);

//LOGIN
import { supabase } from './supabase.js';

const loginForm = document.querySelector('form');

loginForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const email = form.email.value.trim();
  const password = form.password.value;

  try {
    //authenticate user with email and password
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      // handler error
    }

    if (data.user) {
      console.log('user', data.user);
      console.log('session', data.session);
      // location.href = "/";
    }
  } catch (error) {
    // handler error
  }
});
