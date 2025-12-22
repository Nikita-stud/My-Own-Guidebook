/** fetch method only accept these values thus we need to be precise 
fetch(url, {
  method: 'GET',
  headers: { ... },
  body: { ... },
  mode: 'cors',
  credentials: 'include',
  // etc.
})
 */

// fetch('https://catfact.ninja/fact')
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//or

// async function fetchData() {
//   try {
//     const url = 'https://catfact.ninja/fact';
//     const method = { method: 'GET' };
//     const response = await fetch(url, method);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();

//body date is usually posted in the fetchData function
function authFetchMethod(method, body = null) {
  const options = {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer nqwodnoqwbdbqwbdbqwibduqowbfoqwubfoubqefqfdqwfdqwdfwqfw',
    },
  };
  if (body) {
    options.body = JSON.stringify(body);
  }
  return options;
}

async function fetchData() {
  try {
    const url = 'https://catfact.ninja/fact';

    const myData = {
      title: 'Hello',
      content: 'Boy',
    };

    const response = await fetch(url, authFetchMethod('POST', myData));
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
fetchData();

// import { API_KEY } from "../../constants/tokens.mjs";
// import { loadLocalStorage } from "../auth/loadLocalStorage.mjs";

// export function createAllowedDataRequest(method, data) {
//   return {
//     method: `${method}`,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${loadLocalStorage("token")}`,
//       "X-Noroff-API-Key": `${API_KEY}`,
//     },
//     body: JSON.stringify(data),
//   };
// }
