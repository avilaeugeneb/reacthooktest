import React, { useState, useReducer } from 'react'
import uuid from 'uuid/v4'

import { readStoreTasks, storeTasks } from '../helpers/localStore'

const TYPES = {
  ADD_TASK: 'ADD_TASK',
  COMPLETE_TASK: 'COMPLETE_TASK',
  DELETE_TASK: 'DELETE_TASK'
}
const initialTasksState = readStoreTasks()
const taskReducer = (state = initialTasksState, action) => {
  let newState
  switch (action.type) {
    case TYPES.ADD_TASK:
      newState = {
        ...state,
        tasks: [...state.tasks, action.task]
      }
      break
    case TYPES.COMPLETE_TASK:
      const { completedTask } = action
      newState = {
        ...state,
        completedTasks: [...state.completedTasks, completedTask],
        tasks: state.tasks.filter(task => task.id !== completedTask.id)
      }
      break
    case TYPES.DELETE_TASK:
      const { taskToDelete } = action
      newState = {
        ...state,
        completedTasks: state.completedTasks.filter(task => task.id !== taskToDelete.id)
      }
      break
    default:
      newState = state
  }

  storeTasks(newState)
  return newState
}

const Tasks = () => {
  const [taskText, setTaskText] = useState('')

  const [state, dispatch] = useReducer(taskReducer, initialTasksState)
  const { tasks, completedTasks } = state

  const updateTaskText = (e) => {
    setTaskText(e.target.value)
  }

  const addTask = () => {
    if (taskText.trim()) {
      const newId = uuid()
      dispatch({ type: TYPES.ADD_TASK, task: { taskText, id: newId } })
    }
  }

  const completeTask = completedTask => {
    dispatch({ type: TYPES.COMPLETE_TASK, completedTask })
  }

  const deleteTask = taskToDelete => {
    dispatch({ type: TYPES.DELETE_TASK, taskToDelete })
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && taskText) {
      addTask(taskText)
    }
  }

  return (
    <div>
      <h3>Tasks</h3>
      <div className='form'>
        <input value={taskText} onChange={updateTaskText} onKeyPress={handleKeyPress} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task-list'>
        {
          tasks.map(task => (
            <div key={task.id} onClick={() => completeTask(task)}>
              {task.taskText}
            </div>
          ))
        }
      </div>
      <div className='completed-list'>
        {
          completedTasks.map(task => (
            <div key={task.id}>
              {task.taskText}
              {' '}
              <span className='delete-task' onClick={() => deleteTask(task)}>X</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Tasks
