import {useContext} from "react"
import {projectContext} from "./projectContext"

export const useProjectContext = () => {

    const contextData = useContext(projectContext)

    return contextData
}
