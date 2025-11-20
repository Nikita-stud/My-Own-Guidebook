//https://learning.noroff.no/mod/book/view.php?id=23874&chapterid=111525#mod_book-chapter

//decodeURIComponent() decodes all URI components
//that were either stored by encodeURIComponent()
//decodes stuff like ? that would look
//like %3F%0D%0A in URI

function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    //If first char is empty, get rid of it
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    //when word found return it
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

/* cname = cookie name
 * cvalue = cookie value
 * exdays = expiration date
 *
 * All this values are merged into one single string
 * We then add our cookie to all cookies
 *
 */

function setCookie(cname, cvalue, exdays) {
  const d = new Date(Date.now() + exdays * 24 * 60 * 60 * 1000);
  /*CAN ALSO WRITE LIKE
   * setTime updates the d and getTime gets time now in milliseconds
   * if exdays is 7 then it expires in 7 days
   * d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
   */

  //toUTCString() turns it into allowed time for cookies
  let expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

//This will check if the username exists in getCookie,
//if not, we ask for the username, then save it in setCookie function
//username will be the name prompted and is saved for 30 days
function checkCookie() {
  let user = getCookie('username');
  if (user != '') {
    alert('Welcome again ' + user);
  } else {
    user = prompt('Please enter your name:', '');
    if (user != '' && user != null) {
      setCookie('username', user, 30);
    }
  }
}

//delete cookie by setting to session expired
function deleteCookie(name) {
  setCookie(name, '', {
    'max-age': -1,
  });
}

//My code for updating cookie each second
function updateCookie() {
  setInterval(() => {
    //The number I multiply by is the number of possible values I will get
    //0,1,2,4,5,6,7,8,9,10 -11 in total
    let randomNumber = parseInt(Math.random() * 11);
    //Set cookie through function by giving key,value and exp date
    setCookie('num', randomNumber, 30);
  }, 1000);
}
