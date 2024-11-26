// imports =================================================== //
import styles from "./index.module.css";
import src_logo from "./webchat_logo.svg";
import type { Logo as LogoType } from './types';
import Image from "next/image";

// main ====================================================== //
const Logo: LogoType = ({
    hasName,
    ...props
}) => {

    return (
        <a className={styles.logo} {...props} >
            <h1 className={styles.logo_name}>
                {hasName && "WebChat"}
            </h1>
            <Image
                className={styles.logo_icon}
                src={src_logo}
                alt="WebChat"
            />
        </a>
    );

}

// exports ================================================== //
export default Logo;