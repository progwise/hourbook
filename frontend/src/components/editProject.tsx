import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { IProject } from "../common/definitions"


export interface IEditProjectProps {
    selectedProject: IProject
}

// type Inputs = {
//     pid: string,
//     pname: string,
//     pstart: Date,
//     pend: Date,
// };



export const EditProject = (props: IEditProjectProps) => {

    //const { register, handleSubmit, watch, formState: { errors }, reset } = useForm<IProject>({ defaultValues: props.selectedProject });
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
    const onSubmit = (data: any) => console.log(data);
    const now = new Date()
    let nowString = now.toString()
    console.log(nowString)


    console.log(watch("name"))
    useEffect(() => { reset() }, [props.selectedProject])

    // const [projectName, setProjectName] = useState(props.selectedProject.name)

    return <form key={props.selectedProject.id} onSubmit={handleSubmit(onSubmit)}>
        <label>
            Project id
        </label>
        <input defaultValue={props.selectedProject.id} type="number" {...register("id", { required: true })} />
        {errors.id && <span>This filed is required</span>}
        <label>
            Project name </label>
        <input defaultValue={props.selectedProject.name} type="string" {...register("name", { required: true })} />
        {errors.name && <span>This filed is required</span>}
        <label>
            Project start</label>
        <input type="date" defaultValue={props.selectedProject.start?.toISOString().substr(0, 10)} {...register("start")} />

        <label>
            Project end </label>
        <input type="date" defaultValue={props.selectedProject.start?.toISOString().substr(0, 10)} {...register("end")} />

        <button type="submit">Submit</button>
    </form>
}