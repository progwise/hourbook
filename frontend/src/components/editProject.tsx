import { useState } from "react"
import { IProject } from "../common/definitions"

export interface IEditProjectProps  {
    selectedProject: IProject
}

export const EditProject = (props: IEditProjectProps) => {

    return <form key={props.selectedProject.id}>
        <label>
            Project id
            <input name="pid" type="text" defaultValue={props.selectedProject.id} />
        </label>
        <label>
            Project name
            <input name="pname" type="text"  defaultValue={props.selectedProject.name}   />
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