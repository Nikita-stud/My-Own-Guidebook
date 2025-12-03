//For all Interface create a src/interfaces.ts: file
//Export all Interface when needed
export interface Animal {
  name: string;
}
export interface Dog extends Animal {
  breed: string;
}

//TYPES vs INTERFACE
//types have types.ts folders and file structure
//Interface uses extends for build on, Types use &
//Similar but used for different things I guess
type Animal = {
  name: string,
};
type Dog = Animal & {
  breed: string,
};
