/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef, useEffect, useRef, useMemo } from "react";
import Box from "../Box";
import Icon from "../Icon";
import ControlBox from "../ControlBox";
import VisuallyHidden from "../VisuallyHidden";

import useCheckboxStyle from "./styles";

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

const Checkbox = forwardRef(
    (
        {
            id,
            name,
            value,
            "aria-label": ariaLabel,
            "aria-labelledby": ariaLabelledBy,
            variantColor = "blue",
            defaultIsChecked,
            isChecked,
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
            iconColor,
            iconSize = "10px",
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
                cursor={isDisabled ? "not-allowed" : "pointer"}
                {...rest}
            >
                <VisuallyHidden
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
                            ? Boolean(isChecked)
                            : defaultIsChecked
                            ? undefined
                            : isChecked
                    }
                    disabled={isDisabled}
                    readOnly={isReadOnly}
                    aria-readonly={isReadOnly}
                    aria-invalid={isInvalid}
                    aria-checked={isIndeterminate ? "mixed" : isChecked}
                />
                <ControlBox opacity={isReadOnly ? 0.8 : 1} {...styleProps}>
                    <Icon
                        name={isIndeterminate ? "minus" : "check"}
                        size={iconSize}
                        color={iconColor}
                        transition="transform 240ms, opacity 240ms"
                    />
                </ControlBox>
                {children && (
                    <Box
                        ml={2}
                        fontWeight={600}
                        fontStyle="italic"
                        userSelect="none"
                        opacity={isDisabled ? 0.4 : 1}
                    >
                        {children}
                    </Box>
                )}
            </Box>
        );
    }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;