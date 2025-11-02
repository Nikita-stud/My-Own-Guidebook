//1
interface User {
  id: number;
  username: string;
  email: string;
  createdAt: Date;
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  userId: string | number;
  createdAt: Date;
  dueDate?: Date;
}

interface Project {
  id: number;
  name: string;
  description: string;
  ownerId: string | number;
  todoIds: Todo[];
}

//2
function createUser(data: CreateUserData): User;

function getTodoByUser(userId: number): Todo[];

function updateTodoStatus( todoId: number, completed: boolean ): Todo;

function deleteProject(projectId: number): boolean;

//3
interface ApiResponse {
  status: number;
  success: boolean;
  data?: unknown;
  error?: string;
}

const response: ApiResponse = {
  status: 200,
  success: true,
  data: {
    id: 1,
    name: "Alex",
    email: "alex@example.com",
  },
};

const failedResponse: ApiResponse = {
  status: 404,
  success: false,
  error: "User not found"
};
const successfulData: ApiResponse {
  status: 200,
  success: true,
  data: [
    name: String,
  ]
}
const serverError: ApiResponse = {
  status: 500,
  success: false,
};

async function fetchData(): Promise<ApiResponse> 
{
  try{
    const fetched = await fetch('https://api.example.com/data', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseJson = await fetched.json();
    return responseJson;
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
};
