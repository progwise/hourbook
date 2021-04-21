import logo from '../cma_logo.png'
import {useState} from "react";

export const LogoGadget = () => {

    const [bgColor, setBgColor] = useState('white')
    const style = {backgroundColor: bgColor}

    return <div style={style}>
        <img src={logo} onMouseOver={() => setBgColor('red')} onMouseOut={() => setBgColor('white')}/>
    </div>
}