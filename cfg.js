const path = require("path")

module.exports = {
    entry: "./jsvindecode.js",
    mode: 'development',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    }
}