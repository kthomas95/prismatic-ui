/** @jsx jsx */
import { jsx, Global, css } from "@emotion/core";
import preflight from "./preflight";

const CSSReset = ({ config }) => {
    const configCSS = theme => {
        return css`
            html {
                line-height: 1.5;
            }

            /**
      * Allow adding a border to an element by just adding a border-width.
      */

            *,
            *::before,
            *::after {
                border-width: 0;
                border-style: solid;
            }

            input:-ms-input-placeholder,
            textarea:-ms-input-placeholder {
            }

            input::-ms-input-placeholder,
            textarea::-ms-input-placeholder {
            }

            input::placeholder,
            textarea::placeholder {
            }
        `;
    };

    return (
        <Global styles={theme => css([preflight(theme), configCSS(theme)])} />
    );
};

export default CSSReset;
