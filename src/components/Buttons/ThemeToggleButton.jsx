import React from 'react';
import { useTheme } from '../../ThemeReactApp.jsx';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import SunnyIcon from '@mui/icons-material/Sunny';


const ThemeToggleButton = () => {
    const {theme, toggleTheme} = useTheme();

    return(
        <button
        onClick={toggleTheme}
        className='p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-400 transition-colors'
        arial-label={'Toggle Theme'}
        >
            {theme === 'light' ? (
                <BedtimeIcon/>
            ) : (
                <SunnyIcon/>
            )}
        </button>
    )
}
export default ThemeToggleButton;