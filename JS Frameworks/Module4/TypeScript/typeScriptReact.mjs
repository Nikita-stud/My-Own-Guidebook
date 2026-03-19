//to create rypescript and react 
npm create vite@latest my-react-ts-app -- --template react-ts

//cd my-react-ts-app, npm install, npm install

//tsconfig.json has TypeScript compiler@
// .tsx files when TypeScript with JSX syntax present from React
// .ts files when only TypeScript

//src/types/props.ts
//1. Define the prop the component will accept
export interface GreetingProps {
  name: string;
   isPremiumUser?: boolean; // Optional prop
}
//2.Use it to check 
export function Greeting({ message }: GreetingProps) {
  return <h1>{message}, Velkommen!</h1>;
}
//or like this
export function UserWelcomeBanner({
  userName,
  unreadMessages,
  isPremiumUser,
}: UserBannerProps) {
  return (
    <div
      style={{ padding: '15px', border: '1px solid #ccc', margin: '10px 0' }}
    >
      <h2>God dag, {userName}!</h2>
      <p>You have {unreadMessages} unread messages.</p>
      {isPremiumUser && (
        <p style={{ color: 'gold' }}>Takk for at du er premium-medlem!</p>
      )}
    </div>
  );
}
    <div> //THIS IS WHRRE YOUD PASS IN THE DATA
      <UserWelcomeBanner
        userName="Ola Nordmann"
        unreadMessages={5}
        isPremiumUser={true}
      />
      <UserWelcomeBanner userName="Kari Dahl" unreadMessages={0} />
    </div>

//3. child props, (this prop can hold anything that React knows how to render.)
//lets say I had a Card that

interface CardProps {
  title: string;
  children: React.ReactNode; // Type for children(everything inside <Card>) else would throw error
}

function Card({title, children }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

<Card title="My Profile">
  <h1>Hello</h1>
  <p>Some text</p>
</Card>

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