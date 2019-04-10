/* global localStorage */
import { TASKS_STORAGE_KEY } from '../constants/keys'

export const storeTasks = (tasksObj) => {
  localStorage.setItem(
    TASKS_STORAGE_KEY,
    JSON.stringify(tasksObj)
  )
}

export const readStoreTasks = () => {
  return JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || { tasks: [], completedTasks: [] }
}
