page.onload; //when user enters the page
page.onunload; // when user leaves the page.
page.onchange; //when content value changes
page.onmousedown; //when press mouse
page.onmouseup; //when we release the bouse
page.onclick; //on click
page.onfocus; // focused item

window.addEventListener('resize', function1); // on window resize
window.addEventListener('resize', () => myFunction('Matt'));

//if we set true or false, we specify which way to go with DOM tree
//by default it is set to false and thus if child is clicked it will run child assigned function and then parent assigned function
// basically from inside it goes out
//if true the clicked function will be the one run first, then do as false from inside out if nothing else specified
// basically from outside it goes in
z.addEventListener('click', () => {}, true);

// <form name="myForm" onsubmit="return validateForm()" method="post"
// !!! return onsubmit since that would stop the form from submitting regardless of outcome

document.forms['login-form']; //select if form has a name login-form
document.forms['login-form']['fname'].value; // select form named and then input named and its value

// <a hre="https:" class="bob">Visit me</a>
//a is ELEMENT NODE
//Visit me is TEXT NODE
//https:, bob are NODE VALUE

//DOM NODES!!!!!!!!!!!
document.createElement('p'); //create p
document.createTextNode('This is new.'); // same as innerText, just old way
p.textContent = ''; //Better version of createTextNode

z.appendChild(b); //append created element as child
z.insertBefore(b, c); //append as child of specific parent ( in z add b before c) if not specified then adds to end
document.body.appendChild(b); //could also do that

document.childNodes; // shows all children nodes in document inside html, basically only head, body
document.head.childNodes; //shows all children inside the head of the document
document.children; // return nodes that are not seen like comments
// div img:nth-child(2) {} select in a div img 2 img in CSS

/* LITTLE ANIMATION
<!DOCTYPE html>
<html>
  <style>
    #container {
      width: 400px;
      height: 400px;
      position: relative;
      background: yellow;
    }
    #animate {
      width: 50px;
      height: 50px;
      position: absolute;
      background-color: red;
    }
  </style>
  <body>
    <p><button onclick="myMove()">Click Me</button></p>
    <div id="container">
      <div id="animate"></div>
    </div>
    <script>
      function myMove() {
        let id = null;
        const elem = document.getElementById('animate');
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 50);
        function frame() {
          if (pos == 350) {
            clearInterval(id);
          } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
          }
        }
      }
    </script>
  </body>
</html>

*/
