import { styles } from "../utils/motion";
const Footer = () => {
    return(
        <>
        <div className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
        <ul className="links">
            <a href="https://www.facebook.com"><li>Facebook</li></a>
        </ul>
    </div>
        </>
    )
}

export default Footer;
