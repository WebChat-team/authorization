"use client";

// imports ================================================== //
import Button from "@/shared/components/Button";
import { useContext, useRef } from "react";
import styles from "./index.module.css";
import { AppearanceProviderContext } from "@/app/providers/AppearanceProvider";

// main ===================================================== //
const SwitchColorTheme = () => {

	const { isLightTheme, setTheme } = useContext(AppearanceProviderContext);
    
	return (
			<button
                className={styles.container_swtich}
                onClick={() => setTheme(!isLightTheme)}
            >
				<span
                    style={{ left: `${isLightTheme ? "-" : "+"}20px` }}
                    className={`${styles.switch} material-symbols-outlined`}
                >
					{isLightTheme ? "light_mode" : "dark_mode"}
				</span>
			</button>
	);
    
};

// export =================================================== //
export default SwitchColorTheme;
