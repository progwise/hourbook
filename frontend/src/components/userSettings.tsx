export const UserSettings = () => {

    const loggedIn = false;

    const getElements = () => {
        if (loggedIn)
            return <div>Hallo, Michael</div>
    
        return <div>Not logged in</div>
    };

    return <div>{getElements()}</div>
}
