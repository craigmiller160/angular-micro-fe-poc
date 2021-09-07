const baseConfig = require('@mfdemo/webpack-base/webpack.config');
const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const { dependencies } = require('./package.json');
const shareDeps = {};
if (process.env.SHARE_DEPS === 'true') {
    shareDeps.shared = {
        ...(dependencies || {})
    };
}

module.exports = merge(
    baseConfig,
    {
        devServer: {
            port: 3000,
            proxy: {

            }
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'parent',
                filename: 'remoteEntry.js',
                remotes: {

                },
                ...shareDeps
            })
        ]
    }
);
