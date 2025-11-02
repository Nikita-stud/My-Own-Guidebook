//Adding safety to API responses by always knowing what will come back

//How the should look like
interface User {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
}

//How the response should look like
interface UserResponse {
  success: true;
  data: User;
}

//Response checked for type safety
const userResponse: UserResponse = {
  success: true,
  data: {
    id: 1,
    name: 'Sarah',
    email: 'sarah@example.com',
    createdAt: new Date(),
  },
};
