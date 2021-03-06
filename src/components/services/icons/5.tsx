import { useContext } from "react"
import { ThemeContext } from '../../../App';

export const ServerEquipment = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect x="2" y="17" width="20" height="3" rx="1" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" />
            <rect x="3" y="5" width="18" height="12" rx="1" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" />
            <path d="M14 5.5L10 5.5" stroke={theme === "light" ? "black" : "white"} strokeWidth="2.5" strokeLinecap="round" />
        </svg>
    )
}