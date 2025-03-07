import { useState } from "react"

export type Task = {
  id: number
  projectId: number
  text: string
}

type NewTaskProps = {
  onAdd(task: string): void
}

export default function NewTask({ onAdd }: NewTaskProps) {
  const [enteredTask, setEnteredTask] = useState<string>('')

  function handleChange(value: string) {
    setEnteredTask(value)
  }

  function handleClick() {
    if (enteredTask) {
      setEnteredTask('')
      onAdd(enteredTask)
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={(event) => handleChange(event.target.value)}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  )
}