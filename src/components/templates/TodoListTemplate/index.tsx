/**
 * TodoListTemplate
 *
 * @package components
 */
import { useTodoContext } from '@/contexts/TodoContext'
import { useTodoListTemplate } from './useTodoListTemplate'
import { BaseLayout } from '@/components/organisms/BaseLayout'
import { InputForm } from '@/components/atoms/InputForm'

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
      <section>
        <InputForm
          value={inputSearch}
          placeholder={'Search Key Word'}
          onChange={handleChangeSearch}
        />
      </section>

      {/* {showTodoList.length > 0 && <TodoList showTodoList={showTodoList} deleteTodo={deleteTodo} />} */}
    </BaseLayout>
  )
}
