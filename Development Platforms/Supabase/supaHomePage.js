//check if user is logged in for home page access

import { supabase } from './supabase.js';

export async function checkAuth() {
  const {
    data: { user }, //what iis returned if logged in
  } = await supabase.auth.getUser();

  if (!user) {
    window.location.href = 'login.html';
  }

  console.log('user', user);
}

//For logging out, add to button
export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error('Error logging out:', error);
  }

  window.location.href = 'login.html';
}
