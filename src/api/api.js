import axios from 'axios';


const api = axios.create({
    baseURL: 'http://localhost:1234',
    headers: {'Content-type': 'aplication/json;charset=utf-8'}
  });


  api.interceptors.response.use((response) => {
    return [response.data, null]
  }, (error) => {
    return [null, error]
  });

  export function getTodos() {
      return api.get('./todos')
  }
  export function addTodo(todo) {
      console.log(todo);
    return api.post('./todos', todo)
}