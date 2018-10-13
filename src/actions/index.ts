export type VisibilityFilter = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE'

let nextTodoId = 0

export const addTodo = (text: string) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text: text
})

export const setVisibilityFilter = (filter: VisibilityFilter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter: filter
})

export const toggleTodo = (id: number) => ({
  type: 'TOGGLE_TODO',
  id: id
})

export const VisibilityFilters: Record<VisibilityFilter, VisibilityFilter> = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}
