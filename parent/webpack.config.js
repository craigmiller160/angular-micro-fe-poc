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
                '/one': {
                    target: 'http://localhost:3001',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/one': ''
                    }
                },
                '/two': {
                    target: 'http://localhost:3002',
                    changeOrigin: true,
                    pathRewrite: {
                        '^/two': ''
                    }
                }
            }
        },
        plugins: [
            new ModuleFederationPlugin({
                name: 'parent',
                filename: 'remoteEntry.js',
                remotes: {
                    one: 'one@/one/remoteEntry.js',
                    two: 'two@/two/remoteEntry.js'
                },
                ...shareDeps
            })
        ]
    }
);
