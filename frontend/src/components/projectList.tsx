import {useHistory} from "react-router-dom";
import {IProject} from "../common/definitions";
import {useProjectContext} from "../common/useProjectContext";

export const ProjectList = () => {

    const { projectList, selectedProject, selectProject } = useProjectContext()
    const {push} = useHistory()

    const editProject = (project: IProject) => {
        selectProject(project)
        push('/projects/edit')
    }

    const renderProject = (project: IProject, index: number) => {
        if (selectedProject?.id === project.id) {
            return (
                <tr key={index}>
                    <td>{project.id}</td>
                    <td>Selected! {project.name}</td>
                    <td>{project.start?.toDateString()}</td>
                    <td>{project.end?.toDateString()}</td>
                    <td>

                    <button onClick={() => {
                        editProject(project)
                    }}>Edit</button>
                    </td>
                </tr>)
        }
        return (
            <tr key={index}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.start?.toDateString()}</td>
                <td>{project.end?.toDateString()}</td>
                <td>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => {
                        selectProject(project)
                    }}>Select</button>
                    </td>
            </tr>)

    }

    return (
<div className="container w-full">
 <table className="table-auto w-full">
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
    </div>
    )
    
   
}
