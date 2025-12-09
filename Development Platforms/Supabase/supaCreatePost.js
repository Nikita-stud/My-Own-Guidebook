//have a form that creates posts and sends to supabase
//in Database > Tables > posts
//in homepage
import { supabase } from './supabase.js';
import { checkAuth, logout } from './auth.js';

checkAuth(); //check if user is logged in else redirect

//js/posts.js
const postForm = document.querySelector('form');

postForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const title = form.title.value.trim();
  const content = form.content.value.trim();

  try {
    //targets posts table, creates new row with data, user_id is added by RLS
    const { error } = await supabase.from('posts').insert([{ title, content }]);

    if (error) {
      // handle error
    }

    // display a success message

    form.reset();
  } catch (error) {}
});
