import { useRef } from "react";
import Input from "./Input";

type NewProjectProps = {
  onAdd: (project: Project) => void
}

export type Project = {
  id?: number
  title: string
  description: string
  dueDate: string
}

export default function NewProject({ onAdd }: NewProjectProps) {
  const title = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLTextAreaElement>(null)
  const dueDate = useRef<HTMLInputElement>(null)

  function handleSave() {
    const enteredTitle = title.current?.value
    const enteredDescription = description.current?.value
    const enteredDueDate = dueDate.current?.value

    if (!enteredTitle || !enteredDescription || !enteredDueDate) {
      return
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    })
  }

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950 cursor-pointer">Cancel</button>
        </li>
        <li>
          <button
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-500 hover:bg-stone-950"
            onClick={handleSave}
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" textarea />
        <Input ref={dueDate} type="date" label="Due Date" />
      </div>
    </div>
  )
}