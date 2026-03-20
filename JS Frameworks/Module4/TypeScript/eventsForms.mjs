
//https://vimeo.com/1175106065/dbc45c54b8?share=copy&fl=sv&fe=ci

//when attaching event handler onClick, onChange DOM element in React, the handler function receives an event object
React.ChangeEvent<HTMLInputElement>    // input onChange
React.ChangeEvent<HTMLSelectElement>   // select onChange
React.ChangeEvent<HTMLTextAreaElement> // textarea onChange
React.FormEvent<HTMLFormElement>       // form onSubmit
React.MouseEvent<HTMLButtonElement>    // button onClick
React.KeyboardEvent<HTMLInputElement>  // input onKeyDown

//In practice:
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value); // TypeScript knows .value exists
};

// form submit
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
};

// button click
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  console.log(e.currentTarget); // the button element
};

// enter key
const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
  if (e.key === 'Enter') handleSearch();
};

//Inline Event Handlers
//You can write it on the button instead but if you extract it, you need to specify
// explicit — you type it yourself even though it's inline
<button onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
  console.log(event.currentTarget);
}}></button>

// implicit — TypeScript infers it, no need to write the type
<button onClick={(event) => {
  console.log(event.currentTarget); // works exactly the same
}}></button>

//!!!since it is not on the button but extracted we need to specify
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setValue(e.target.value);
};

