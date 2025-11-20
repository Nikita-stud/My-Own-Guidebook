//Cookies are text files in pc, since the browser shuts down access each time connection is shut down
//Cookies are stored in the browser!!!
//We can save info like that, cookies are stores in one text variable
//Thus we need to save a few datas, such as username
document.cookie =
  'username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/';

//DELETE - Expiration date has to be already expired
//old cookies are not overriden, just added to cookies object
//when saved, it is saved in the domain and all sub domains
//TIME - if non is specified then ends by the end of the session
//SECURE - only sends to secure
//HTTPONLy - to js can read it setting

/*
cookies can be read through EXPRESS
After key=value we end by ;
cookies no bigger than 4KB, total amount pr domain is 20+
cookies are decoded through URI -
browser sends data to server, server sends to database and gets a sessionID send back
to the browser
Next time  you enter, the cookie sends sessionID to the server and see if it is still valid
No longer needed email and login, if logged out, the sessionID is deleted in the server and expired in Browser
*/

//Best practice save thought encoding into URI language
let name = 'my name';
let value = 'John Smith';
document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(value); // my%20name=John%20Smith

//!!!Domains are all up to .com so: heath.site.bib.com is a domain and works from right to left!!!!
//To save for more domains, we can now access cookies from
//site.com in such as forum.site.com
document.cookie = 'user=John; domain=site.com';

//Cookies EXPIRE after session if no exp is set
// expires=Tue, 19 Jan 2038 03:14:07 GMT ....only this format allowed
document.cookie = 'user=John; expires=Tue, 19 Jan 2038 03:14:07 GMT';

//Cookies that MAX-AGE expire after seconds set
document.cookie = 'user=John; max-age=3600';

//Only https can access the cookies, since you can enter website from both http and https
document.cookie = 'user=John; secure';

//Protect from XSRF attacks, does not allow cookies send if redirected through a link
//So basically no cookies = no forgery if checked for cookies
//SO if I save a link of the website, the website will not recognize me and thus the strict is in action
document.cookie = 'user=John; samesite=strict; ';

//Allows get requests but not post
document.cookie = 'user=John; samesite=lax; ';

//APPENDIX : third party cookies
/*
 * If you load a banner or so from another page, it is possible
 * it will set a cookie send by that img in your browser
 * When visiting a different website with same img, it will track you
 * based on that cookie id.
 */
