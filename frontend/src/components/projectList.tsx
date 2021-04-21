import {IProject} from "../interfaces/iProject";

export interface IProjectIdProps {
    project: IProject
    onProjectSelected: (project: IProject) => void
}

export const ProjectList = (props: IProjectIdProps) => {

    const projectData: IProject[] = [
        {
            id: 1,
            name: "P1",
            start: new Date("2000-07-01"),
            status: "active",
        }, {
            id: 2,
            name: "P2",
            start: new Date("2005-05-01"),
            status: "on hold",
        }, {
            id: 3,
            name: "P3",
            start: new Date("2012-011-13"),
            status: "canceled",
        }
    ]

    const selectProject = (project: IProject) => {
        props.onProjectSelected(project)
    }

    const renderProject = (project: IProject, index: number) => {

        if (props.project.id === project.id) {
            return (
                <tr key={index}>
                    <td><b>{project.id}</b></td>
                    <td><b>{project.name}</b></td>
                    <td><b>{project.start.toDateString()}</b></td>
                    <td><b>{project.status}</b></td>
                    <td></td>
                </tr>
            )
        }
        return (
            <tr key={index}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.start.toDateString()}</td>
                <td>{project.status}</td>
                <td>
                    <button onClick={() => selectProject(project)}>Select</button>
                </td>
            </tr>
        )
    }

    return <table>
        <thead>
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Start</th>
            <th>Ende</th>
            <th>Select</th>
        </tr>
        </thead>
        <tbody>
        {
            projectData.map((project, index) => {
                return renderProject(project, index);
            })
        }
        </tbody>
        <tfoot></tfoot>
    </table>
}