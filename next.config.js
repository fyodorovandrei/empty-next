const fs = require('fs');
const path = require('path');
const lessToJS = require('less-vars-to-js');
const withCSS = require('@zeit/next-css');
const withLess = require('@zeit/next-less');
const withSass = require('@zeit/next-sass');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty'
            };
        }

        return config;
    }
};

const themeVariables = lessToJS(
    fs.readFileSync(path.resolve(__dirname, './styles/antd-custom.less'), 'utf8')
);

const plugins = [
    [
        withCSS,
        {
            webpack: function (config) {
                config.module.rules.push({
                    test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
                    use: {
                        loader: 'url-loader',
                        options: {
                            limit: 100000,
                            name: '[name].[ext]'
                        }
                    }
                });
                return config;
            }
        }
    ],
    [
        withLess,
        {
            lessLoaderOptions: {
                javascriptEnabled: true,
                modifyVars: themeVariables
            }
        }
    ],
    [
        withSass,
        {
            cssModules: true,
            allowMultiple: true,
            cssLoaderOptions: {
                importLoaders: 1,
                localIdentName: '[hash:base64:10]'
            }
        }
    ]
];
module.exports = withPlugins(plugins, nextConfig);
