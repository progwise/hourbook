import logo from '../logo.svg'
import { useState } from "react"

export const LogoGadget = () => {
    const [newBgColor, setNewBgColor] = useState('white')
    const toggleColor = () => {
        if (newBgColor === 'white'){
            setNewBgColor('red')
        }
        else{
            setNewBgColor('white')
        }
    }
    
    const css = {
        backgroundColor: newBgColor,
        width: '200px'
    }

    return <div style={css}>
        <img src={logo} onClick={() => toggleColor()}/>
    </div>
}