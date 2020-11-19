import axios from 'axios';

export async function getUsers() {
  const response = await axios.get(
    'http://localhost:4000/users'
  );
  return response.data;
}

export async function getUser(id) {
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return response.data;
}
