
//https://vimeo.com/1175106065/dbc45c54b8?share=copy&fl=sv&fe=ci

//when attaching event handler onClick, onChange DOM element in React, the handler function receives an event object
React.MouseEvent<ElementType> //For mouse events like onClick, onMouseDown, onMouseUp
React.ChangeEvent<ElementType> //For onChange events, typically on form elements <input>, <select>, <textarea>
React.FocusEvent<ElementType> // For onFocus and onBlur.
React.KeyboardEvent<ElementType> //For onKeyDown, onKeyUp, onKeyPress
React.FormEvent<ElementType> // For onSubmit on a <form> element. ElementType is typically HTMLFormElement.

//EXAMPLE: Button Click
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('Button clicked!', event.currentTarget);
    };
//or Instead of writing a separate function like const handleClick = () => {}, the function is written directly inside the JSX:
<button
  onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('Inline click on:', event.currentTarget.tagName);
    setCount((prev) => prev + 1);
  }}
></button>

//EXAMPLE: input value
const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // TypeScript knows event.target.value is a string for an input element
    setValue(event.target.value);
};
//EXAMPLE: onChange
<input
  type="text"
  value={name}
  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }}
  placeholder="Skriv navnet ditt..."
/>