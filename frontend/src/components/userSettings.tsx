import { formatName } from "../common/stringFunctions";

export const UserSettings = () => {
    const user = {
        firstName: 'Heike',
        lastName: 'Krueger'
    }
    return <div>Hallo, {formatName(user)}</div>
}
