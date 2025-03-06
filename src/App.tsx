import { useState } from "react"
import NewProject, { Project } from "./components/NewProject"
import NoProjectSelected from "./components/NoProjectSelected"
import ProjectsSidebar from "./components/ProjectsSidebar"

function App() {
  const [projectsState, setProjectsState] = useState<{
    selectedProjectId: number | null | undefined,
    projects: Project[]
  }>({
    selectedProjectId: undefined,
    projects: []
  })

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
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

  let content

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar onStartAddProject={handleStartAddProject} projects={projectsState.projects} />
      {content}
    </main>
  )
}

export default App
