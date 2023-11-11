/**
 * TodoListTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext'
import { useTodoTemplate } from './useTodoTemplate'

export const TodoListTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext()
  const [{ inputSearch, showTodoList }, { handleChangeSearch }] = useTodoTemplate({
    originTodoList,
  })

  /**
   * TodoListTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <div title={'TodoList'}>
      <h1>title</h1>
    </div>
  )
}
