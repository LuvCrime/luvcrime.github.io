import { useContext } from "react"
import { ThemeContext } from '../../../App';

export const OutstaffingIT = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="3.40426" cy="3.40426" r="3.40426" transform="matrix(-1 0 0 1 15.6162 5)" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" />
            <path d="M6.25488 16.8594C6.25488 16.1272 6.71518 15.474 7.40475 15.2277V15.2277C10.5136 14.1174 13.911 14.1174 17.0199 15.2277V15.2277C17.7095 15.474 18.1698 16.1272 18.1698 16.8594V17.979C18.1698 18.9896 17.2747 19.7659 16.2743 19.6229L15.9407 19.5753C13.4677 19.222 10.957 19.222 8.48393 19.5753L8.15038 19.6229C7.14995 19.7659 6.25488 18.9896 6.25488 17.979V16.8594Z" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" />
            <path d="M17.3194 11.9028C18.7966 11.9028 19.9941 10.7052 19.9941 9.22799C19.9941 7.75076 18.7966 6.55322 17.3194 6.55322" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M20.2491 18.0051L20.5111 18.0425C21.2972 18.1548 22.0005 17.5448 22.0005 16.7508V15.8711C22.0005 15.2958 21.6388 14.7826 21.097 14.5891C20.5565 14.3961 20.005 14.2458 19.4473 14.1382" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M6.68063 11.9028C5.2034 11.9028 4.00586 10.7052 4.00586 9.22799C4.00586 7.75076 5.2034 6.55322 6.68063 6.55322" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" />
            <path d="M3.75094 18.0051L3.48886 18.0425C2.70281 18.1548 1.99954 17.5448 1.99954 16.7508V15.8711C1.99954 15.2958 2.36121 14.7826 2.90301 14.5891C3.44346 14.3961 3.995 14.2458 4.55273 14.1382" stroke={theme === "light" ? "black" : "white"} strokeWidth="1.5" strokeLinecap="round" />
        </svg>

    )
}