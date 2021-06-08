import React from "react";
import styles from "./FormsControls.module.css";

type FormControlParamsType = {
    input: React.ReactNode
    meta: {
        touched: boolean,
        error: string
    }
    child: React.ReactNode
}

const FormControl: React.FC<FormControlParamsType> = ({input, meta, child, ...props}) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input: React.FC<any> = (props) => {
    const {input, meta, child, ...restProps} = props
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}