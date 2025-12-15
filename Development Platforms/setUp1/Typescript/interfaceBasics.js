// TypeScript infers these types automatically
let age  = 25; // TypeScript knows this is number
let name = "Alex"; // TypeScript knows this is string
let isStudent = true; // TypeScript knows this is boolean

// NOT LIKE THIS
let age:number  = 25;
let name:string = "Alex"; 
let isStudent:boolean = true; 

string[] // Array of strings
number[] // Array of numbers
boolean[] // Array of booleans
null // Explicitly represents “no value” or “empty”
undefined // Variable is declared but hasn’t been assigned a value
any // Turns off TypeScript’s type checking completely
never // Represents values that never occur

//TypeScript Example (capital letter convention for interfaces)
interface UserProfile {
  id: number;
  name: string;
  email: string;
  avatarUrl?: string; // Optional - user might not have an avatar
  bio?: string; // Optional - user might not have a bio
  phoneNumber?: string; // Optional - user might not provide phone
}

//HOW TO USE
const user1: UserProfile = {
  id: 1,
  name: "Sarah",
  email: "sarah@example.com",
  // avatarUrl, bio, and phoneNumber are optional, so we can omit them
};

//NESTED OBJECTS and ARRAYS
interface SendProfile {
    name: string,
    email: string,
    password: string,
    createdAt: Date,
    //asks for a Objects inside an array from the user
    alreadySavedItems: Cart[];
    bio?: string,
    description?: string,
}

const myUser: SendProfile = {
    name: "Mark",
    email: "ninoindeoe",
    password:"idnsoenod",
    createdAt: new Date(),
    //Here we provide an array of objects that follow the Cart interface
    alreadySavedItems: [{item: "boss"}]
}


//EXTENTENDING INTERFACE
interface Post {
  id: number;
  title: string;
  content: string;
  user_id: number;
  created_at: string;
}

interface PostWithUser extends Post { //PostWithUser will have all posts stuff plus its own
  username: string;
  email: string;
}

//API RESPONSE SAFETY
interface UserResponse {
  success: true;
  data: User;
}
const userResponse: UserResponse = {
  success: true,
  data: {
    id: 1,
    name: 'Sarah',
    email: 'sarah@example.com',
    createdAt: new Date(),
  },
};
