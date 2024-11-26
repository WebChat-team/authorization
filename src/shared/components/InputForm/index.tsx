"use client";

// imports ================================================== //
import React, { InvalidEvent, useRef, useState } from "react";
import Input from "./components/Input";
import type { InputForm as InputFormType } from "./types";
import styles from "./index.module.css";
import type { PropsInput } from "@webchat_com/webchat_ui";
import getInputFormContext from "./constants/getInputFormContext";

// main ===================================================== //
const InputFormContext = getInputFormContext();
const InputForm: InputFormType = ({
    description,
    children,
    ...inputProps
}) => {

    const InputRef = useRef<HTMLInputElement>(null);
    const [addInputProps, setAddInputProps] = useState<PropsInput>({});
    const newInputProps = {...inputProps, ...addInputProps };

    function setInputProps(newProps: PropsInput) {
        setAddInputProps({
            ...addInputProps,
            ...newProps
        });
    }

    return (
        <label className={styles.label} >
            <span className={styles.description_input}>
                {description}
            </span>
            <Input ref={InputRef} {...newInputProps} />
            <div className={styles.actions_input}>
                <InputFormContext.Provider value={{ InputRef, setInputProps }} >
                    {children}
                </InputFormContext.Provider>
            </div>
        </label>
    );

};

// exports ================================================== //
export { default as validationInput } from "./constants/validationInput";
export { InputFormContext };
export default InputForm;