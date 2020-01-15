import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import url from "rollup-plugin-url";
import typescript from "rollup-plugin-typescript2";
import svgr from "@svgr/rollup";

import pkg from "./package.json";

export default {
    input: "src/index.ts",
    output: [
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true
        },
        {
            file: pkg.module,
            format: "es",
            sourcemap: true
        }
    ],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        commonjs(),
        resolve(),
        typescript({
            objectHashIgnoreUnknownHack: true,
            check: false
        }),
        external(),
        postcss({
            modules: true
        }),
        url(),
        svgr()
    ]
};
