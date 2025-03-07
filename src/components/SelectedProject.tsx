import { Project } from "./NewProject"
import { Task } from "./NewTask"
import Tasks from "./Tasks"

type SelectedProjectProps = {
  project?: Project
  tasks: Task[]
  onDelete: (id?: number) => void,
  onAddTask: (task: string) => void,
  onDeleteTask: (id: number) => void
}

export default function SelectedProject({ project, tasks, onDelete, onAddTask, onDeleteTask }: SelectedProjectProps) {
  const formattedDate = new Date(project?.dueDate ?? new Date()).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })

  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{project?.title}</h1>
          <button
            className="text-stone-600 hover:text-stone-950 cursor-pointer"
            onClick={() => onDelete(project?.id)}
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project?.description}</p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  )
}