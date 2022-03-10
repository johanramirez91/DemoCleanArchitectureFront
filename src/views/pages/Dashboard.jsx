/* eslint-disable react/display-name */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getLoading } from '../../applicartion/selectors/ui'
import { getTodos } from '../../applicartion/selectors/todos'
import { pageLoaded } from '../../applicartion/actions/ui'
import { putTodo } from '../../applicartion/actions/todos'

const Dashboard = () => {
  const dispatch = useDispatch()
  const todos = useSelector(getTodos)
  const loading = useSelector(getLoading)

  useEffect(() => {
    dispatch(pageLoaded)
  }, [dispatch])

  return (
    <>
    <div className="container mt-3">
    <h1>Essential Todos</h1>
    {loading
      ? 'Loading todos...'
      : (
        <ul>
            {todos.map(todo => (
                <li
                    key={todo.id}
                    style={{
                      textDecoration: todo.completed ? 'line-through' : 'none',
                      cursor: 'pointer'
                    }}
                    onClick={() => dispatch(putTodo({ ...todo, completed: !todo.completed }))}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
        )}
        </div>
</>
  )
}

export default Dashboard
