// imports ================================================== //
import styles from './index.module.css';
import type { Main as MainType } from './types';

// main ===================================================== // 
const Main: MainType = ({ children }) => {
    return (
        <div className={styles.main}>
            {children}
        </div>
    );
}

// export =================================================== //
export default Main;