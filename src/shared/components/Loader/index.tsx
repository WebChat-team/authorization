// imports =================================================== //
import styles from "./index.module.css";

// main ====================================================== //
const Loader = () => {

    return (
        <span
            className={
                `${styles.loader}
                material-symbols-outlined`
            }
        >
            refresh
        </span>
    );

}

// exports ================================================== //
export default Loader;