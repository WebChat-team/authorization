"use client";

// imports ================================================== //
import styles from "./index.module.css";
import NavLink from "./components/Link";
import type { MouseEvent } from "react";
import { useRef } from "react";

// main ===================================================== //
const NavMenu = () => {

	const refInput = useRef<HTMLInputElement>(null);
	const refBurger = useRef<HTMLLabelElement>(null);

	function handleClick(event: MouseEvent) {

		const target = event.target as HTMLElement;

		if (
			refInput.current &&
			refInput.current.checked &&
			target.tagName === "A"
		) {
			refInput.current.click();
		}

	}

	return (
		<>
			<input
				ref={refInput}
				id={styles.toggle}
				type="checkbox"
				hidden
			/>
			<label
				ref={refBurger}
				className={styles.container_switch}
				htmlFor={styles.toggle}
			>
				<span className={styles.switch}></span>
			</label>
			<nav className={styles.nav} onClick={handleClick}>
				<NavLink href="/login">
                    Вход в аккаунт
                </NavLink>
				<NavLink href="/register">
                    Создание аккаунта
                </NavLink>
			</nav>
		</>
	);

};

// export =================================================== //
export default NavMenu;
