import { useCallback, useContext, useState } from "react"
import { mockedProjectList } from "../mocks/mockedProjectList"
import { IProject } from "./definitions"
import { projectContext } from "./projectContext"

export const useProjectContext = () => {

    const contextData = useContext(projectContext)

    return contextData
}