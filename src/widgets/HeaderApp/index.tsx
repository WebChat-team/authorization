// imports ================================================== //
import Logo from "@/shared/components/Logo";
import styles from "./index.module.css";
import NavMenu from "@/features/NavMenu";

// main ===================================================== //
const HeaderApp = () => {
	return (
		<div className={styles.container_header}>
			<header className={styles.header}>
				<Logo hasName />
				<NavMenu />
			</header>
		</div>
	);
};

// export =================================================== //
export default HeaderApp;
