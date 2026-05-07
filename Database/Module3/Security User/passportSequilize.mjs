Username; // Will be used to log in. We don’t want two identical user names, so we made this field unique.
Salt; // Will be used for password encryption.
EncryptedPassword; // Password stored in a secure way.
Role; // String describing the user’s role; it can be either “User” or “Admin”. All users created from the application view will be normal users, so we set up the “User” value as the default one here.

//roles should be stored in sessions,
//1. we check if role should be able to access the endpoint and then filter dagta if needed
passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    cb(null, { id: user.id, username: user.Username, role: user.Role });
  });
});

//update manually in sql?
UPDATE Users
SET Role='Admin'
WHERE Username = 'admin'
