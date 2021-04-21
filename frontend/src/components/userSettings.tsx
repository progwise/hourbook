import {formatName} from "../common/stringFunctions"

export const UserSettings = () => {

    const USER = {
        firstname: "C",
        lastname: "Ma"
    }

    return <div>Hallo, {formatName(USER)}</div>
}