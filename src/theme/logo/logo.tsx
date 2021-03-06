import { useContext } from "react"
import { ThemeContext } from '../../App';

export const Logo = ({position}) => {
    const { theme } = useContext(ThemeContext);

    const color = position === 'footer' ? 'white' : theme === "light" ? "black" : "white";

    return (
    <svg width="108" height="30" viewBox="0 0 108 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 25.3499V0.149902H5.832V25.3499H0Z" fill={color} />
        <path d="M10.1925 25.3499V21.5699L25.7805 2.7779L26.5005 4.9019H10.4805V0.149902H31.6845V3.9299L16.1325 22.7219L15.4125 20.5979H32.2245V25.3499H10.1925Z" fill={color} />
        <path d="M41.3288 10.3019H49.5V14.8379H41.3288V10.3019ZM41.7608 20.6699H80.968V25.3499H35.9648V0.149902H80.5V4.8299H41.7608V20.6699Z" fill={color} />
        <path d="M82.4823 25.3499L93.3183 10.4099V14.6579L82.9502 0.149902H89.5742L96.7383 10.2659L93.9663 10.3019L101.022 0.149902H107.358L97.0623 14.4059V10.2299L107.97 25.3499H101.238L93.8223 14.6579H96.4863L89.1783 25.3499H82.4823Z" fill={color} />
        <path fillRule="evenodd" clipRule="evenodd" d="M58.7942 16.3501L51 29.8501H66.5885L58.7942 16.3501ZM58.7942 22.3501L56.1962 26.8501H61.3923L58.7942 22.3501Z" fill={color} />
    </svg>

)}