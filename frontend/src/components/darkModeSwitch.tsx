import { useState } from "react"

export const DarkModeSwitch = () => {

    const [isDarkMode, setIsDarkMode] = useState(false)

    function toggleTheme() {
        setIsDarkMode(!isDarkMode)
    }

    const classNamesDark = 'g-gray-700 translate-x-full'
    const classNamesLight = 'bg-yellow-500 -translate-x-2'
    const classNamesCommon = 'w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow'

    let classNames = isDarkMode ? classNamesDark : classNamesLight

    classNames = classNames + ' ' + classNamesCommon
    return (<button
        className="w-20 h-10 rounded-full bg-white flex items-center transition duration-300 focus:outline-none shadow"
        onClick={() => toggleTheme()}>
        <div
            id="switch-toggle"
            className={classNames}>
            {isDarkMode
                ? darkIcon
                : lightIcon
            }
        </div>
    </button>)
}


const darkIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>

const lightIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>
