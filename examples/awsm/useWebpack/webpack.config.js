module.exports = {
    module: {
        rules: [
            {
                test: /\.wasm$/,
                type: 'webassembly/experimental'
            }
        ]
    }
}