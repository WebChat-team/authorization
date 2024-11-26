"use client";

// imports ================================================== //
import Button from "@/shared/components/Button";
import styles from "./index.module.css";
import { useState, useContext } from "react";
import type { MouseEventHandler } from "react";
import type { VisiblePasswordInput as VisiblePasswordInputType } from "./types";
import { InputFormContext } from "@/shared/components/InputForm";

// main ===================================================== //
const VisiblePasswordInputForm: VisiblePasswordInputType = ({ onClick }) => {

	const { InputRef, setInputProps } = useContext(InputFormContext);
	const [isVisible, setIsVisible] = useState(InputRef.current?.type === "password");

	const handleClick: MouseEventHandler = (event) => {
		if (onClick) onClick(event);
		setIsVisible(!isVisible);
		setInputProps({ type: isVisible ? "password" : "text" })
	}

	return (
		<Button
			type="button"
			level="tertiary"
			className={styles.button}
			onClick={handleClick}
		>
			<span className={`${styles.icon} material-symbols-outlined`}>
				{ isVisible ? "visibility" : "visibility_off" }
            </span>
		</Button>
	);

};

// export =================================================== //
export default VisiblePasswordInputForm;
