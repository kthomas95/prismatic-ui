import React from "react";

interface ButtonProps {
    color?: string | number; //hello
}

export const Button: React.FC<ButtonProps> = ({ children, color }) => (
    <button>
        {children} {color}
    </button>
);

Button.defaultProps = {
    color: "red"
};
