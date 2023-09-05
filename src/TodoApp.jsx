import { useState } from "react";
import { useGetTodoByIDQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  // const {data: todos=[], isLoading} = useGetTodosQuery();
  const [todoID, setTodoID] = useState(1)
  const {data: todo, isLoading} = useGetTodoByIDQuery(todoID);
  console.log(todo)

  const nextTodo = () => setTodoID(todoID + 1)

  const prevTodo = () => {
    if(todoID === 1) return;
    setTodoID(todoID - 1)
  }

  return (
    <>
      <h1>Todos - RTL Query</h1>
      <hr />

      <h4>isloading: { isLoading ? 'true' : 'false' } </h4>

      <pre>{JSON.stringify(todo)}</pre>

      {/* <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))
        }
      </ul> */}
      <button onClick={prevTodo}>
        Prev Todo
      </button>
      <button onClick={nextTodo}>
        Next Todo
      </button>
    </>
  )
}
