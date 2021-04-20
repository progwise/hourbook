import { formatName } from "../common/stringFunctions";

export const UserSettings = () => {
    const user = {
        firstName: 'Armin',
        lastName: 'Köllner'
      };    

    return <div>Hallo, {formatName(user)}</div>
}
