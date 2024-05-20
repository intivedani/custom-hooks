import { useEffect, useReducer } from 'react';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodos = () => {

    const [todos, dispatchTodo ] = useReducer(todoReducer, [], init);

     //leer esos todos y serializarlos
     useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ) )
      }, [todos])

      // aqui envio el payload
    const handleNewTodo = ( todo ) => {
        //action que quiero enviar a mi reducer, lo hago con el dispatch!!
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatchTodo(action);
    };

    const handleDeleteTodo = ( id ) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        //dispatchTodo(action);
    };

    const handleToggleTodo = ( id ) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        //dispatchTodo(action);
    }

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  }
   

}
