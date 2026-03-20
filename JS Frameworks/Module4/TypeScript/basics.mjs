//WHAT I LEARNED
// .tsx = when TypeScript with JSX syntax present from React
// .ts = when only TypeScript

//to create Typescript and react using Vite
npm create vite@latest my-react-ts-app -- --template react-ts


//1.Basic check
//Also since we specified what name is, if we were to add a method to it, it would show only the right methods available to strings
function tryHard(name: string, hour: number){
  console.log(name, hour)
}

//2.Check Objects for right data
//Also objects show exactly what is in them when you try and reference a name or so
interface ContactData{
  name: String;
  age: number
  isPremiumUser?: boolean; // Optional prop
}
const contactObject:ContactData = {
  name: "Bob",
  age: 10,
}

//3.Returning value should be nothing
//Also can be string, or what not.
function tryHard(name: string, hour: number):void{
  console.log(name, hour)
}

//4.Can be either or
function tryHard(a: string | number, b: number):void{
  console.log(a, b)
}

//4.5 since a and b are destructured from an Object, we need to specify as an object 
function tryHard({a, b}: { a: string | number; b: string } ):void{
  console.log(a, b)
}

//5.Generic type
//We are not yet sure if we want to use a string or number as a
//But the first value passed in will be the one used 
function tryHard<T>(a: T, b: number):void{
  console.log(a, b)
}
tryHard<string>("name", 10) //the first parsed in value will be a string

//5.5 Example
interface FormData{
  name: string;
  subject: string;
}
const [formData, setFormData]=useState<FormData>({name: "", subject: ""}) //the use state will check and also have a initial value of stuff it checks

//6.Event Types
//Is used to specify what even this will be happening on, good to tell it is a form, drop down, input. All of them do different stuff
const handleChange={e: ChangeEvent<HTMLInputElement>}

//7.Making my own rules,you can then add them to my interface
//This one below would check a select option of 3 values only
interface FormData{
  name: string;
  subject: string;
  area: query;
}

type query = "bob" | "ross" | "loz"

//8.Children =whatever you put between the opening and closing tags of a component
//React.ReactNode is telling that p and button are also present
interface CardProps {
  title: string;
  children: React.ReactNode; // Type for children
}

<Card title="My Card">
  <p>This is the children</p>   // ← this is children
  <button>Click me</button>     // ← this is children
</Card>

function Card({ title, children }: CardProps) {
  return{}
}


//React.FC = would be same but old way of writing typescript without it
//DO NOT THINK ABOUT THIS ONE
import { FC } from 'react';

interface MyComponentProps {
  name: string;
}

const MyComponent: FC<MyComponentProps> = ({ name, children }) => {
  return (
    <div>
      <p>Hello, {name}!</p>
      {children && <div>{children}</div>} {/* children is implicitly available with React.FC */}
    </div>
  );
};