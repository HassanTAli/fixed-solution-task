import axios from "axios";

const url = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const response = await axios.get(`${url}/users`);
  return response.data;
};
