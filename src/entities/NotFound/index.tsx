// imports ================================================== //
import styles from "./index.module.css";
import { SiteError as SiteErrorType } from "./types";

// main ===================================================== // 
const SiteError: SiteErrorType = ({ statusCode, title, description }) => {

    return (
        <div className={`${styles.container}`}>
            <span className={`${styles.status_code}`}>
                {statusCode}
            </span>
            <h2 className={`${styles.title}`}>
                {title}
            </h2>
            <p className={`${styles.description}`}>
                {description}
            </p>
        </div>
    );

}

// export =================================================== //
export default SiteError;