import { useState } from 'react';
import logo from '../logo.svg';

export const LogoGadget = () => {

    const [newColour, setNewColour] = useState('white')
    const toggleColour = () => {
        if (newColour === 'white') {
            setNewColour('red')
        }
        else {
            setNewColour ('white')
        }
    }

    const css = {
        backgroundColor: newColour,
        width: '100px'
    }
    return <div style={css}>
        <img src={logo} onClick = {() => toggleColour()}/>
        </div>
    
}