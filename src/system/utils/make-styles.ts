import { CSSObject } from "@styled-system/css";
import { ColorVariant } from "..";

export const makeStyles = <T extends string>(
    styleFunc: (variantColor: ColorVariant) => Record<T, CSSObject>
) => ({ variant, variantColor }: { variant: T; variantColor: ColorVariant }) =>
    styleFunc(variantColor)[variant];
