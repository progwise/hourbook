import logo from '../logo.svg'
import { useState } from "react";


export const Logo = () => {
    const [newColor, setNewColor] = useState('white')
    const toggleColor = () => {
        if (newColor === 'white') {
            setNewColor('red')
        }
        else {
            setNewColor('white')
        }
    }

    const css = {
        backgroundColor: newColor,
        width: '200px'
    }
    return <div style={css}>
        <img src={logo} onClick={() => toggleColor()} />

    </div>
}
