//GRID
//Bootstrap uses 12 column system
container;
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
 *    <div class="container">
 *      <div class="row">
 *        <div class="col bg-secondary">1 of 2</div>
 *        <div class="col-2 bg-primary">2 of 2</div>
 *      </div>
 *    </div>
 */

//FLEX
