import { projectContext } from "./projectContextProvider"
import { useContext } from 'react'


export const useProjects =  () => {
    const contextData = useContext(projectContext)
    return contextData
}