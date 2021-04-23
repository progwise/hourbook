import { useHistory } from "react-router-dom";
import { IProject } from "../common/definitions";
import { isEven } from "../common/numberFunctions";
import { useProjects } from "../common/useProjectContext";


export const ProjectList = () => {

    const { selectedProject, selectProject, projectList } = useProjects()
    const { push } = useHistory()

    const editProject = (project: IProject) => {
        selectProject(project)
        push('/editProject')
    }

    const renderProject = (project: IProject, index: number) => {
        if (selectedProject?.id === project.id) {
            return (
                <tr key={index} className="bg-blue-200">
                    <td>{project.id}</td>
                    <td>Selected! {project.name}</td>
                    <td>{project.start?.toDateString()}</td>
                    <td>{project.end?.toDateString()}</td>
                    <td><button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => editProject(project)}>Edit</button></td>
                </tr>)
        }
        else {
            let bgColor = 'bg-gray-100'
            if(isEven(index)){
                bgColor = 'bg-gray-300'
            }
            return (
                <tr key={index} className={bgColor}>
                    <td>{project.id}</td>
                    <td>{project.name}</td>
                    <td>{project.start?.toDateString()}</td>
                    <td>{project.end?.toDateString()}</td>
                    <td>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={() => selectProject(project)}>Select</button>
                    </td>
                </tr>)
        }

    }

    return (<table className="table-auto border-collapse Cul border-blue-400 border border bg-gray-100">
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
    </table>)
}