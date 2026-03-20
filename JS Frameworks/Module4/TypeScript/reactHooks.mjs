//useState, useEffect, useContext

//1. useState
//TypeScript sees count as number type since useState default value is a number
//setCount as React.Dispatch<React.SetStateAction<number>>
const [count, setCount] = useState(0);              // inferred as number
const [name, setName] = useState<string | null>(null); // explicit — starts null, becomes string
const [games, setGames] = useState<Game[]>([]);     // explicit — empty array needs a type

//2.useEffect — TypeScript mostly just checks your cleanup function returns nothing:

//3.useContext — you type the context when you create it:
interface ThemeContext {
  theme: 'light' | 'dark';
  toggle: () => void; //// a function that returns nothing
}
const ThemeContext = createContext<ThemeContext | undefined>(undefined); //this context holds ThemeContext data OR undefined


// custom hook with safety check
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be inside ThemeProvider'); // catches using it outside provider
  return context;
};

const { theme, toggle } = useTheme(); //use it in any component: fully typed, no undefined
