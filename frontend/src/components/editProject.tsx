import { useState } from "react"
import { IProject } from "../common/definitions"

export interface IEditProjectProps  {
    selectedProject: IProject
}

export const EditProject = (props: IEditProjectProps) => {

    const [projectId, setProjectId] = useState(props.selectedProject.id)
    const [projectName, setProjectName] = useState(props.selectedProject.name)
    const [projectStart, setProjectStart] = useState(props.selectedProject.start)
    const [projectEnd, setProjectEnd] = useState(props.selectedProject.end)

    return <form>
        <label>
            Project id
            <input name="pid" type="text" value={projectId} onChange={(event) => setProjectId(parseInt(event.target.value))} />
        </label>
        <label>
            Project name
            <input name="pname" type="text" defaultValue={projectName} onChange={(event) => setProjectName(event.target.value)}  />
        </label>
        <label>
            Project start
            <input name="pstart" type="text" defaultValue={props.selectedProject.start?.toLocaleTimeString()} />
        </label>
        <label>
            Project end
            <input name="pend" type="text" defaultValue={props.selectedProject.end?.toLocaleTimeString()} />
        </label>
        <button type="submit">Submit</button>
    </form>
}