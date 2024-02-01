import React from "react";
import '../styles/Button.scss'

const Button = ({ btnUseYN, buttonSize, buttonColor, buttonName, action } : any) => {
    return (
        <button
            onClick={() => action()}
            disabled={btnUseYN}
            className={`${buttonSize} ${buttonColor}`}
        >
            {buttonName}
        </button>
    );
}

export default Button;