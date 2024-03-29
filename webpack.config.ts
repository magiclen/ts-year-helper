import { Configuration } from "webpack";

import TerserPlugin from "terser-webpack-plugin";

const config: Configuration = {
    entry: "./src/lib.ts",
    output: {
        clean: true,
        filename: "year-helper.min.js",
        library: "YearHelper",
        libraryTarget: "umd",
    },
    plugins: [],
    module: {
        rules: [
            {
                test: /\.ts$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env", "@babel/preset-typescript"] },
                    },
                ],
            },
            {
                test: /\.js$/i,
                use: [
                    {
                        loader: "babel-loader",
                        options: { presets: ["@babel/preset-env"] },
                    },
                ],
            },
        ],
    },
    resolve: { extensionAlias: { ".js": [".ts", ".js"] } },
    optimization: {
        minimizer: [
            new TerserPlugin({
                extractComments: false,
                terserOptions: { format: { comments: false } },
            }),
        ],
    },
};

export default config;
