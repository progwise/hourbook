
export interface IProjectListProps {
    selectedProjectId: number
    onProjectSelected: (projectId: number) => void
}

export const ProjectList = (props: IProjectListProps) => {

    console.log('ProjectList component was called');
    

    // 1. array with 3 example projects plus project TS type
    const projectData = [{
        id: 4711,
        name: 'TestProjekt1',
        start: new Date('1995-12-17T03:24:00'),
        end: new Date('1996-12-17T03:24:00')
    },
    {
        id: 4712,
        name: 'TestProjekt2',
        start: new Date('1995-12-17T03:24:00'),
        end: new Date('1996-12-17T03:24:00')
    },
    {
        id: 4713,
        name: 'TestProjekt3',
        start: new Date('1995-12-17T03:24:00'),
        end: new Date('1996-12-17T03:24:00')
    }];

    // 2. prop with selected project id

    // 3. column with active | future | archived


    const selectProject = (projectId: number) => {
        console.log('selectProject', projectId)
        props.onProjectSelected(projectId);
    }

    const renderProject = (project: any, index: number) => {
        if (props.selectedProjectId === project.id) {
            return (
                <tr key={index}>
                    <td>{project.id}</td>
                    <td>Selected! {project.name}</td>
                    <td>{project.start.toDateString()}</td>
                    <td>{project.end.toDateString()}</td>
                    <td></td>
                </tr>)
        }
        return (
            <tr key={index}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.start.toDateString()}</td>
                <td>{project.end.toDateString()}</td>
                <td>
                    <button onClick={() => selectProject(project.id)}>Select</button>
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
                projectData.map(
                    (value, index) => {
                        return renderProject(value, index)
                    }
                )
            }
        </tbody>
        <tfoot></tfoot>
    </table>
}