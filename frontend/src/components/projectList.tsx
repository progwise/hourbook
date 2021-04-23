import {useHistory} from "react-router-dom";
import {IProject} from "../common/definitions";
import {useProjectContext} from "../common/useProjectContext";

export const ProjectList = () => {

    const { projectList, selectedProject, selectProject } = useProjectContext()
    const { push } = useHistory()

    const editProject = (project: IProject) => {
        selectProject(project)
        push('/projects/edit')
    }

    const renderProject = (project: IProject, index: number) => {
        return (
            <tr key={index} className={index % 2 ? 'bg-gray-100' : 'bg-white'}>
                <td className="text-left py-3 px-1">{project.id}</td>
                <td>Selected! {project.name}</td>
                <td>{project.start?.toLocaleDateString()}</td>
                <td>{project.end?.toLocaleDateString()}</td>
                <td>
                    {selectedProject?.id === project.id
                        ? <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded" onClick={() => { editProject(project) }}>Edit</button>
                        : <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded" onClick={() => { selectProject(project) }}>Select</button>
                    }
                </td>
            </tr>)
    }

    return (
        <div className="min-w-full shadow overflow-hidden rounded border-b border-gray-200">
            <table className="min-w-full bg-white">
                <thead className="bg-gray-600 text-white font-normal">
                    <tr>
                        <th className="text-left  py-3 px-1">No</th>
                        <th className="text-left  py-3 px-1">Name</th>
                        <th>Start</th>
                        <th>Ende</th>
                        <th></th>
                    </tr>   
                </thead>
                <tbody className="text-gray-700">
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
