import logo from '../logo.svg'
import { useState } from "react";
import { useHistory } from 'react-router';


export const Logo = () => {

    const { push } = useHistory()

    return <div className="w-20">
        <img className="scale-2" src={logo} onClick={() => push('/timebook')} />
    </div>  
}
