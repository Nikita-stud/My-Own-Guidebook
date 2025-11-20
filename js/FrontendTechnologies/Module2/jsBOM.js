//BOM is a way to access the browser instead of HTML
window.innerHeight; //The inner browser display height
window.outerHeight; //The full browser heigh
window.resizeTo(300, 200); //resize browser size
const newWindow = window.open(URL, name, specs, replace); //Store to be able to change it

//URL: optional
//NAME:
//_blank – URL is loaded in a new tab/window, the default value.
//_parent – URL is loaded into the parent frame.
//_self – URL replaces the current page.
//_top – URL replaces any frameset that may be loaded.
//name – the name of the window
//SPECS:  width=200, height= 100
//REPLACE: declared boolean, used to decide if to replace entry or not
window.close(); //closes the tab
window.moveTo(1, 999); //Move created new window
window.moveBy(); // modifies current window
window.resizeBy(); //modifies current one

//EXAMPLE
function openNewWindow() {
  const newWindow = window.open('', '_blank', 'width=300, height=300');
  setTimeout(() => {
    newWindow.resizeTo(600, 400);
    setTimeout(() => {
      let number = Math.random();
      newWindow.moveTo(number * 500, number * 500);

      setTimeout(() => {
        newWindow.close();
      }, 5000);
    }, 5000);
  }, 5000);
}

//Read only screen properties
window.screen; // to represent the screen you are on

//width
//height
//availWidth // width - Dev tools etc
//availHeight //height - Dev tools etc
//colorDepth //screens color depth
//pixelDepth //bit depth

//location /local URL
window.location.href; // get or set URL to new one
window.location.pathname; //current pathname in files
window.location.protocol; //web protocol page
window.location.port; //number of internet ports in current exchange
window.location.hostname; //127.0.0
window.location.assign(); //loads new doc

//History /browsers history
history.go(-2); //2 pages back or front
history.back(); //one back
history.forward(); // one page forward

//Navigating the waters
navigator.cookieEnabled; // returns the Boolean, true if cookies are enabled.
navigator.appName; // returns the browser name.
navigator.appCodeName; // returns the browser code name.
navigator.product; // returns the browser engine name.
navigator.appVersion; // returns the browser version.
navigator.userAgent; // returns browser user-agent header.
navigator.platform; // returns browser platform.
navigator.language; // returns browser language.
navigator.online; // returns the Boolean, true if the browser is online.
navigator.geolocation; // returns the geo-location object of the user’s location.
navigator.javaEnabled(); // returns the Boolean, true if Java is enabled.
