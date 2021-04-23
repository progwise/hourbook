import { prependOnceListener } from "process";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Interface } from "readline";
import { IProject } from "../common/definitions";
import { useProjects } from "../common/useProjectContext";


export const EditProject = () => {
    const { selectedProject, selectProject, projectList } = useProjects()
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const onSubmit = (data: IProject) => {
        console.log(data)
        selectProject(data)
    }

    return (<>
    <form onSubmit={handleSubmit(onSubmit)}>
        <label>Id: </label>
        <input type="text"  defaultValue={selectedProject?.id} {...register("id", {required: true})}/>
        <label>Name: </label>
        <input type="text" defaultValue={selectedProject?.name}  {...register("name")}/>

        <input type="submit" value="submit"/>
    </form>
    </>)

}