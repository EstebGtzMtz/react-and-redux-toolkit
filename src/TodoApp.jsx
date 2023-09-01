import { useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

  const {data: todos=[], isLoading, isFetching} = useGetTodosQuery();
  console.log({
    todos,
    isLoading,
    isFetching
  })

  return (
    <>
      <h1>Todos - RTL Query</h1>
      <hr />

      <h4>isloading: { isLoading ? 'true' : 'false' } </h4>
      <pre>...</pre>

      <ul>
        {
          todos.map(todo => (
            <li key={todo.id}>
              {todo.title}
            </li>
          ))
        }
      </ul>

      <button>
        Next Todo
      </button>
    </>
  )
}
