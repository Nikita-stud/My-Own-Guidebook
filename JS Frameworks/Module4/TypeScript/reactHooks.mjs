//useState, useEffect, useContext

//1. useState
//TypeScript sees count as number type since useState default value is a number
//setCount as React.Dispatch<React.SetStateAction<number>>
const [count, setCount] = useState(0);

//to provide type use <Type>, this is in cases where default value is, {}[] null, undefined etc.
const [name, setName] = (useState < string) | (null > null); //// State 'name' can be a string or null initially
const [inputValue, setInputValue] = useState < string > 'John'; //useState will hold a string, now its John

//if we set a value, on change, react knows it happens on <input> tag (Type needs to know what element fires the event)
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setInputValue(event.target.value);
};

//Example
 interface ProductCategory {
id: string;
name: string;
}

const availableCategories: ProductCategory[] = [ //array of ProductCategory objects
  { id: 'cpu', name: 'Prosessorer' },
  { id: 'gpu', name: 'Skjermkort' },
  { id: 'ram', name: 'Minne (RAM)' },
];

//EXAMPLE FOR API RESPONSES
interface OldGame {
  id: number;
  name: string;
  released: string;
  genre: string[];
}

interface ApiResponse {
  data: OldGame[]; 
}
const [games, setGames] = useState<OldGame[]>([]); //<OldGame[]>telling TypeScript what kind of things will go INTO that array later. [] at the end — Initial Value

//ERROR TYPESCRIPT CHECK EXAMPLE: 
catch (e) {
  if (e instanceof Error) {   
    // TypeScript now KNOWS e is an Error object
    setError(e.message); // ✅ safe to access .message
  } else {
    // e was something weird like a string or number
    setError('An unknown error occurred'); // ✅ fallback
  }
}

//2.useEffect = perform side effects, like data fetching, subs, manual DOM changes
//TypeScript just checks that Cleanup Function is not wrong and does not return a value (Some side effects need to be cleaned up when the component disappears if you don't stop it, it keeps running even after the component is gone.)
//!!!You actually dont need to write any code for it mostly, it checks the useEffect in silence 

//3.useContext = consume values from React Context. When you create a context using React.createContext(), you can provide a default value
//type is a TypeScript keyword for creating a custom type — you're basically making up your own type and giving it a name
type Theme = 'lys' | 'mørk'; // Define the Types

//Theme can only be one of these two strings. Nothing else.
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
//Create the Context
export const ThemeContext = createContext<ThemeContextType>({
  theme: 'lys',
  toggleTheme: () => console.warn('no theme provider'),
});
//provider
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>('lys');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'lys' ? 'mørk' : 'lys'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}