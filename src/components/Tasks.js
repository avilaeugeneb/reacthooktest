import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v4'

import { readStoreTasks, storeTasks } from '../helpers/localStore'

const Tasks = () => {
  const storedTasks = readStoreTasks()
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState(storedTasks.tasks)
  const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks)

  const updateTaskText = (e) => {
    setTaskText(e.target.value)
  }

  const addTask = () => {
    if (taskText) {
      setTasks([...tasks, { taskText, id: uuid() }])
    }
  }

  const completeTask = completedTask => {
    setCompletedTasks([...completedTasks, completedTask])
    setTasks(tasks.filter(task => task.id !== completedTask.id))
  }

  const deleteTask = taskToDelete => {
    setCompletedTasks(completedTasks.filter(task => task.id !== taskToDelete.id))
  }

  const handleKeyPress = e => {
    if (e.key === 'Enter' && taskText) {
      addTask(taskText)
    }
  }

  useEffect(() => {
    storeTasks({ tasks, completedTasks })
    setTaskText(' ')
  }, [tasks, completedTasks])

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
