import React, { useEffect, useState } from 'react'

interface DataTodo {
  todos: {
    completed: boolean;
    id: number;
    todo: string;
    userId: number;
  }[];
  limit: number;
  skip: number;
  total: number;
};

export const App: React.FC = () => {

  const [name, setName] = useState('Alan');//useState<string>('Alan')
  const [isActive, setIsActive] = useState(false);
  //const [todosList, setTodosList] = useState<DataTodo[]>([]);//<Array<DataTodo>>
  const [todos, setTodos] = useState<DataTodo>();//<Array<DataTodo>>

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetch('https://dummyjson.com/todos');
      const result = await data.json();
      setTodos(result);
      console.log(result);
    }
    getTodos();
  });

  return (
    <div>{
      todos?.todos.map((todo) => {
        return <div key={todo.id}>{todo.todo}</div>
      })
    }</div>
  )
}