import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { IProject } from "../common/definitions";
import { useProjectContext } from "../common/useProjectContext";

export const ProjectList = () => {

    const { projectList, selectedProject, selectProject } = useProjectContext()
    const l = useLocation()

    const editProject = (project: IProject) => {
        selectProject(project)
        l.pathname = ''

    }

    const renderProject = (project: IProject, index: number) => {
        if (selectedProject?.id === project.id) {
            return (
                <tr key={index}>
                    <td>{project.id}</td>
                    <td>Selected! {project.name}</td>
                    <td>{project.start?.toDateString()}</td>
                    <td>{project.end?.toDateString()}</td>
                    <td></td>
                </tr>)
        }
        return (
            <tr key={index}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.start?.toDateString()}</td>
                <td>{project.end?.toDateString()}</td>
                <td>
                    <button onClick={() => {
                        selectProject(project)
                    }}>Select</button>
                    <button onClick={() => {
                        editProject(project)
                    }}>Edit</button>
                </td>
            </tr>)

    }

    return <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Start</th>
                <th>Ende</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {
                projectList.map(
                    (value, index) => {
                        return renderProject(value, index)
                    }
                )
            }
        </tbody>
        <tfoot></tfoot>
    </table>
}