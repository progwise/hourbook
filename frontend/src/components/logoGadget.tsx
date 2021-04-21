import logo from '../cma_logo.png'
import {useState} from "react";

export const LogoGadget = () => {

    const [newBgColor, setNewBgColor] = useState('white')
    const style = {backgroundColor: newBgColor}

    return <div style={style}>
        <img src={logo} onMouseOver={() => setNewBgColor('red')} onMouseOut={() => setNewBgColor('white')}/>
    </div>
}
