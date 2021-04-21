import { useEffect } from "react";

export const UserSettings = () => {

    const loggedIn = false;

    const getElements = () => {
        if (loggedIn) {
            return <div>Hallo, Michael</div>
        }
            
    
        return <div>Not logged in</div>
    };

    useEffect(() => {
        if (loggedIn) {
            document.title = 'Michaels hourbook'
        } else {
            document.title = 'Unknown hourbook'
        }
        
    }, [loggedIn] );

    return <div>{getElements()}</div>
}
