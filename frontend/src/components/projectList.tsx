export interface IPropsProjectList {
    selecedProjectId?: number
}

export const ProjectList = (props: IPropsProjectList) => {

    // 1. array with 3 example projects plus project TS type
    const projectData = [{
        id: 1001,
        name: 'TestProjekt',
        start: new Date('2020-12-17T03:24:00'),
        end: new Date('2021-12-17T03:24:00'),
    },
    {
        id: 1002,
        name: 'TestProjekt2',
        start: new Date('2020-12-17T03:24:00'),
        end: new Date('2021-12-17T03:24:00'),
    },
    {
        id: 1003,
        name: 'TestProjekt3',
        start: new Date('2020-12-17T03:24:00'),
        end: new Date('2021-12-17T03:24:00'),

    }];

    // 2. prop with selected project id

    // 3. column with active | future | archived

    const renderProject = (project: any, index: number) => {
        if (props.selecedProjectId === project.id) {
            return (
                <tr key={index}>
                    <td>{project.id}</td>
                    <td>'Selected ' {project.name}</td>
                    <td>{project.start.toDateString()}</td>
                    <td>{project.end.toDateString()}</td>
                </tr>)
        }
        return (
            <tr key={index}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.start.toDateString()}</td>
                <td>{project.end.toDateString()}</td>
            </tr>)

    }

    return <table>
        <thead>
            <tr>
                <th>No</th>
                <th>Name</th>
                <th>Start</th>
                <th>Ende</th>
            </tr>
        </thead>
        <tbody>
            {
                projectData.map((value, index) => {
                    return renderProject(value, index)
                })
            }
        </tbody>
        <tfoot></tfoot>
    </table>
}