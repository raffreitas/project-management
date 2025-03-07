import { useState } from "react"
import NewProject, { Project } from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"
import ProjectsSidebar from "./components/ProjectsSidebar"
import SelectedProject from "./components/SelectedProject"
import { Task } from "./components/NewTask"

function App() {
  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: number | null | undefined,
    projects: Project[],
    tasks: Task[]
  }>({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  function handleAddTask(text: string) {
    const taskId = Math.random()
    const newTask = {
      id: taskId,
      projectId: projectsState.selectedProjectId!,
      text: text
    }
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask(id: number) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  function handleDeleteProject(id?: number) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(project => project.id !== id)
      }
    })
  }

  function handleSelectProject(id: number) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      }
    })
  }

  function handleAddProject(projectData: Project) {
    const projectId = Math.random()

    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: projectId
      }
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)

  let content = (
    <SelectedProject
      project={selectedProject}
      tasks={projectsState.tasks}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  )

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
        onSelectProject={handleSelectProject}
        selectedProjectId={selectedProject?.id}
      />
      {content}
    </main>
  )
}

export default App
