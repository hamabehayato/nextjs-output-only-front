/**
 * TodoListTemplate
 *
 * @package components
 */
import { useTodoContext } from '../../../contexts/TodoContext'
import { useTodoListTemplate } from './useTodoListTemplate'
import { BaseLayout } from '@/components/organisms/BaseLayout'

export const TodoListTemplate = () => {
  const { originTodoList, deleteTodo } = useTodoContext()
  const [{ inputSearch, showTodoList }, { handleChangeSearch }] = useTodoListTemplate({
    originTodoList,
  })

  /**
   * TodoListTemplate
   * @returns {JSX.Element}
   * @constructor
   */
  return (
    <BaseLayout title={'TodoList'}>
      {/* TODO ここに要素追加していく */}
      <div></div>
    </BaseLayout>
  )
}
