import { IconType } from "react-icons/lib";
import { ResponsiveValue } from "styled-system";
import { Button } from "..";

export type IconButton = Button<{
    icon: IconType;
    size?: ResponsiveValue<number | string>;
}>;
export const IconButton: IconButton = ({
    icon: Icon,
    size,
    width = "1em",
    height = "1em",
    ...props
}) => (
    <Button {...{ width, height, fontSize: size, ...props }}>
        <Icon fontSize=".5em" />
    </Button>
);

IconButton.defaultProps = {
    borderRadius: "25%",
    size: "2.5em",
    // height: "2.5em",
    // width: "2.5em"
};
