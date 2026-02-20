//GRID
//Bootstrap uses 12 column system
container; //grid with margins on sides
container - fluid; // full width layout
row; //has 1-12 sizes, if 13 then moves to next row, if less than 1 then empty
row - cols - 1; //sets 1 col per row
row - cols - sm - 2; //sets 2 col per row from small viewport size
col; //can be arranged into 1-12 sizes
col - sm - 1; //so that col is 1/12 from small viewport size and upwards

g - 5; //1-5 adds gutter (add in row)
g - sm - 5;
gx - 5; //horizontal gutter
gy - 5; //vertical gutter

order - 1; //left to right order, if none then first then 1
order - first;
order - last;

/* Create container, then a table like structure
 * So, container,row,col
 *
 *  <div class="container">
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div class="col bg-success">Column</div>
        <div class="col bg-warning">Column</div>
        <div class="col bg-primary">Column</div>
        <div class="col bg-secondary">Column</div>
      </div>
    </div>
 */

//FLEX
d - flex;
d - xl - flex;
d - inline - flex;
flex - row;
flex - row - reverse;
justify - content - start; //horizontally place items in row, end,center,between,around, evenly
align - items - center; //vertically place items, baseline in col, stretch,end,start

flex - fill; // siblings are same size as content inside
flex - grow; //fill available space
flex - shrink; //same as grow but only if necessary
flex - nowrap; //items can exceed size of container
flex - wrap; //items wrapped to no exceed size of container
flex - wrap - reverse; //same as above but in reverse order

//BUTTONS
btn - group; //div of btns
btn - group - sm; //all btn will be small
btn - group - vertical; //stacks btns on top of each other
btn; //all buttons need it and then build on it
btn - outline; //outline buttons (have white background)
btn - outline - danger; //red border and hover state
btn - lg; //size of button
btn - danger; //color of button
// IF link behaving like btn... <a role="button" class="btn btn-lg btn-orange">Button</button>

/* Other elements can look like button if added in html:
  data-bs-toggle="button"
*/

//NAVIGATION
nav; //nav div (build for simple nav links)
nav - item; //basically li
nav - link; //<a> link tag inside li, use active or disabled
nav - tabs; // nav shows as a tab(page selector)
nav - pills; // nav items shown as buttons (add to nav item)
nav - fill; //fill up horizontal space
nan - justify; // same amount of space for all children

dropdown; //to nav or li if you want a dropdown
dropdown - toggle; // to link to Btn or Link for dropdown to work
//data-bs-toggle="dropdown" HAVE TO ADD IT TO TOGGLE btn
dropdown - item; //item in dropdown menu
dropdown - divider; //like a line between items
justify - content - center; // nav is centred
justify - content - end; // nav always stays at the end
flex - column; // nav is vertical

navbar; //nav div (build for complex nav links, responsive header, collaps, dropdowns)
navbar - nav; //in ul, for the full-height and lightweight navigation;
navbar - expand - lg; //stack vertically from lg
navbar - light; //turns text dark because it think navbar background is light
navbar - brand; // logo that moves us to the home page;
navbar - toggler; // used to collapse our menu;
navbar - text; // adds vertically centred strings of text;
collapse;
navbar - collapse; // groups and hides navbar content by a parent screen size breakpoint.

/**
 *    <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Active</a>
        </li>
      </ul>
 */
/**
 *  <div class="dropdown">
      <button
        type="button"
        class="btn btn-primary dropdown-toggle"
        data-bs-toggle="dropdown"
      ></button>
      <div class="dropdown-menu">
        <a href="#" class="dropdown-item">Link 1</a>
        <a href="#" class="dropdown-item">Link 2</a>
        <a href="#" class="dropdown-item">Link 3</a>
      </div>
    </div>
 */

/**      </ul>
 *         <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-offset="0,0"
              href="#"
              role="button"
              aria-expanded="false"
              >Orders</a
            >
            <ul class="dropdown-menu">
              <li><a href="#" class="dropdown-item">Search</a></li>
              <li><a href="#" class="dropdown-item">Add</a></li>
              <li><a href="#" class="dropdown-item">Remove</a></li>
            </ul>
          </li>
        </ul>
 */

//CAROUSEL
//will change every 5s by default if
//you add data-bs-ride="carousel" to div tag
carousel; //make div carousel
carousel - inner; //inside of carousel
carousel - item; // single items or divs that will spin

slide; //slide on click
carousel - fade; //will auto fade img if added with slide to div
active; //display as first
//btn added to carousel but have to be outside of
//btn you add connection to carousel data-bs-target="#one" and where to slide data-bs-slide="prev"
carousel - control - prev; //add to btn to control back (add span to btn that has icon)
carousel - control - prev - icon; //icon left
carousel - control - next; //add to btn to control next
carousel - control - next - icon; //icon right

/**
 *    <div class="carousel slide" id="cc">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="" alt="" />
          </div>
          <div class="carousel-item">
            <img src="" alt="" />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          data-bs-target="#cc"
          data-bs-slide="prev"
          type="button"
        >
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button
          class="carousel-control-next"
          data-bs-target="#cc"
          data-bs-slide="next"
          type="button"
        >
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
 */

//TOASTS -push notification
toast; //div of pup up
toast - header; //header of pop up
toast - body; //text of pop ups
//toast("show") on btn click function on to make it pop

//FIGURES -basically img and text for figure element in HTML
figure;
figure - img; //the img itself
img - thumbnail; //rounded 1px border
img - fluid; //makes the img responsive (scale with parent width)
figure - caption; //
