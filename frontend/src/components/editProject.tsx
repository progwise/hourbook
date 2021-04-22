import { useState } from "react"
import { IProject } from "../common/definitions"
import { useProjectContext } from "../common/useProjectContext"

export const EditProject = () => {

    const { selectedProject } = useProjectContext()

    if (!selectedProject) {
        return <div>No project selected</div>
    }

    return <form key={selectedProject.id}>
        <label>
            Project id
            <input name="pid" type="text" defaultValue={selectedProject.id} />
        </label>
        <label>
            Project name
            <input name="pname" type="text"  defaultValue={selectedProject.name}   />
        </label>
        <label>
            Project start
            <input name="pstart" type="text" defaultValue={selectedProject.start?.toLocaleTimeString()} />
        </label>
        <label>
            Project end
            <input name="pend" type="text" defaultValue={selectedProject.end?.toLocaleTimeString()} />
        </label>
        <button type="submit">Submit</button>
    </form>
}