/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef, useEffect, useRef, useMemo } from "react";
import Box from "../Box";
import Flex from "../layout/flex";
import ControlBox from "../ControlBox";
import VisuallyHidden from "../VisuallyHidden";
import { FiCheck } from "react-icons/fi";
import useCheckboxStyle from "./styles";

export interface ICheckbox {
    /**
     * id assigned to input
     */
    id?: string;
    /**
     * The name of the input field in a checkbox
     * (Useful for form submission).
     */
    name?: string;
    /**
     * The value to be used in the checkbox input.
     * This is the value that will be returned on form submission.
     */
    value?: string | number;
    /**
     * The color scheme of the checkbox.
     *
     * 🚨Note: This should be one of the color keys in the theme that has `100` - `900` color values (e.g.`green`, `red`).
     * @see http://chakra-ui.com/theme#colors
     */
    variantColor?: string;
    /**
     * If `true`, the checkbox will be initially checked.
     */
    defaultIsChecked?: boolean;
    /**
     * If `true`, the checkbox will be checked.
     * You'll need to pass `onChange` to update it's value (since it's now controlled)
     */
    isChecked?: boolean;
    /**
     * If `true`, the checkbox should take up the full width of the parent.
     */
    isFullWidth?: boolean;
    /**
     * The size (width and height) of the checkbox
     */
    size?: "sm" | "md" | "lg";
    /**
     * If `true`, the checkbox will be disabled
     */
    isDisabled?: boolean;
    /**
     * If `true`, the checkbox will be readonly
     */
    isReadOnly?: boolean;
    /**
     * If `true`, the checkbox is marked as invalid.
     * Changes style of unchecked state.
     */
    isInvalid?: boolean;
    /**
     * The callback invoked when the checked state of the `Checkbox` changes..
     */
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    /**
     * If `true`, the checkbox will be indeterminate.
     * This only affects the icon shown inside checkbox
     * and does not modify the isChecked property.
     */
    isIndeterminate?: boolean;
    /**
     * The children is the label to be displayed to the right of the checkbox.
     */
    children?: React.ReactNode;
}

export type CheckboxProps = ICheckbox & React.RefAttributes<HTMLInputElement>;

export const useForkRef = (refA, refB) => {
    return useMemo(() => {
        if (refA == null && refB == null) {
            return null;
        }
        return refValue => {
            setRef(refA, refValue);
            setRef(refB, refValue);
        };
    }, [refA, refB]);
};

export function setRef(ref, value) {
    if (typeof ref === "function") {
        ref(value);
    } else if (ref) {
        ref.current = value;
    }
}

const Checkbox: React.FC<CheckboxProps> = forwardRef(
    (
        {
            id,
            name,
            value,
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            variantColor = "blue",
            defaultIsChecked,
            checked,
            isFullWidth,
            size = 3,
            isDisabled,
            isInvalid,
            isReadOnly,
            onChange,
            onBlur,
            onFocus,
            isIndeterminate,
            children,
            // iconColor,
            // iconSize = "10px",
            ...rest
        },
        ref
    ) => {
        // Wrong usage of `variantColor` prop is quite common
        // Let's add a warning hook that validates the passed variantColor

        const styleProps = useCheckboxStyle({
            color: variantColor,
            size
        });

        const ownRef = useRef();
        const _ref = useForkRef(ownRef, ref);

        useEffect(() => {
            if (_ref.current) {
                _ref.current.indeterminate = Boolean(isIndeterminate);
            }
        }, [isIndeterminate, _ref]);

        return (
            <Box
                as="label"
                display="inline-flex"
                verticalAlign="top"
                fontSize={size}
                alignItems="center"
                width={isFullWidth ? "full" : undefined}
                // cursor={isDisabled ? "not-allowed" : "pointer"}
                {...rest}
            >
                <Box
                    //VHIDDEN
                    opacity={0}
                    position="absolute"
                    as="input"
                    type="checkbox"
                    aria-label={ariaLabel}
                    id={id}
                    ref={_ref}
                    name={name}
                    value={value}
                    onChange={isReadOnly ? undefined : onChange}
                    onBlur={onBlur}
                    onFocus={onFocus}
                    defaultChecked={isReadOnly ? undefined : defaultIsChecked}
                    checked={
                        isReadOnly
                            ? Boolean(checked)
                            : defaultIsChecked
                            ? undefined
                            : checked
                    }
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    aria-readonly={isReadOnly}
                    aria-invalid={isInvalid}
                    aria-checked={isIndeterminate ? "mixed" : checked}
                />
                <Flex
                    opacity={isReadOnly ? 0.8 : 1}
                    border="solid 2px"
                    height="1.25em"
                    fontWeight={800}
                    color={`${variantColor}.400`}
                    borderColor="neutral.500"
                    borderRadius={1}
                    width="1.25em"
                >
                    {checked ? <FiCheck strokeWidth={4} /> : ""}
                </Flex>
                {children && (
                    <Box
                        ml={2}
                        fontWeight={600}
                        // fontStyle="italic"
                        // userSelect="none"
                        opacity={isDisabled ? 0.4 : 1}
                    >
                        {children}
                    </Box>
                )}
            </Box>
        );
    }
);

// const Checkbox = () => <Box>Checkbox</Box>;

Checkbox.displayName = "Checkbox";

export default Checkbox;
