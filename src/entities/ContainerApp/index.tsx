// imports ================================================== //
import styles from './index.module.css';
import type { ContainerApp as ContainerAppType } from './types';

// main ===================================================== // 
const ContainerApp: ContainerAppType = ({ children }) => {
    return (
        <div className={styles.conatiner_app}>
            { children }
        </div>
    );
}

// export =================================================== //
export default ContainerApp;