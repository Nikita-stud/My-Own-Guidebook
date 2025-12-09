//if registering a new user we have the form and we gets its values
//in normal register.js file we have all that, then pass in the data to supabase and get back either error or data
//this will send an email to confirm to user email, when they verify email they can login
const { data, error } = await supabase.auth.signUp({
  email,
  password,
});
if (error) {
  // handler error
}
//my own check
if (data.user?.identities?.length === 0) {
  handleError('User already registered. Please log in.');
  return;
}
if (data.user) {
  // display a message to the user and redirect
  window.location.href = '/login.html';
}
